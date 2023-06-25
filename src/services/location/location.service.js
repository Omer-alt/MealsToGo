import camalize from "camelize"
import {locations} from './location.mock'

export const locationRequest = (searhTerm) =>{
    return new Promise((resolve, reject) =>{
        const locationMock = locations[searhTerm]
        if (!locationMock) {
            reject("Not found")
        }
        resolve(locationMock)
    })
}

export const locationTransform = (result) =>{
    const camelResult = camalize(result)
    const { geometry = {} } = camelResult.results[0];
    const { lat, lng } = geometry.location;

    return {lat,lng}
    
}