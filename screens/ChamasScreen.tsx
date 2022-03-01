import { StyleSheet, Text, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {Card} from "react-native-shadow-cards" 
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts'

const data=[{
  id:1,
  name:'Chama_1',
  description:'Chama_1 is the best chama you can get thank for joining chama_1',

},
{
  id:2,
  name:'Chama_2',
  description:'Chama_2 is the best chama you can get thank for joining chama_2',

},]
 const  ChamasScreen =()=>   {
  const navigation=useNavigation();
    return (
      <ScrollView>
        {data.map((item,id)=>(
              <Card  key={id} style={{padding: 20, margin: 10,
                    justifyContent:'space-between'
                  }}>
                <Text style={Styles.chamaHeading}>{item.name}</Text>
                <Text style={Styles.description}>{item.description}</Text>
                <TouchableOpacity onPress={()=>{
                  navigation.navigate('MainDrawer')
                }} style={Styles.button}>
                <Text style={Styles.buttonText}>Check {item.name}</Text>

                </TouchableOpacity>
              </Card>
        ))}
        


      </ScrollView>
    )
  }


  const Styles=StyleSheet.create({
    button: {
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      backgroundColor: Colors.dark.tint,
      elevation: 4, // Android
      height: 50,
      width: "70%",
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius:30,
      
      
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
    fontFamily:Fonts.header.fontfamily
  },description:{
    fontFamily:Fonts.header.fontfamily,
    padding: 20,
    fontSize:Fonts.header.fontsizeNormal


  },
  chamaHeading:{
    fontFamily:Fonts.header.fontfamily,
    fontWeight:'bold',
    fontSize:20,
    alignSelf:'center',

  }


  })


  //navigate method



    
export default ChamasScreen