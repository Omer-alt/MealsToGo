import React, {useState, useContext, createContext, useEffect} from 'react'
import { LocationContext } from '../location/location.context';
import {restaurantServices, restaurantTransform} from './restaurant.services'

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({children}) => {
    const {location} = useContext(LocationContext)
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurant = (locationMap) => {
        // on transforme l'objet location en chaine de caractere latitude longitude
        const location =`${locationMap.lat},${locationMap.lng}`

        setIsloading(true);
        setRestaurants([])
        setTimeout(()=>{
            restaurantServices(location)
            .then(restaurantTransform)
            .then((transfomedRestaurant)=>{
                setIsloading(false)
                setRestaurants(transfomedRestaurant)
            })
            .catch((error)=>{
                setIsloading(false)
                setError(error)
            });
        },2000)
    } 

    useEffect(()=>{
        if(location){
            retrieveRestaurant(location);
        }
    },[location])
  return (
    <RestaurantsContext.Provider value={{restaurants, isLoading, error}}>
        {children}
    </RestaurantsContext.Provider>
  )
}

export default RestaurantContextProvider;