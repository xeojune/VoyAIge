import React, { useRef, useState } from "react";
import { CardButton, ButtonsContainer, CardContainer, ListBody, ListContainer, ListHeader, PlacesContainer, SearchBarContainer } from "../../styles/List";
import SearchBar from "../../components/SearchBar";
import {Button, ToggledButton} from "../../components/Button";
import Card from "../../components/PlaceCards";
import { PlaceData } from "../../types/PlaceTypes";
import { useRecoilState } from "recoil";
import { placeListState } from "../../states/atoms/placeListState";
import ModalCard from "../../components/ModalCards";

interface ListProps {
    restaurants: PlaceData[];
    attractions: PlaceData[];
    country: string | null;
}

const List: React.FC<ListProps> = ({ restaurants, attractions, country }) =>{
    //state for search filter using searchbar
    const [search, setSearch] = useState("");
    //state for button filter using buttons
    const [filter, setFilter] = useState<"recommend" | "eatery" | "views">("recommend");
    //state for open/close card
    const [openCard, setOpenCard] = useState(false)
    //state for storing place data for modal card
    const [selectedPlace, setSelectedPlace] = useState<PlaceData | null>(null);
    //recoil state for places
    const [_, setPlaces] = useRecoilState(placeListState);
    
    
    //handling search filter
    const handleSearchInput = (value:string) =>{
        setSearch(value);
    }

    //function to add and remove places selected
    const handleAddPlaces = (place: PlaceData) => {
        setPlaces((prevPlaces) => {
            const placeIndex = prevPlaces.findIndex(p => p.latitude === place.latitude && p.longitude === place.longitude);
            if (placeIndex !== -1) {
                //Remove Place
                return prevPlaces.filter(( _, index) => index !== placeIndex);
            } else {
                //Add Place
                return [...prevPlaces, place];
            }
        });
    };

    //open selected card
    const handleOpenCard = (place: PlaceData) => {
        setSelectedPlace(place)
        setOpenCard(true);
    };

    //close selected card
    const handleCloseCard = () => {
        setOpenCard(false);
        setSelectedPlace(null);
    };

    //handling button filter
    const getFilteredPlaces = () => {
        if (filter === "eatery") {
            return restaurants;
        } else if (filter === "views") {
            return attractions;
        } else {
            return [...restaurants, ...attractions];
        }
    };

    const filteredPlaces = getFilteredPlaces();

    return(
        <ListContainer>
            <ListHeader>
                <h1>{country}</h1>
                <p>2024.07.04(목) - 2024.07.05(금)</p>
            </ListHeader>
            <ListBody>
                
                <SearchBarContainer>
                    <SearchBar width = '100%' placeholder="Type in Locations" onInputChange={handleSearchInput} />
                </SearchBarContainer>
            
                <ButtonsContainer>
                    <Button radius="5px" background={filter === "recommend" ? "#75c6f4" : "white"} color="black" onClick={() => setFilter("recommend")}>Recommended</Button>
                    <Button radius="5px" background={filter === "views" ? "#75c6f4" : "white"} color="black" onClick={() => setFilter("views")}>Sights</Button>
                    <Button radius="5px" background={filter === "eatery" ? "#75c6f4" : "white"} color="black" onClick={() => setFilter("eatery")}>Eatery</Button>
                </ButtonsContainer>

                <PlacesContainer>
                    <CardContainer>
                        {filteredPlaces?.filter(place => place.name).map((place, i) => (
                            <Card key={i} place={place} width="100%" color="black" background="white" onClick={() => handleOpenCard(place)}>
                                <CardButton>
                                    <ToggledButton background='#85e1fc' radius="5px" onClick={() => handleAddPlaces(place)} />
                                </CardButton>
                            </Card>
                        ))}

                        {openCard && selectedPlace && (
                            <ModalCard place={selectedPlace} width="600px" height="650px" background="white" color="black" radius="10px" onClose={handleCloseCard}/>
                        )}

                    </CardContainer>
                </PlacesContainer>
            </ListBody>
        </ListContainer>
    );
};

export default List;