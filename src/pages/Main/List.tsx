import React, { useState } from "react";
import { ButtonsContainer, CardContainer, ListBody, ListContainer, ListHeader, PlacesContainer, SearchBarContainer } from "../../styles/List";
import { restaurantData } from "../../types/RestaurantTypes";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import Card from "../../components/PlaceCards";

interface ListProps {
    places: restaurantData[];
    country: string | null;
}

const List: React.FC<ListProps> = ({ places, country }) =>{
    const [search, setSearch] = useState("");
    

    const handleSearchInput = (value:string) =>{
        setSearch(value);
    }
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
                    <Button radius="5px" background="white" color="gray">Recommend</Button>
                    <Button radius="5px" background="white" color="gray">Views</Button>
                    <Button radius="5px" background="white" color="gray">Eatery</Button>
                    <Button radius="5px" background="white" color="gray">Cafe</Button>
                </ButtonsContainer>

                <PlacesContainer>
                    <CardContainer>
                        {places?.filter(place => place.name).map((place, i) => (
                            <Card key={i} place={place} width="100%" color="black" background="white" />
                        ))}
                    </CardContainer>
                </PlacesContainer>
            </ListBody>
        </ListContainer>
    );
};

export default List;