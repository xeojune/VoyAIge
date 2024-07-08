type locationResponse = {
    data: locationData[];
}

type locationData = {
    latitude: string;
    longitude: string;
}

export type { locationResponse, locationData }
