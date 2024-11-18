import React, { Suspense, useEffect, useState } from "react";
import Map from "./Map";
import NavBar from "./NavBar";
import List from "./List";
import { getPlacesData } from "../../api/Main";
import { LocationData } from "../../types/LocationTypes";
import { PlaceData, BackendPlaceData } from "../../types/PlaceTypes";
import { useLocation } from "react-router-dom";
import { LeftPanel, PageContainer } from "../../styles/TripPlannerStyle";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import fetchOptimalRoute from "../../api/OptimalRouteAPI";
import { placeListState } from "../../states/atoms/placeListState";
import { routeState } from "../../states/atoms/routeState";
import { travelDetailsState } from "../../states/atoms/travelDetailState";


//capitalize first letter of any given country name typed by user
const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

const TripPlanner: React.FC = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    let country = query.get('country');

    const [restaurants, setRestaurants] = useState<PlaceData[]>([]);
    const [attractions, setAttractions] = useState<PlaceData[]>([]);
    const [coordinates, setCoordinates] = useState<LocationData>({ latitude: "0", longitude: "0" });

    const places = useRecoilValue(placeListState);
    const [, setRoute] = useRecoilState(routeState);
    const [, setTravelDetails] = useRecoilState(travelDetailsState);

    if (country) {
        country = capitalizeFirstLetter(country);
    }

    const convertToBackendPlaces = (places: PlaceData[]): BackendPlaceData[] => {
        return places.map((place) => ({
            name: place.name,
            latitude: Number(place.latitude), // Convert latitude to number
            longitude: Number(place.longitude), // Convert longitude to number
        }));
    };

    // happen only at the start of app
    useEffect(() => {
        if (country) {
            getPlacesData(country)
                .then((data) => {
                    //data should store dictionary list of restaurants (30 restaurants)
                    
                    setCoordinates({
                        latitude: data.latitude,
                        longitude: data.longitude
                    })
                    setRestaurants(data.restaurants);
                    setAttractions(data.attractions);
                });
        }
    }, []);

    

    // Fetch optimal route when places change
    useEffect(() => {
        if (places.length > 0) {
            const backendPlaces = convertToBackendPlaces(places); // Convert to BackendPlaceData[]
            fetchOptimalRoute(backendPlaces)
                .then((response) => {
                    setRoute(response.route); // Set the global Recoil route state
                    setTravelDetails(response.travelDetails); // Set the global Recoil travel details state
                })
                .catch((error) => {
                    console.error("Error fetching optimal route:", error);
                });
        }
    }, [places, setRoute, setTravelDetails]);
    
    
    return(
        <RecoilRoot>
            <PageContainer>
                <LeftPanel>
                    <NavBar />
                    <Suspense fallback={
                        <div>Loading...</div>
                    }>
                        <List restaurants={restaurants} attractions={attractions} country={country} />
                    </Suspense>
                </LeftPanel>
                <Suspense fallback={
                    <div>Loadig...</div>
                }>
                    <Map 
                        coordinates={coordinates} 
                    />
                </Suspense>
            </PageContainer>
        </RecoilRoot>
        
    );
};
export default TripPlanner;