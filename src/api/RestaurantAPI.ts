import axios from 'axios';

const RestaurantURL = import.meta.env.VITE_RESTAURANT_URL

interface RestaurantOptions {
  params: {
    locationId: string;
  };
  headers: {
    'x-rapidapi-key': string;
    'x-rapidapi-host': string;
  };
}

const restaurantOptions = (locationId: string): RestaurantOptions => ({
  params: {
    locationId: locationId
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RESTAURANT_API_KEY,
    'x-rapidapi-host': import.meta.env.VITE_RESTAURANT_HOST
  }
});

//What is promise?

export const getRestaurantData = async (locationId: string): Promise<any> => {
  try {
    const { data: { data } } = await axios.get(RestaurantURL, restaurantOptions(locationId));
    return data;
  } catch (error) {
    console.log(error);
  }
};
  