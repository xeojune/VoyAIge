import rapidApiInstance from "./AxiosInstance";

const AttractionURL = import.meta.env.VITE_ATTRACTION_URL

interface AttractionOptions {
    params:{
        location_id: string;
        sort?: string;
    }
}

const attractionOptions = (locationID: string): AttractionOptions => ({
    params: {
        location_id: locationID,
        sort: 'recommended'
    },
  });

export const getAttractionData = async (locationID: string): Promise<any> => {
    try {
      const { data: { data } } = await rapidApiInstance.get(AttractionURL, attractionOptions(locationID));
    //   console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  };