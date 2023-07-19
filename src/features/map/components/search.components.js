import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { styled } from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';
// import {SearchContainer} from './restaurant-info-card.style';

export const SearchContainer = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[3]};
  top: 20px;
  z-index: 999;
  position: absolute;
  width: 100%;
`;

const Search = () => {
  const {keyword, search} = useContext(LocationContext)

  const [searchQuery, setSearchQuery] = useState(keyword);
  const onChangeSearch = query => {
    setSearchQuery(query)
    console.log(searchQuery)
  };
  useEffect(()=>{
    setSearchQuery(keyword)
  },[keyword])
    
  return (
    <SearchContainer >
        <Searchbar
          elevation={2}
          icon="map"
          style={styles.Searchbar}
          placeholder="Search for a location"
          onChangeText={onChangeSearch}
          onIconPress={() =>{
              search(searchQuery)
              console.log(searchQuery)}
          }
          value={searchQuery}
        />
    </SearchContainer>
  )
}

export default Search
const styles = StyleSheet.create({
    Searchbar:{
      borderRadius: 15,
      shadowColor: '#FFF',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 3.84,
      backgroundColor:"#FFF",
    },
});