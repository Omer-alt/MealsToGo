import React, { useState } from 'react';
import {   FlatList, StatusBar, SafeAreaView, StyleSheet  } from "react-native";
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-infoCard.components';
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utiliy/safe-area.component';


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
    paddingHorizontal: 16,
  }
})``;

const RestaurantScreens = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const res = {
        name : "Some restaurant",
        // icon: "🍔",
        icon: "https://picsum.photos/700",
        photos : [
          // "https://picsum.photos/700"
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/beautiful-vibrant-shot-of-traditional-korean-meals.jpg"
        ],
        address : "100 some random street",
        isOpenNow : true,
        rating : 4,
        isCloseTemporaly: true
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
        
        <RestaurantList
          data={[
            {name: 1},
            {name: 2},
            {name: 3},
            {name: 4},
            {name: 5},
            {name: 6},
            {name: 7},
            {name: 8},
            {name: 9},
            {name: 10},
            {name: 11},
            {name: 12},
            {name: 13},
          ]}
          renderItem={() => <Spacer position="bottom" size="large"><RestaurantInfoCard restaurant={res} /></Spacer>}
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