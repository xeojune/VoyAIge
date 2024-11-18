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
    latitude: string | number;
    longitude: string | number;
    num_reviews: string;
    rating: string;
    description: string;
}

export type BackendPlaceData = {
    name: string;
    latitude: number;
    longitude: number;
};

