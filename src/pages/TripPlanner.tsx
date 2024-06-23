import React from "react";
import Map from "../components/Main/Map";
import NavBar from "../components/Main/NavBar";
import List from "../components/Main/List";

const TripPlanner: React.FC = () => {
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