import React, { useRef, useState } from "react";
import { CardButton, ButtonsContainer, CardContainer, ListBody, ListContainer, ListHeader, PlacesContainer, SearchBarContainer } from "../../styles/List";
import SearchBar from "../../components/SearchBar";
import {Button, ToggledButton} from "../../components/Button";
import Card from "../../components/PlaceCards";
import { PlaceData, BackendPlaceData } from "../../types/PlaceTypes";
import { useRecoilState } from "recoil";
import { placeListState } from "../../states/atoms/placeListState";
import { routeState } from "../../states/atoms/routeState";
import ModalCard from "../../components/ModalCards";
import fetchOptimalRoute from "../../api/OptimalRouteAPI";

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
    const [places, setPlaces] = useRecoilState(placeListState);
    //recoil state for route (to be used in Map)
    const [route, setRoute] = useRecoilState(routeState); 
    // Loading state for API call
    const [loading, setLoading] = useState(false); 
    
    
    //handling search filter
    const handleSearchInput = (value:string) =>{
        setSearch(value);
    }

    //function to add and remove places selected
    const handleAddPlaces = (place: PlaceData) => {
        setPlaces((prevPlaces) => {
            
            const placeIndex = prevPlaces.findIndex((p) => p.latitude === Number(place.latitude) && p.longitude === Number(place.longitude));
            
            if (placeIndex !== -1) {
                //Remove Place
                return prevPlaces.filter(( _, index) => index !== placeIndex);
            } else {
                
                return [
                    ...prevPlaces,
                    { ...place, latitude: Number(place.latitude), longitude: Number(place.longitude) },
                ];
            }
       
        });
    };

    const prepareBackendPlaces = (places: PlaceData[]): BackendPlaceData[] => {
        return places.map((place) => ({
            name: place.name,
            latitude: Number(place.latitude), // Convert to number
            longitude: Number(place.longitude), // Convert to number
        }));
    };

    const handleGetRoute = async () => {
        setLoading(true);
        try {
            const backendPlaces = prepareBackendPlaces(places); // Prepare data for backend
            console.log("Backend Places:", backendPlaces);
            const response = await fetchOptimalRoute(backendPlaces); // Call the API
            setRoute(response.route); // Store the route in state
            console.log("Optimal Route:", response.route);
        } catch (error) {
            console.error("Failed to fetch optimal route:", error);
        } finally {
            setLoading(false);
        }
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

                <Button
                    radius="5px"
                    width="300px"
                    height='50px'
                    background="#85e1fc"
                    color="black"
                    onClick={handleGetRoute}
                >
                    {loading ? "Calculating Route..." : "Get Optimal Route"}
                </Button>
                {/* {route && (
                    <div>
                        <h2>Optimal Route</h2>
                        <pre>{JSON.stringify(route, null, 2)}</pre>
                    </div>
                )} */}
            </ListBody>
        </ListContainer>
    );
};

export default List;