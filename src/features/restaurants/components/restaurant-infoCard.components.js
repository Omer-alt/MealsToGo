import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {SvgXml} from 'react-native-svg';
import {  Card } from 'react-native-paper';
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/spacer.component' 

import star from '../../../../assets/star'
import open from '../../../../assets/open'

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const Adress = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
    color: ${(props) => props.theme.colors.ui.primary};
`;
const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;
const Section = styled.View`
    flex-direction: row;
    align-item: center;
`;
const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-item: center;
`;
const Open = styled(SvgXml)`
    flex-direction: row;
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
        isCloseTemporaly,
    } = restaurant

    const ratingArray = new Array(Math.floor(rating)).fill(0)
    // const ratingArray = new Array.from(new Array(Math.floor(rating)))
  return (
    <RestaurantCard elevation={5} >
        <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
        <Info>
            <Title>{name}</Title>
            <Section>
                <Rating>
                    { ratingArray.map((item, index) => 
                        <SvgXml key={index} xml={star} width={20} height={20}/>  
                    )} 
                </Rating>
                <SectionEnd>
                    {isCloseTemporaly && 
                        <Text variant="label" style={{color: "red", fontSize: 12, alignSelf:"center"}}> TEMORARILY CLOSE </Text>
                    }
                    <Spacer position="left" size="large" >
                        {isOpenNow && <Open xml={open} width={20} height={20}/>}
                    </Spacer >
                    <Spacer position="left" size="large">
                        <Image style={{height: 15, width: 15}} source={{uri: icon}} />
                    </Spacer>
                </SectionEnd>
            </Section>
            <Adress>{address}</Adress>
        </Info>
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