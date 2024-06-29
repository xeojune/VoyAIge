import React from "react";
import GoogleMapReact from "google-map-react"
import { MapContainer } from "../../styles/Map";

const Map: React.FC = () =>{
    const coordinates = { lat: 0, lng: 0}
    return(
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                // options={''}
                // onChange={''}
                // onChildClick={''}
            >

            </GoogleMapReact>
        </MapContainer>
    );
};

export default Map;