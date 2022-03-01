/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome,AntDesign,Entypo,MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import DashBoardScreen from '../screens/DashBoardScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChamasScreen from '../screens/ChamasScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Styles } from '../constants/Styles';
import Fonts from '../constants/Fonts';
import NotificationsScreen from '../screens/NotificationsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import TermsAndConditions from '../screens/TermsAndConditionsScreen';
import CopyRightScreen from '../screens/CopyRightScreen';
import DashBoard from '../screens/MainScreens/DashBoard';
import MyAttendance from '../screens/MainScreens/MyAttendance';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="Chamas" component={ChamasScreen} />
        <Stack.Screen name="notifications" component={NotificationsScreen} options={{

          headerTitle:''
        }}/>
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditions} options={{
          headerTitle:'',
          headerShadowVisible:false
        }}/>
            <Stack.Screen name="CopyRightScreen" component={CopyRightScreen} options={{
          headerTitle:'',
          headerShadowVisible:false
        }}/>

       <Stack.Screen name="MainDrawer" component={MainDrawer} options={{
      headerShown:false
        }}/>




      </Stack.Group>
    </Stack.Navigator>
  );
}
const DrawerNavigator=createDrawerNavigator();
 function MainDrawer(){
   return(
    <DrawerNavigator.Navigator
    
    initialRouteName='DashBoard'
    
    backBehavior='none'
    >
        <DrawerNavigator.Screen 
        
        name="DashBoard" component={DashBoard}/>
        <DrawerNavigator.Screen name="MyAttendance" component={MyAttendance}/>
        <DrawerNavigator.Screen name="TabTwo" component={TabTwoScreen}/>
    </DrawerNavigator.Navigator>
   )

}
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        tabBarActiveTintColor:Colors.dark.tint,
        tabBarLabelStyle:{
          fontSize:scale(13),
          fontFamily:Fonts.header.fontfamily

        },
        headerTitle:() => (
          <View style={Styles.header}>

            <Image
            source={require('../assets/images/Chama254-logo.png')}
            />

          </View>

        ),        headerLeft:()=>(

          <Pressable>
          <Entypo
            name="menu"
            size={scale(35)}
            style={{ marginRight: scale(15),
            opacity:0 }}
          />
        </Pressable>
        ),

        headerRight:()=>(
          <Pressable
          onPress={() => navigation.navigate('profile')}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
          <MaterialCommunityIcons
            name="account"
            size={scale(30)}
            color={Colors[colorScheme].text}
            style={{ marginRight: scale(15) }}
          />
        </Pressable>
        ),
        


      })}
>
      <BottomTab.Screen
        name="Home"
        component={DashBoardScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({        
          tabBarIcon: ({ color }) => <Entypo name="home" color={color} size={scale(25)} />,


        })}


      />
        <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) =>           
        <MaterialCommunityIcons name="account" color={color} size={scale(25)} />,
        }}
      />

      <BottomTab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={({ navigation }: RootTabScreenProps<'Notifications'>) => ({
          title: 'Notifications',
          tabBarIcon: ({ color }) => <Ionicons name="notifications" color={color}  size={scale(25)} />,

        })}
      />

    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={scale(30)} style={{ marginBottom: scale(-3) }} {...props} />;
}
