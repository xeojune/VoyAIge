import React from "react"
import Header from "../Home/Header"
import { AppContainer, MainContent } from "../../styles/Login"
import styled from "styled-components";

const LoginPage = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
`

const Login: React.FC = () => {
    return (
        <LoginPage>
            <Header />
            <AppContainer>
                <MainContent>
                    hello
                </MainContent>
            </AppContainer>
        </LoginPage>
    )
};

export default Login;