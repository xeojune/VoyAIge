import React, { useState } from "react";
import { CardButton, ButtonsContainer, CardContainer, ListBody, ListContainer, ListHeader, PlacesContainer, SearchBarContainer } from "../../styles/List";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import Card from "../../components/PlaceCards";
import { PlaceData } from "../../types/PlaceTypes";
import { FcPlus, FcOk } from "react-icons/fc";

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
    //state for toggling icon on add places
    const [icon, setIcon] = useState(<FcPlus />);
    
    
    //handling search filter
    const handleSearchInput = (value:string) =>{
        setSearch(value);
    }

    const handleAddPlaces = () => {
        setIcon(prevIcon => prevIcon.type === FcPlus ? <FcOk /> : <FcPlus />);
    }

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
                            <Card key={i} place={place} width="100%" color="black" background="white">
                                <CardButton>
                                    <Button background='#85e1fc' radius="5px" onClick={handleAddPlaces}>{icon}</Button>
                                </CardButton>
                            </Card>
                        ))}
                    </CardContainer>
                </PlacesContainer>

            </ListBody>
        </ListContainer>
    );
};

export default List;