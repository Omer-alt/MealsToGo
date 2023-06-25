import React, { useState, useContext } from 'react';
import {   FlatList, StyleSheet,  } from "react-native";
import { Searchbar, ActivityIndicator, MD2Colors } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-infoCard.components';
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utiliy/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurant.context';


const SearchContainer = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

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
  const [searchQuery, setSearchQuery] = useState('');

  // console.log(restaurants)

  const onChangeSearch = query => setSearchQuery(query);
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
      <SearchContainer >
        <Searchbar
          elevation={2}
          tyle={styles.Searchbar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      
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

const styles = StyleSheet.create({
  Searchbar:{
    borderRadius: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});