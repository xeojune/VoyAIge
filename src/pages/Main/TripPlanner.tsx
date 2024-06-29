import React, { useEffect, useState } from "react";
import Map from "./Map";
import NavBar from "./NavBar";
import List from "./List";
import { getPlacesData } from "../../api/Main";
import { useLocation } from "react-router-dom";

const TripPlanner: React.FC = () => {
    const location = useLocation();
    const { query } = location.state || {};

    const [places, setPlaces] = useState([]);
    //happen only at the start of app
    useEffect(() => {
        if (query) {
            getPlacesData(query)
                .then((data) => {
                    console.log(data);
                    setPlaces(data);
                });
        }
    }, [query]);
    return(
        <>
            <div style={{ display: 'flex' }}>
                <NavBar />
                <List />
                <Map />
            </div>
        </>
    );
};
export default TripPlanner;