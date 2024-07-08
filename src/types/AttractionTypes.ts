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
    num_reviews: string;
    rating: string;
}

export type {attractionsResponse, attractionData}