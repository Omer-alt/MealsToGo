import React, { useContext, useEffect, useState } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import Search from '../components/search.components';
import { RestaurantsContext } from '../../../services/restaurants/restaurant.context';
import { LocationContext } from '../../../services/location/location.context';
import MapCallot from '../components/map-callot.component';


export const MapScreen = () => {
    const {restaurants = []} = useContext(RestaurantsContext);
    const { location } = useContext(LocationContext);
    const [latDelta, setLatDelta] = useState(0);

    const {lat, lng, viewport} = location;
    // console.log(location)

    useEffect(()=>{
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
        // console.log(northeastLat - southwestLat)

    },[location, viewport])

  return (
    <View style={styles.container}>
      <Search />
      <MapView 
            region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: latDelta,
                longitudeDelta: 0.0421,
            }}
            style={styles.map}
        >
        {restaurants.map((restaurant)=>
            <Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{ 
                    latitude: restaurant.geometry.location.lat,
                    longitude: restaurant.geometry.location.lng,
                }}                  
                description={"Marker Description"}
            >
                <Callout>
                    <MapCallot restaurant={restaurant}/>
                </Callout>
            </Marker>
        )}
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


