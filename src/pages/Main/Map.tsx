import React from "react";
import GoogleMapReact from "google-map-react"
import { MapContainer } from "../../styles/Map";
import { locationData } from "../../types/LocationTypes";

interface MapProps {
    coordinates?: locationData[];
}

const Map: React.FC<MapProps> = ({ coordinates }) =>{
    //if coordinates exist return passed coord (if not return 0, 0 center)
    const center = coordinates && coordinates.length > 0 
    ? { lat: parseFloat(coordinates[0].latitude), lng: parseFloat(coordinates[0].longitude) } 
    : { lat: 0, lng: 0 }; 
    return(
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY}}
                defaultCenter={center}
                center={center}
                defaultZoom={13}
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