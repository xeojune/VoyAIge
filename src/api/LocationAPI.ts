import rapidApiInstance from './AxiosInstance';

const URL = import.meta.env.VITE_LOCATION_URL

interface Options {
  params:{
    query: string
  };
}

const options = (query:string): Options => ({
  params: {query: query},
});


export const getLocationData = async (query: string): Promise<any> => {
  //비동기 실행 흐름 
  try {
    const { data: { data } } = await rapidApiInstance.get(URL, options(query));
    return data;
  } catch (error) {
    console.log(error);
  }
};
