import {  Text, 
    ScrollView} from 'react-native'
    import React from 'react'
    import { List } from 'react-native-paper';
    import Colors from '../../constants/Colors';
    import {Card} from "react-native-shadow-cards" 
    import Fonts from '../../constants/Fonts';
    import { mainScreenStyles } from './mainStyles';
    
    const MyLoans = () => {
        const [expanded, setExpanded] = React.useState(true);
        const handlePress = () => setExpanded(!expanded);
    
      return (
        <ScrollView contentContainerStyle={mainScreenStyles.mainContainer}>
    
          <Text style={mainScreenStyles.topTitle} >MyLoans</Text>
            <List.Section style={{
              width:"100%"
            }} >
            <List.Accordion
                title="My Net Amount"
                titleStyle={mainScreenStyles.title}
                style={{
                    backgroundColor:!expanded ? Colors.dark.background:'transparent'
                }}
                onPress={handlePress}>
                    <Card style={{padding: 20, margin: 10,
                        justifyContent:'space-between'
                      }}>
                        <Text style={mainScreenStyles.headerDescription}>Attendance Fines</Text>
                        <Text>Expected:  Ksh.3000</Text>
                        <Text>Paid   Ksh.3000</Text>
                        <Text>Balance  Ksh.3000</Text>
                      </Card>
                      <Card style={{padding: 20, margin: 10,
                        justifyContent:'space-between'
                      }}>
                        <Text style={mainScreenStyles.headerDescription}>Basic Contributions</Text>
                        <Text>Expected:  Ksh.3000</Text>
                        <Text>Paid</Text>
                        <Text>Balance</Text>
                      </Card>
                      <Card style={{padding: 20, margin: 10,
                        justifyContent:'space-between'
                      }}>
                        <Text style={mainScreenStyles.headerDescription}>Late Payment Fines</Text>
                        <Text>Expected:  Ksh.3000</Text>
                        <Text>Paid</Text>
                        <Text>Balance</Text>
                      </Card>
            </List.Accordion>
    
    
    
            <List.Accordion
                title="My Quick Summary"
                titleStyle={mainScreenStyles.title}
                style={{
                    backgroundColor:!expanded ? Colors.dark.background:'transparent'
                }}
                onPress={handlePress}>
                    <Card style={{padding: 20, margin: 10,
                        justifyContent:'space-between'
                      }}>
                        <Text style={mainScreenStyles.headerDescription}>Attendance Fines</Text>
                        <Text>Expected:  Ksh.3000</Text>
                        <Text>Paid Ksh.3000</Text>
                        <Text>Balance Ksh.3000</Text>
                      </Card>
            </List.Accordion>
    
    
    
            <List.Accordion
                title="Generated Statement"
                titleStyle={mainScreenStyles.title}
                style={{
                    backgroundColor:!expanded ? Colors.dark.background:'transparent'
                }}
                onPress={handlePress}>
                    <Card style={{padding: 20, margin: 10,
                        justifyContent:'space-between'
                      }}>
                        <Text style={mainScreenStyles.headerDescription}>Attendance Fines</Text>
                        <Text>Expected:  Ksh.3000</Text>
                        <Text>Paid Ksh.3000</Text>
                        <Text>Balance Ksh.3000</Text>
                      </Card>
            </List.Accordion>
    
    
    
    
    
            
            </List.Section>
    
    
     
        </ScrollView>
      )
    }
    
    export default MyLoans
    
    