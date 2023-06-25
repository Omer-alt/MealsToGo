import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {RestaurantStackNavigator} from './restaurants.navigator'

import { SafeArea } from '../../components/utiliy/safe-area.component';
import { Text } from '../../components/typography/text.component';

const Tab = createBottomTabNavigator();

const SettingsScreen = () =><SafeArea><Text variant="caption">Settings</Text>
</SafeArea> 
const MapScreen = () =>
  <SafeArea>
    <Text variant="caption">Map screen</Text>
  </SafeArea>  

const AppNavigator = () => {

    const TAB_ICON = {
        Restaurants: ["md-restaurant", 'md-restaurant-outline'],
        Map: ["md-map", "md-map-outline"],
        Settings: ["md-settings", "md-settings-outline"]
    }; 
    

    const createScreenOptions = ({ route }) => { 
        return {
            tabBarIcon: ({focused, size, color}) => {
            let iconName = TAB_ICON[route.name][0]
            // console.log(iconName)
            iconName = focused?
                TAB_ICON[route.name][0]:
                TAB_ICON[route.name][1]
            ;

            return ( <Ionicons name={iconName} size={size} color={color} />)
            }
            
            ,
            headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        }
    }
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={createScreenOptions}
        >
            <Tab.Screen name="Restaurants" component={RestaurantStackNavigator} />         
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    </NavigationContainer>

  )
}

export default AppNavigator