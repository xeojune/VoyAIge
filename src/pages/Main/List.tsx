import React, { useState } from "react";
import { ButtonsContainer, CardContainer, ListBody, ListContainer, ListHeader, PlacesContainer, SearchBarContainer } from "../../styles/List";
import { restaurantData } from "../../types/RestaurantTypes";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import Card from "../../components/PlaceCards";
import { attractionData } from "../../types/AttractionTypes";

interface ListProps {
    places: restaurantData[];
    attractions: attractionData[];
    country: string | null;
}

const List: React.FC<ListProps> = ({ places, attractions, country }) =>{
    //state for search filter using searchbar
    const [search, setSearch] = useState("");
    //state for button filter using buttons
    const [filter, setFilter] = useState<"recommend" | "eatery" | "views">("recommend");
    
    //handling search filter
    const handleSearchInput = (value:string) =>{
        setSearch(value);
    }
    //handling button filter
    const getFilteredPlaces = () => {
        if (filter === "eatery") {
            return places;
        } else if (filter === "views") {
            return attractions;
        } else {
            return [...places, ...attractions];
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
                    <Button radius="5px" background={filter === "recommend" ? "#75c6f4" : "white"} color="black" onClick={() => setFilter("recommend")}>Recommend</Button>
                    <Button radius="5px" background={filter === "views" ? "#75c6f4" : "white"} color="gray" onClick={() => setFilter("views")}>Views</Button>
                    <Button radius="5px" background={filter === "eatery" ? "#75c6f4" : "white"} color="gray" onClick={() => setFilter("eatery")}>Eatery</Button>
                </ButtonsContainer>

                <PlacesContainer>
                    <CardContainer>
                        {filteredPlaces?.filter(place => place.name).map((place, i) => (
                            <Card key={i} place={place} width="100%" color="black" background="white" />
                        ))}
                    </CardContainer>
                </PlacesContainer>
                
            </ListBody>
        </ListContainer>
    );
};

export default List;