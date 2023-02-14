import React from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Length from './Length';
import Temperature from './Temperature';

const Tab = createBottomTabNavigator();
const ConversionPage = () => {
  return (
    <Tab.Navigator>
      {/* screenOptions={({route}) => ({
        tabBarIcon:({focused,size,color})=>
        let iconName;
        if(route.name==='Length'){
          iconName='ruler-horizontal';
          size=focused?25:20;
        }
        else if(route.name==='Temperature'){
          iconName='temperature-three-quarters';
          size=focused?25:20;
        }
        return(<FontAwesome5
           name={iconName}
           size={size}
           />);
        }
      })}> */}

      <Tab.Screen name="Length" component={Length} />
      <Tab.Screen name="Temperature" component={Temperature} />
    </Tab.Navigator>
  );
};

export default ConversionPage;
