import React from 'react';
import { createStackNavigator, TransitionPreset, TransitionPresets } from '@react-navigation/stack';

import RestaurantScreens from '../../features/restaurants/screens/restaurants.screens';
import { Text } from 'react-native';
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurantDetail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantStackNavigator = () => {
    return (
      <RestaurantStack.Navigator
        initialRouteName=""
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          headerTintColor: 'white',
          ...TransitionPresets.ModalPresentationIOS
        }}
      >
        <RestaurantStack.Screen
          name="Restaurant"
          component={RestaurantScreens}
          options={{
            title: 'Awesome app',
          }}
        />
        <RestaurantStack.Screen
          name="RestaurantDetail"
          component={RestaurantDetailScreen}
          screenOptions={{
            headerShown: false,
            presentation: "modal"
          }}
        />
        {/* <RestaurantStack.Screen
          name="Settings"
          component={Settings}
          options={{
            gestureEnabled: false,
          }}
        /> */}
      </RestaurantStack.Navigator>
    );
  }