import { getLocationData } from './LocationAPI';
import { getRestaurantData } from './RestaurantAPI';

export const getPlacesData = async (query:string): Promise<any> => {
  try {
    const locationData = await getLocationData(query);
    if (locationData.length > 0) {
      const locationId = locationData[0].locationId;
      const restaurantData = await getRestaurantData(locationId);
      return restaurantData;
    } else {
      console.log('No location data found');
    }
  } catch (error) {
    console.log(error);
  }
};
