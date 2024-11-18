import axios from 'axios';
import { BackendPlaceData} from '../types/PlaceTypes';


const fetchOptimalRoute = async (places: BackendPlaceData[]): Promise<any> => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
        throw new Error('User is not authenticated');
    }

    console.log("Sending Places:", places);

    if (!places || places.length == 0) {
        throw new Error('No places provided');
    }

    const response = await axios.post(
        `http://localhost:3000/openai/optimal-route`, 
        { places }, 
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        }
    );

    console.log('Optimal route fetched:', response.data);
    return response.data; // Return the backend response
  } catch (error) {
    console.error('Error fetching optimal route:', error);
    throw error;
  }
};

export default fetchOptimalRoute;
