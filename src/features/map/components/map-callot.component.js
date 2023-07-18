import React from 'react';
import {View, Text} from 'react-native'
import  styled  from 'styled-components/native';
import CompactRestaurantInfo from '../../../components/restaurant/compact-restaurant-info.component';

const MyText = styled.Text`

`
const MapCallot = ({restaurant}) => {
  return (
    <CompactRestaurantInfo restaurant={restaurant} />      
  )
}

export default MapCallot