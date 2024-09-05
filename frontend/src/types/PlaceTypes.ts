export type PlaceResponse = {
    data: PlaceData[];
}

export type PlaceData = {
    name: string;
    address: string;
    photo: {
        images: {
            small: {
                url: string;
            };
            original: {
                url: string;
            }
            medium: {
                url: string;
            }
        };
    };
    latitude: string;
    longitude: string;
    num_reviews: string;
    rating: string;
    description: string;
}