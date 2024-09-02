import React from "react";
import Header from "./Header"
import HomeBody from "./HomeBody";
import styled from "styled-components";

const HomePage = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
`
const Home: React.FC = () => {

    return(
        <HomePage>
            <Header />
            <HomeBody />
        </HomePage>
    )
};

export default Home;