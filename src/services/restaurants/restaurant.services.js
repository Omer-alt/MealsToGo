import { mockImages, mocks } from "./mock"
import camalize from "camelize"

export const restaurantServices = ( location ) => {
    return new Promise((resolve, reject)=>{
        const mock = mocks[location]
        if(!mock){
            reject("Not found");
        }

        resolve(mock)

    })
}

// pour rendre notre object camelcase on utilise le package npm camalize
export const restaurantTransform = ({results = []}) =>{

    const mappedResult = results.map((restaurant)=>{
        restaurant.photos = restaurant.photos.map((p) =>{
            return (
                mockImages[Math.ceil(Math.random()*(mockImages.length-1))]
            )
        } )
        return ({
            ...restaurant,
            isOpenNow:restaurant.opening_hours && restaurant.opening_hours.open_now,
            isCloseTemporaly: restaurant.business_status === "CLOSED_TEMPORARILY",
        })
    })

    return camalize(mappedResult)
}


