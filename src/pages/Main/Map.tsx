import React from "react";
import { MapContainer } from "../../styles/Map";
import { LocationData } from "../../types/LocationTypes";
// import Marker from "../../components/Marker";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from "@react-google-maps/api";
import { useRecoilValue } from "recoil";
import { placeListState } from "../../states/atoms/placeListState";

interface MapProps {
    coordinates: LocationData;
}
const containerStyle = {
    width: '100%',
    height: '100vh'
};

const Map: React.FC<MapProps> = ({ coordinates }) =>{
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })

    const places = useRecoilValue(placeListState);

    //center coordinate for Map
    const center = { 
        lat: parseFloat(coordinates.latitude), 
        lng: parseFloat(coordinates.longitude) 
    }; 
    
    //restaurant와 attraction들의 값들을 place.name 형태로 필터 시켜야함 (아니면 이름 없는 데이터들도 보여지기 때문) 

    return isLoaded ? (
        <MapContainer>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                options={{streetViewControl: false}}
            >
                {places.map((place, index) => (
                    <Marker key={`marker-${index}`} 
                            label={`${index + 1}`} 
                            position={{lat: parseFloat(place.latitude), lng: parseFloat(place.longitude)}} />
                ))}
            </GoogleMap>
        </MapContainer>
    ) : <></>;
};

export default Map;
