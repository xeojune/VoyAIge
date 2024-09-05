import rapidApiInstance from './AxiosInstance';

const RestaurantURL = import.meta.env.VITE_RESTAURANT_URL

interface RestaurantOptions {
  params: {
    location_id: string;
  };
}

const restaurantOptions = (locationId: string): RestaurantOptions => ({
  params: {location_id: locationId},
});


export const getRestaurantData = async (locationId: string): Promise<any> => {
  try {
    const { data: { data } } = await rapidApiInstance.get(RestaurantURL, restaurantOptions(locationId));
    return data;
  } catch (error) {
    console.log(error);
  }
};
  