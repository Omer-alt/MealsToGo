import React from 'react';
import {View, Text} from 'react-native'
import  styled  from 'styled-components/native';

const MyText = styled.Text`

`
const MapCallot = ({restaurant}) => {
  return (
    <View>
        <MyText>{restaurant.name}</MyText>
    </View>
  )
}

export default MapCallot