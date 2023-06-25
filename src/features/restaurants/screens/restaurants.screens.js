import React, { useContext } from 'react';
import {   FlatList, StyleSheet,  } from "react-native";
import { Searchbar, ActivityIndicator, MD2Colors } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-infoCard.components';
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utiliy/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurant.context';
import Search from '../components/search.component';




const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
    paddingHorizontal: 16,
  }
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


const RestaurantScreens = () => {

  const {restaurants, isLoading, error} = useContext(RestaurantsContext)

  // const res = {
  //     name : "Some restaurant",
  //     // icon: "🍔",
  //     icon: "https://picsum.photos/700",
  //     photos : [
  //       // "https://picsum.photos/700"
  //       "https://www.foodiesfeed.com/wp-content/uploads/2019/06/beautiful-vibrant-shot-of-traditional-korean-meals.jpg"
  //     ],
  //     address : "100 some random street",
  //     isOpenNow : true,
  //     rating : 4,
  //     isCloseTemporaly: true
  // }
  return (
    <SafeArea >
      {isLoading && (
        <LoadingContainer >
          <Loading size="large" animating={true} color={MD2Colors.blue300} />
        </LoadingContainer >
      )}

      <Search/>
      
      <RestaurantList
        data={ restaurants }
        renderItem={(item) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
           </Spacer>)
        }}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16}}
      />
        
        
    </SafeArea>
  )
}

export default RestaurantScreens;

