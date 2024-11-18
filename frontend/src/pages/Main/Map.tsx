import React from "react";
import { MapContainer } from "../../styles/Map";
import { LocationData } from "../../types/LocationTypes";
// import Marker from "../../components/Marker";
import { GoogleMap, useJsApiLoader, Marker, Polyline } from '@react-google-maps/api';
import { useRecoilValue } from "recoil";
import { placeListState } from "../../states/atoms/placeListState";
import { routeState } from "../../states/atoms/routeState";
import { travelDetailsState } from "../../states/atoms/travelDetailState";

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
    const route = useRecoilValue(routeState);
    const travelDetails = useRecoilValue(travelDetailsState);

    //center coordinate for Map
    const center = { 
        lat: parseFloat(coordinates.latitude), 
        lng: parseFloat(coordinates.longitude) 
    }; 
    

    // Ensure route is not undefined and contains at least one point
    const routePath = route && route.length > 0
        ? route.map((place) => ({
              lat: place.latitude,
              lng: place.longitude,
          }))
        : [];

    // Polyline options (styling for the route line)
    const polylineOptions = {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 4,
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
                            position={{
                                lat: typeof place.latitude === 'string' ? parseFloat(place.latitude) : place.latitude, 
                                lng: typeof place.longitude === 'string' ? parseFloat(place.longitude) : place.longitude
                            }} />
                ))}
                {routePath.length > 1 && <Polyline path={routePath} options={polylineOptions} />}
            </GoogleMap>
        </MapContainer>
    ) : <></>;
};

export default Map;
