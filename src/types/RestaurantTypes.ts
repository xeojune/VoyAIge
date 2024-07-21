type restaurantResponse = {
    data: restaurantData[];
}

//add more props from the rapidapi
type restaurantData = {
    name: string;
    address: string;
    photo: {
        images: {
            small: {
                url: string;
            };
        };
    };
<<<<<<< Updated upstream
=======
    latitude: string;
    longitude: string;
    num_reviews: string;
    rating: string;
>>>>>>> Stashed changes
}


export type { restaurantResponse, restaurantData }
