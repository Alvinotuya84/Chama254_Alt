import { StyleSheet, Text, View,ScrollView ,TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import { Ionicons,AntDesign,SimpleLineIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const Access =[

  {
    id:1,
    name:'ACCOUNT',
    children:[
      {
        childName:'Manage account',
        icon:Ionicons,
        iconName:'person-outline',
        navigationRootName:'EditProfileScreen'
      },
    ]
  
  },
{
  id:2,
  name:'CONTENT & ACTIVITY',
  children:[
    {
      childName:'Push notifications',
      icon:Ionicons,
      iconName:'notifications',
      navigationRootName:'notifications'

    },
  ]

},

{
  id:3,
  name:'ABOUT',
  children:[
    {
      childName:'Terms & Conditions',
      icon:SimpleLineIcons,
      iconName:'book-open',
      navigationRootName:'TermsAndConditionsScreen'

    },
    {
      childName:'Copyright',
      icon:AntDesign,
      iconName:'copyright',
      navigationRootName:'CopyRightScreen'

    },
  ]

}

];
const ProfileScreen = () => {
  const navigation=useNavigation();
  return (
    <ScrollView
    
    
    contentContainerStyle={styles.mainContainer}>






      {
        Access.map((item)=>(
          <View key={item.id} style={styles.accessView}>
          <Text style={styles.accessViewHeader} >{item.name}</Text>
             {item.children.map((item,id)=>(
                         <TouchableOpacity key={id} onPress={()=>{
                          navigation.navigate(item.navigationRootName)
                         }} style={styles.accessChild}>
                         <item.icon name={item.iconName} size={scale(25)} color='grey' />
                         <Text style={styles.accessChildDescription}>
                          {item.childName}
                         </Text>
                       </TouchableOpacity>
             ))}
          <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />
  
        </View>
        ))
      }
      <View  style={styles.accessView}>
          <Text style={styles.accessViewHeader} >SUPPORT</Text>
                         <TouchableOpacity style={styles.accessChild}>
                         <AntDesign name='questioncircleo' size={scale(25)} color='grey' />
                         <Text style={styles.accessChildDescription}>
                          Help Center
                         </Text>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={linkToOfficialSite} style={styles.accessChild}>
                         <Ionicons name='people-outline' size={scale(25)} color='grey' />
                         <Text style={styles.accessChildDescription}>
                          Chama254 Official site
                         </Text>
                       </TouchableOpacity>
          <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />
  
        </View>
       
      
    </ScrollView>
  )
}

export default ProfileScreen


const linkToOfficialSite =()=>{
  Linking.canOpenURL('https://www.chama254.com/').then(supported => {
    if (supported) {
      Linking.openURL('https://www.chama254.com/');
    } else {
      console.log("Don't know how to open URI: " + 'https://www.chama254.com/');
    }
  });
}








const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    alignItems:'center',
    padding:20

  },
  accessView:{
    width:"91%",


  },
  accessViewHeader:{
    fontWeight:'bold',
    fontFamily:Fonts.header.fontfamily,
    color:Colors.dark.tint

  },
  accessChild:{
    flexDirection:'row',
    padding:scale(20),

  },
  accessChildDescription:{
    fontFamily:Fonts.header.fontfamily,
    paddingLeft:scale(20),


  }
})