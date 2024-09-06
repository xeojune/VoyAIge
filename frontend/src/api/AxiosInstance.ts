import axios from "axios";

// const rapidApiInstance = axios.create({
//     baseURL: import.meta.env.VITE_BASE_URL,
//     headers: {
//         'x-rapidapi-key': import.meta.env.VITE_RESTAURANT_API_KEY,
//         'x-rapidapi-host': import.meta.env.VITE_RESTAURANT_HOST
//     }

// })

const rapidApiInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
        'x-rapidapi-host': import.meta.env.VITE_RAPID_API_HOST
    }
})

export default rapidApiInstance;