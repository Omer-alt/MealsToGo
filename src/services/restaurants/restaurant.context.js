import React, {useState, useMemo, createContext, useEffect} from 'react'
import {restaurantServices, restaurantTransform} from './restaurant.services'

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurant = () => {
        setIsloading(true);
        setTimeout(()=>{
            restaurantServices()
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
        retrieveRestaurant();
    },[])
  return (
    <RestaurantsContext.Provider value={{restaurants, isLoading, error}}>
        {children}
    </RestaurantsContext.Provider>
  )
}

export default RestaurantContextProvider;