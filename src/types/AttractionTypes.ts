type attractionsResponse = {
    data: attractionData[];
}

type attractionData = {
    name: string;
    address: string;
    photo: {
        images: {
            small: {
                url: string;
            };
        };
    };
    latitude: string;
    longitude: string;
    num_reviews: string;
    rating: string;
}

export type {attractionsResponse, attractionData}