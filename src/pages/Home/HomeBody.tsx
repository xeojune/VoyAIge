import React, { useState } from "react";
import { AppContainer, MainContent, Title, Subtitle, ScreenshotContainer, LeftContent, RightContent } from "../../styles/HomeBodyStyle";
import HomeImage from "../../assets/Home.jpg"
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import { Link, useNavigate } from "react-router-dom";

const HomeBody: React.FC = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  //showing search bar button function
  const handleSearchClick = () => {
    setShowSearchBar(true);
  };

  const handleSearchInputChange = (value:string) => {
    setQuery(value);
  };

  const handleCreatePlanClick = () => {
    navigate('/TripPlanner', { state: { query } }); // Navigate to /TripPlanner with state
  };

  return (
    <AppContainer>
      <MainContent>
        <LeftContent>
          <Title>AI based new Travel Planner</Title>
          <Subtitle>Easily schedule your trips with VoyAIge</Subtitle>
          {/* if showSearchBar is set true show Search Bar, if not show button*/}
          {showSearchBar ? (
            <>
              <SearchBar 
                placeholder="Where do you want to go?"
                onInputChange={handleSearchInputChange} 
              />
              <Link to={{
                pathname: '/TripPlanner'
              }}>
                <Button width="250px" height="40px" background="black" radius='5px' onClick={handleCreatePlanClick}> Create Plan </Button>
              </Link>
            </>
          ) : (
            <Button width="250px" height="80px" background="black" onClick={handleSearchClick}> Start VoyAIge </Button>
          )}
        </LeftContent>

        <RightContent>
          <ScreenshotContainer>
            <img src={HomeImage} alt="" />
          </ScreenshotContainer>
        </RightContent>
      </MainContent>
    </AppContainer>
  );
};
  
  export default HomeBody;