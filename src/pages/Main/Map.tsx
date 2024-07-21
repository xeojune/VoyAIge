import React from "react";
import { MapContainer } from "../../styles/Map";
import { LocationData } from "../../types/LocationTypes";
import { PlaceData } from "../../types/PlaceTypes";
// import Marker from "../../components/Marker";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from "@react-google-maps/api";

interface MapProps {
    coordinates: LocationData;
    restaurants: PlaceData[];
    attractions: PlaceData[];
}
const containerStyle = {
    width: '100%',
    height: '100vh'
};

const Map: React.FC<MapProps> = ({ coordinates, restaurants, attractions}) =>{
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })

    //center coordinate for Map
    const center = { 
        lat: parseFloat(coordinates.latitude), 
        lng: parseFloat(coordinates.longitude) 
    }; 
    
    //리스트 컴포넌트와 어떻게 연결 시킬건지... Map과 List는 형제 컴포넌트이다 (리코일?) 
    //restaurant와 attraction들의 값들을 place.name 형태로 필터 시켜야함 (아니면 이름 없는 데이터들도 보여지기 때문) 

    return isLoaded ? (
        <MapContainer>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                options={{streetViewControl: false}}
            >
                <Marker position={{ 
                    lat: restaurants.length > 0 ? parseFloat(restaurants[0].latitude) : 10, 
                    lng: restaurants.length > 0 ? parseFloat(restaurants[0].longitude) : 100, 
                }}>
                </Marker>
            </GoogleMap>
        </MapContainer>
    ) : <></>;
};

export default Map;
