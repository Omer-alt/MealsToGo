import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context';
import {SearchContainer} from './restaurant-info-card.style';


const Search = () => {
    const {keyword, search} = useContext(LocationContext)

    const [searchQuery, setSearchQuery] = useState(keyword);
    const onChangeSearch = query => {
      setSearchQuery(query)
      console.log(searchQuery)
    };
    useEffect(()=>{
      search(searchQuery)
    },[])
  return (
    <SearchContainer >
        <Searchbar
            elevation={2}
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
      backgroundColor:"#FFF"
    },
  });