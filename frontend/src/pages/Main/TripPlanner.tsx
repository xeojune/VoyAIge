import React, { Suspense, useEffect, useState } from "react";
import Map from "./Map";
import NavBar from "./NavBar";
import List from "./List";
import { getPlacesData } from "../../api/Main";
import { LocationData } from "../../types/LocationTypes";
import { PlaceData } from "../../types/PlaceTypes";
import { useLocation } from "react-router-dom";
import { LeftPanel, PageContainer } from "../../styles/TripPlannerStyle";
import { RecoilRoot } from "recoil";



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

    if (country) {
        country = capitalizeFirstLetter(country);
    }

    const [places, setPlaces] = useState([]);
    //happen only at the start of app
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
    
    return(
        <RecoilRoot>
            <PageContainer>
                <LeftPanel>
                    <NavBar />
                    <Suspense fallback={
                        <div>Loading...</div>
                    }>
                        <List restaurants={restaurants} attractions={attractions} country={country}/>
                    </Suspense>
                </LeftPanel>
                <Suspense fallback={
                    <div>Loa</div>
                }>
                    <Map coordinates={coordinates} />
                </Suspense>
            </PageContainer>
        </RecoilRoot>
        
    );
};
export default TripPlanner;