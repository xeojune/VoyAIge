import React from "react";
import styled from "styled-components";
import MarkerIcon from "../assets/marker.png";
import { Marker as GoogleMapMarker } from "@react-google-maps/api";

interface MarkerProps {
    lat: string;
    lng: string;
    count: number;
};

const StyledMarker = styled.div`
    position: relative;
    background-image: url(${MarkerIcon});
    background-size: contain;
    width: 32px;
    height: 32px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Count = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
`;

const Marker: React.FC<MarkerProps> = ({
    lat,
    lng,
    count,
}) => {
    return (
        <GoogleMapMarker position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}>
            <StyledMarker>
                <Count>{count}</Count>
            </StyledMarker>
        </GoogleMapMarker>
    );
};

export default Marker;




