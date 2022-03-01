import { StyleSheet, Text, 
ScrollView, 
View} from 'react-native'
import React from 'react'
import { List } from 'react-native-paper';
import Colors from '../../constants/Colors';
import {Card} from "react-native-shadow-cards" 
import Fonts from '../../constants/Fonts';

const DashBoard = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView>
        <List.Section >
        <List.Accordion
            title="My Quick Summary"
            titleStyle={styles.title}
            style={{
                backgroundColor:!expanded ? Colors.dark.background:'transparent'
            }}
            onPress={handlePress}>
                <Card style={{padding: 20, margin: 10,
                    justifyContent:'space-between'
                  }}>
                    <Text style={styles.headerDescription}>Attendance Fines</Text>
                    <Text>Expected:  Ksh.3000</Text>
                    <Text>Paid   Ksh.3000</Text>
                    <Text>Balance  Ksh.3000</Text>
                  </Card>
                  <Card style={{padding: 20, margin: 10,
                    justifyContent:'space-between'
                  }}>
                    <Text style={styles.headerDescription}>Basic Contributions</Text>
                    <Text>Expected:  Ksh.3000</Text>
                    <Text>Paid</Text>
                    <Text>Balance</Text>
                  </Card>
                  <Card style={{padding: 20, margin: 10,
                    justifyContent:'space-between'
                  }}>
                    <Text style={styles.headerDescription}>Late Payment Fines</Text>
                    <Text>Expected:  Ksh.3000</Text>
                    <Text>Paid</Text>
                    <Text>Balance</Text>
                  </Card>

             

        </List.Accordion>



        <List.Accordion
            title="Generated Summary"
            titleStyle={styles.title}
            style={{
                backgroundColor:!expanded ? Colors.dark.background:'transparent'
            }}
            onPress={handlePress}>
                <Card style={{padding: 20, margin: 10,
                    justifyContent:'space-between'
                  }}>
                    <Text style={styles.headerDescription}>Attendance Fines</Text>
                    <Text>Expected:  Ksh.3000</Text>
                    <Text>Paid Ksh.3000</Text>
                    <Text>Balance Ksh.3000</Text>
                  </Card>
                  

             

        </List.Accordion>




        
        </List.Section>


 
    </ScrollView>
  )
}

export default DashBoard

const styles = StyleSheet.create({
    title:{
        fontFamily:Fonts.header.fontfamily,
        fontWeight:'bold'
    },
    headerDescription:{
        fontFamily:Fonts.header.fontfamily,
        fontWeight:'bold',
        color:Colors.dark.tint
    }


})