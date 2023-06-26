import React, { useContext, useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import Search from '../components/search.components';
import { RestaurantsContext } from '../../../services/restaurants/restaurant.context';
import { LocationContext } from '../../../services/location/location.context';


export const MapScreen = () => {
    const {restaurants = []} = useContext(RestaurantsContext);
    const { location } = useContext(LocationContext);
    const [latDelta, setLatDelta] = useState(0);

    const {lat, lng, viewport} = location;
    console.log(location)

    useEffect(()=>{
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
        console.log(northeastLat - southwestLat)

    },[location, viewport])

  return (
    <View style={styles.container}>
      <Search />
      <MapView 
        // initialRegion={{
        //     latitude: 37.78825,
        //     longitude: -122.4324,
        //     latitudeDelta: 0.0922,
        //     longitudeDelta: 0.0421,
        // }}
        region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.0421,
        }}
        // onRegionChangeComplete={()=}
         style={styles.map}
        >
        {restaurants.map((restaurant)=>{
            return null;
        })}
      </MapView >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


