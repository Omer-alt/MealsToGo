import React from 'react';
import { Image, } from 'react-native';
import {SvgXml} from 'react-native-svg';

import { Spacer } from '../../../components/spacer/spacer.component' 

import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Text } from '../../../components/typography/text.component';
import {RestaurantCard, RestaurantCardCover,  Section, SectionEnd, Info, Adress,Rating,  } from './restaurant-info-card.style';

const RestaurantInfoCard = ({restaurant}) => {

    console.log("restaurant : ", restaurant.item.isOpenNow)
    const {
        name, 
        icon,
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/beautiful-vibrant-shot-of-traditional-korean-meals.jpg"] ,
        vicinity: address  ,
        isOpenNow ,
        rating ,
        isCloseTemporaly,
    } = restaurant.item
    const ratingArray = new Array(Math.floor(rating)).fill(0)
    console.log(rating)
    // const ratingArray = new Array.from(new Array(Math.floor(rating)))
    
  return (
    <RestaurantCard elevation={5} >
        <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
        <Info>
            <Text variant="label">{name}</Text>
            <Section>
                <Rating>
                    { ratingArray.map((item, index) => 
                        <SvgXml key={index} xml={star} width={20} height={20}/>  
                    )} 
                </Rating>
                <SectionEnd>
                    {isCloseTemporaly && 
                        <Text variant="error">TEMORARILY CLOSE</Text>
                        // <Text variant="label" style={{color: "red", fontSize: 12, alignSelf:"center"}}>  </Text>
                    }
                    <Spacer position="left" size="large" >
                        {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
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
