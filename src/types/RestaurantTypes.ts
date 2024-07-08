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
}


export type { restaurantResponse, restaurantData }
