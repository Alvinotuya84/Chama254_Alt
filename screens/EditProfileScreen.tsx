import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Fonts from '../constants/Fonts'
import { scale } from 'react-native-size-matters'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const EditProfileScreen = () => {
  return (
    <View style={styles.mainContainer}>
                <View style={styles.accessView}>
          <Text style={styles.accessViewHeader} >ACCOUNT INFORMATION</Text>
          
                    <View style={styles.accessChild}>
                         <Text style={styles.accessChildDescription1}>
                          Phone Number
                         </Text>                         
                         <Text style={styles.accessChildDescription}>
                          254799039109
                         </Text>
                       </View>
                       <View style={styles.accessChild}>
                         <Text style={styles.accessChildDescription1}>
                          Name
                         </Text>                         
                         <Text style={styles.accessChildDescription}>
                          Alvin Otuya
                         </Text>
                       </View>
             
          <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />
  
        </View>
    </View>
  )
}

export default EditProfileScreen

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
        padding:scale(20),
    
      },
      accessChildDescription:{
        fontFamily:Fonts.header.fontfamily,
        paddingLeft:scale(20),
        fontWeight:'bold'
    
    
      },
      accessChildDescription1:{
        fontFamily:Fonts.header.fontfamily,
        paddingLeft:scale(20),
    
    
      }

})

