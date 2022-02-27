import { StyleSheet,StatusBar } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { scale } from 'react-native-size-matters';
import { useState } from 'react';
import { RootTabScreenProps } from '../types';
//component imports
import UserDetails from '../components/Dashboard/UserDetails';
import Slider from '../components/Dashboard/Slider';
import Fonts from '../constants/Fonts';
//end of component imports

export default function DashBoardScreen({ navigation }: RootTabScreenProps<'DashBoard'>) {

  const time = new Date().getHours();
  let greeting;
  if (time < 10) {
    greeting = "Good morning";
    
  } else if (time < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor={Colors.dark.tint}      
      />
      <View style={styles.userDetails} >
        <Text style={styles.headerHello}>{greeting} Alvin!</Text>
        <Text style={styles.headerDescription}>Welcome to Chama254</Text>
        <UserDetails/>
        
      </View>
  
      <View style={styles.slider}>
        <Slider/>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  userDetails:{
    paddingTop:20,
    flex:
    1,
    alignItems:'center'

  },
  slider:{
    width: "100%",
    height: "50%",



  },
  headerHello:{
    fontSize:scale(20),
    fontWeight:'bold',
    color:Colors.dark.tint,
    fontFamily:Fonts.header.fontfamily

  },
  headerDescription:{
    fontSize:scale(15),
    fontWeight:'700',
    fontFamily:Fonts.header.fontfamily



  }

});
