import { getAttractionData } from './AttractionsAPI';
import { getLocationData } from './LocationAPI';
import { getRestaurantData } from './RestaurantAPI';

export const getPlacesData = async (query:string): Promise<any> => {
  try {
    const locationData = await getLocationData(query);
    
    if (locationData.length > 0) {
      //Return 1st Value of locationData -> name of country && return the location ID of it
      const locationId = locationData[0].result_object.location_id;

      //Return lat & long values to set the map
      const latitude = locationData[0].result_object.latitude;
      const longitude = locationData[0].result_object.longitude;
      
      //Use the location ID from above to return restaurant data and attraction data
      const restaurantData = await getRestaurantData(locationId);
      const attractionData = await getAttractionData(locationId);
      console.log(attractionData)

      //return the data within that data (contains name of the restaurants)
      return {
        latitude,
        longitude,
        restaurants: restaurantData,
        attractions: attractionData
      }

    } else {
      console.log('No location data found');
    }
  } catch (error) {
    console.log(error);
  }
};



