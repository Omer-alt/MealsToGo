import React from 'react';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';
import { Platform } from 'react-native';
import { Text } from '../typography/text.component';

const CompactImage = styled.Image`
    border-radius: 20px;
    width: 120px;
    height: 100px;
`
const CompactWebView = styled(WebView)`
    border-radius: 20px;
    width: 120px;
    height: 100px;
`
const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    alignItems: center;
`
const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({restaurant}) => {

    // la gestion de l'affichage d'image sur la map car android ne support pas Image de RN mais plutot une view .
    const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <Item >
        <Image
            source={{
                uri:`${restaurant.photos[0]}`
            }} 

        />
        <Text center  variant="caption" numberOfLines={3}>
            {restaurant.name}
        </Text>
    </Item>
  )
}

export default CompactRestaurantInfo