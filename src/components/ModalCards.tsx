import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PlaceData } from "../types/PlaceTypes";
import { IoCloseOutline } from "react-icons/io5";
import { FaHeart, FaStar, FaMapMarkerAlt } from "react-icons/fa";


interface ModalProps {
    place: PlaceData;
    width?: string;
    height?: string;
    background?: string;
    color?: string;
    radius?: string;
    onClose?: () => void;
};

//wrapper to handle modalref
const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; 
    outline: none;
`
const StyledModal = styled.div<Omit<ModalProps, 'place'>>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    background-color: ${props => props.background || '#ffffff'};
    border-radius: ${props => props.radius || '0.5rem'}; 
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05); 
    max-height: 82vh; 
    overflow-y: auto;
    margin: 1rem;

    @media (min-width: 768px) {
        margin: 2rem; 
        width: ${props => props.width || 'auto'}
    }
    }
    
`

const CloseButton = styled.button`
    position: absolute;
    top: 0; /* Adjust according to your design */
    right: 0;
    z-index: 50;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 48px;
        height: 48px;
    }

    &:hover {
        opacity: 1;
    }
`

const CloseIcon = styled(IoCloseOutline)`
    width: 100%;
    height: 100%;
    opacity: 0.6;
    
    &:hover {
        opacity: 1;
    }
`;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 3rem;
    box-sizing: border-box;
`;

const InfoContainer = styled.div`
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

//Header of the Content (Title, Review, Rating)
const InfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%; 
`
const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const InfoStats = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #6c757d;

    span {
        display: flex;
        align-items: center;
        margin-right: 1rem;

        svg {
            margin-right: 0.5rem;
        }
    }
`;

//Body of the Content (picture & description)
const InfoBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const ImageContainer = styled.div`
    width: 100%;
    max-width: 600px;
    height: 300px;
    overflow: hidden;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
`;

const InfoImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const InfoDescription = styled.p`
    font-size: 1rem;
    color: #333;
    text-align: left;
    margin-top: 1rem;
    width: 100%;
`;

//Footer of the Content (address)
const InfoFooter = styled.div`
    display: flex;
    align-items: center; /* Align items in the footer to the center */
    font-size: 0.8rem;
    margin-top: 1rem;
    color: #333;

    svg {
        margin-right: 0.5rem; /* Space between icon and text */
    }

    span {
        margin-right: 0.5rem;
    }
`;

const InfoAddress = styled.p`
    font-size: 0.8rem;
    text-align: left;
`


const ModalCard: React.FC<ModalProps> = ({
    place,
    width = '100%',
    height = '100%',
    background = '#67A8E3',
    color = '#FFFFFF',
    radius = '0',
    onClose = () => {},
}) => {
    //modalref state
    const modalRef = useRef<HTMLDivElement | null>(null);

    //handling close function when pressing outside of modal
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose(); // Trigger the close action
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return(
        <Wrapper>
            <StyledModal
                ref={modalRef}
                width={width}
                height={height}
                background={background} 
                color={color} 
                radius={radius}
            >
                <CloseButton onClick={onClose}>
                    <CloseIcon size={24} />
                </CloseButton>
                <ModalContainer>
                    <InfoContainer>
                        <InfoHeader>
                            <Title>{place.name}</Title>
                            <InfoStats>
                                <span><FaHeart color="red" /> {place.num_reviews} </span>
                                <span><FaStar color="gold" /> {place.rating} </span>
                            </InfoStats>
                        </InfoHeader>

                        <InfoBody>
                            <ImageContainer>
                                <InfoImage src={place.photo.images.original.url} alt={place.name} />
                            </ImageContainer>
                            <InfoDescription>{place.description}</InfoDescription>
                        </InfoBody>

                        <InfoFooter>
                            <FaMapMarkerAlt />
                            <InfoAddress>
                                {place.address}
                            </InfoAddress>
                        </InfoFooter>
                    </InfoContainer>
                </ModalContainer>
            </StyledModal>
        </Wrapper>
    )
};

export default ModalCard;