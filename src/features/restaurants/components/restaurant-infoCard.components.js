import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {  Card } from 'react-native-paper';
import styled from 'styled-components/native'

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};
`;
const RestaurantCard = styled(Card)`
    background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
    background-color: white;
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantInfoCard = ({restaurant}) => {


    const {
        name = "Some restaurant",
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/beautiful-vibrant-shot-of-traditional-korean-meals.jpg"
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isCloseTemporaly
    } = restaurant
  return (
    <RestaurantCard elevation={5} >
        <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
        <Title>{name}</Title>
    </RestaurantCard>
  )
}

export default RestaurantInfoCard

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor:"white",

//     },
//     cover: {
//         backgroundColor: "white",
//         padding: 16,

//     },
// })