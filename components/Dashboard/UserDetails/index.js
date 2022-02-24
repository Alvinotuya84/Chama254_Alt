import { View, Text,
TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import GridView from 'react-native-draggable-gridview'
import { Styles } from './Style'
import { scale } from 'react-native-size-matters'
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons'

const UserDetails = () => {
  const data=[
    
    {id:1,
    name:'chamas',
    color:'red',
    icon:Ionicons,
    iconName:'people',
    iconColor:'white',
    },
    
    {id:2,
      name:'Profile',
      icon:MaterialCommunityIcons,
      iconName:'account',
      iconColor:'white',
      color:'yellow'
    },    
    {id:3,
      name:'Notifications',
      icon:Ionicons,
      iconName:'notifications',
      iconColor:'white',
      color:'blue'
    },




 




      
  ];

  return (
      <GridView

      

      style={Styles.gridView}
          data={data}
          numColumns={3}
          renderItem={(item) => (
            <TouchableOpacity style={Styles.touchable}>
                <View style={{borderRadius:scale(20),
                height:scale(60),
                width:scale(60),
                backgroundColor:item.color,
                justifyContent:'center',
                alignItems:'center'
        
                }}>
                  <item.icon name={item.iconName} size={24} color={item.iconColor}/>
              </View>
              <Text>{item.name}</Text>
            </TouchableOpacity>

          )}
      />
  )
}

export default UserDetails