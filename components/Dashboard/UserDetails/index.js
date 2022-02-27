import { View, Text,
TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import GridView from 'react-native-draggable-gridview'
import { Styles } from './Style'
import { scale } from 'react-native-size-matters'
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const UserDetails = () => {
  const data=[
    
    {id:1,
    name:'chamas',
    color:'#adab6d',
    icon:Ionicons,
    iconName:'people',
    iconColor:'white',
    screenName:'Chamas'
    },
    
    {id:2,
      name:'Profile',
      icon:MaterialCommunityIcons,
      iconName:'account',
      iconColor:'white',
      color:'#8e6dad',
      screenName:'profile'

    },    
    {id:3,
      name:'Notifications',
      icon:Ionicons,
      iconName:'notifications',
      iconColor:'white',
      color:'#6da2ad',
      screenName:'notifications'

    },




 




      
  ];
const navigation=useNavigation();
  return (
      <GridView

      

      style={Styles.gridView}
          data={data}
          numColumns={3}
          renderItem={(item) => (
            <TouchableOpacity style={Styles.touchable}
            onPress={()=>{
              navigation.navigate(item.screenName)
            }}
            >
                <View style={{borderRadius:scale(20),
                height:scale(60),
                width:scale(60),
                backgroundColor:item.color,
                justifyContent:'center',
                alignItems:'center'
        
                }}>
                  <item.icon name={item.iconName} size={24} color={item.iconColor}/>
              </View>
              <Text style={Styles.navigationText}>{item.name}</Text>
            </TouchableOpacity>

          )}
      />
  )
}

export default UserDetails