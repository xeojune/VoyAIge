import axios from 'axios';

const URL = import.meta.env.VITE_LOCATION_URL

interface Options {
  params:{
    query: string
  };
  headers: {
    'x-rapidapi-key': string;
    'x-rapidapi-host': string;
  };
}
const options = (query:string): Options => ({
  params: {query: query},
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_LOCATION_API_KEY,
    'x-rapidapi-host': import.meta.env.REACT_APP_LOCATION_HOST
  }
});


export const getLocationData = async (query: string): Promise<any> => {
  try {
    const { data: { data } } = await axios.get(URL, options(query));
    return data;
  } catch (error) {
    console.log(error);
  }
};
