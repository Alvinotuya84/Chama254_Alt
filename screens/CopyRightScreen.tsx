import {Card} from "react-native-shadow-cards" 
import React , {Component} from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from "../constants/Fonts";

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
};

class CopyRightScreen extends Component{


  render(){
    return (
     <View style={styles.container}>
            <Text style={styles.title}>Copyright </Text>
            <ScrollView 
            style={styles.tcContainer}
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                  this.setState({
                      accepted: true
                  })
                }
              }}
            >
                <Card style={{padding: 5, margin: 10}}>
                <Text style={styles.tcP}>Copyright is a legal right that  protects original works of Development.
                
                All trademarks reproduced in this application,
                </Text>
                <Text style={styles.tcP}> which are not the property of, or licensed to the operator, are acknowledged on the website</Text>
                <Text style={styles.tcP}>We do not allow any content that infringes copyright.The use of copyright of this application without proper authorization or legally valid reason may lead to violation of Chama254's policies</Text>


                </Card>

            </ScrollView>

      </View>
    );
  }

}

const { width , height } = Dimensions.get('window');

const styles = {

  container:{
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
      fontSize: 22,
      alignSelf: 'center'
  },
  tcP: {
      marginTop: 10,
      marginBottom: 10,
      paddingRight:10,
      paddingLeft:10,
      paddingTop:10,

      fontFamily:Fonts.header.fontfamily
  },

  tcL:{
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 12
  },
  tcContainer: {
      marginTop: 15,
      marginBottom: 15,
      height: height * .7
  },

  button:{
      backgroundColor:Colors.dark.tint,
      borderRadius: 5,
      padding: 10
  },

  buttonDisabled:{
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10
 },

  buttonLabel:{
      fontSize: 14,
      color: '#FFF',
      alignSelf: 'center'
  }

}

export default CopyRightScreen;