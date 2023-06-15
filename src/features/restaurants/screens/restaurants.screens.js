import React, { useState } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-infoCard.components';
import styled from 'styled-components/native'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px` };
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

const RestaurantListContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
  background-color: "transparent";
`;

const RestaurantScreens = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const res = {
        name : "Some restaurant",
        icon:"",
        photos : [
          // "https://picsum.photos/700"
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/beautiful-vibrant-shot-of-traditional-korean-meals.jpg"
        ],
        address : "100 some random street",
        isOpenNow : true,
        rating : 4,
        isCloseTemporaly: false
    }
  return (
    <SafeArea >
        <SearchContainer >
          <Searchbar
            elevation={2}
            tyle={styles.Searchbar}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer>
        <RestaurantListContainer >
        
          <RestaurantInfoCard restaurant={res} />
        </RestaurantListContainer>
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