import React, { useEffect, useState } from "react";
import Map from "./Map";
import NavBar from "./NavBar";
import List from "./List";
import { getPlacesData } from "../../api/Main";
import { useLocation } from "react-router-dom";
import { restaurantData } from "../../types/RestaurantTypes";
import { locationData } from "../../types/LocationTypes";
import { LeftPanel, PageContainer } from "../../styles/TripPlannerStyle";
import { attractionData } from "../../types/AttractionTypes";

//capitalize first letter of any given country name typed by user
const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

const TripPlanner: React.FC = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    let country = query.get('country');

    const [restaurants, setRestaurants] = useState<restaurantData[]>([]);
    const [attractions, setAttractions] = useState<attractionData[]>([]);
    const [coordinates, setCoordinates] = useState<locationData[]>([]);

    if (country) {
        country = capitalizeFirstLetter(country);
    }

    //happen only at the start of app
    useEffect(() => {
        console.log(country)
        if (country) {
            getPlacesData(country)
                .then((data) => {
                    //data should store dictionary list of restaurants (30 restaurants)
                    console.log(data)
                    setCoordinates([{
                        latitude: data.latitude,
                        longitude: data.longitude
                    }])
                    setRestaurants(data.restaurants);
                    setAttractions(data.attractions);
                });
        }
    }, []);

    return(
        <PageContainer>
            <LeftPanel>
                <NavBar />
                <List places={restaurants} attractions={attractions} country={country}/>
            </LeftPanel>
            <Map coordinates={coordinates} />
        </PageContainer>
    );
};
export default TripPlanner;