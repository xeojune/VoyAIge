import React from "react";
import styled from "styled-components";
// import { restaurantData } from "../types/RestaurantTypes";
import restaurantImg from '../assets/restaurant.png'
import { FcIdea, FcRating} from "react-icons/fc";
import { PlaceData } from "../types/PlaceTypes";


interface CardProps {
    place: PlaceData;
    width?: string;
    height?: string;
    background?: string;
    color?: string;
    radius?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const CardBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledCard = styled.div<Omit<CardProps, 'place'>>`
    position: relative;
    display: flex;
    align-items: center;
    width: ${props => props.width ? props.width: '100%'};
    height: ${props => props.height ? props.height: 'auto'};
    background-color: ${props => props.background ? props.background: '#ffffff'};
    border-radius: ${props => props.radius ? props.radius: '0'};
    color: ${props => props.color ? props.color: 'black'};
    padding: 0.75rem 0;
    margin: 0.5rem 0;
    font-size: 1rem;
    cursor: pointer;

    @media (min-width: 768px) {
    padding-top: 0.75rem; 
    padding-bottom: 0.75rem; 
    padding-right: 0.25rem; 
  }
`
const CardMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
`
const CardContent = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% - 50px);    
`


const PlaceLogo = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 16px;
    border-radius: 8px;
    display: inline-block;
    position: relative;
    max-width: 100%

    @media (min-width: 768px) {
        width: 50px; 
        height: 50px; 
    }
    @media (min-width: 1024px) {
        width: 60px; 
        height: 60px; 
    }
    @media (min-width: 1536px) {
        width: 72px; 
        height: 72px; 
    }
    
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10%;
    }
`
const PlaceDetails = styled.div`
    height: 40px;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    justify-content: space-between;

    @media (min-width: 768px) {
        height: 48px; 
    }
    @media (min-width: 1024px) {
        height: 60px; 
    }
    @media (min-width: 1536px) {
        height: 72px; 
    }

    width: calc(100% - 70px);

    @media (min-width: 1024px) {
        width: calc(100% - 80px);
    }
    @media (min-width: 1536px) {
        width: calc(100% - 90px);
    }

    .place-name {
        font-weight: bold;
        width: 100%;
        font-size: 0.75rem;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
        @media (min-width: 1024px) {
            font-size: 1rem; /* text-sm */
        }
        @media (min-width: 1536px) {
            font-size: 1.125rem; /* text-base */
        }
    }

    .place-address {
        width: 100%;
        font-size: 0.75rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .place-reviews {
        width: 100%;
        font-size: 0.75rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .place-ratings {
        width: 100%;
        font-size: 0.75rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`



const Card: React.FC<CardProps> = ({
    place,
    width = '100%',
    height = '100%',
    background = '#67A8E3',
    color = '#FFFFFF',
    radius = '0',
    onClick = () => {},
    children,
}) => {
    return(
        <CardBox>
            <StyledCard
                width={width}
                height={height}
                background={background} 
                color={color} 
                radius={radius}
            >
                <CardMedia>
                    <CardContent onClick={onClick}>
                    
                        <PlaceLogo>
                            <img src={place.photo ? place.photo.images.small.url : restaurantImg} alt="Thumbnail" />
                        </PlaceLogo>
                        <PlaceDetails>
                            <span className="place-name">{place.name}</span>
                            <span className="place-address">{place.address}</span>
                            <span className="place-reviews"><FcIdea />reviews: {place.num_reviews}</span>
                            <span className="place-ratings"><FcRating/>ratings: {place.rating}</span>
                        </PlaceDetails>
                        
                    </CardContent>
                    { children }
                </CardMedia>
            </StyledCard>
        </CardBox>
        
        
    );
};
export default Card;