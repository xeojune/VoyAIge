import React from "react";
import Map from "./Map";
import NavBar from "./NavBar";
import List from "./List";

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