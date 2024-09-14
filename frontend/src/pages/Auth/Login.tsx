import React, { useEffect, useState } from "react"
import Header from "../Home/Header"
import { AppContainer, ButtonWrap, ContentWrap, CreateAccountLink, CreateAccountWrapper, ErrorMessageWrap, InputTitle, InputWrap, LoginInput, LoginPage, LogoWrap, StyledLoginBox, SubHeader, SubHeaderWrap, TitleWrap } from "../../styles/Login"
import { Button } from "../../components/Button";
import LogoImage from "../../assets/Logo.png"

//test
import userData from "../../api/LoginTest/auth.json";

interface User {
    nickname: string;
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [userValid, setUserValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        const regex = 
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(username)) {
            setUserValid(true);
        } else {
            setUserValid(false);
        }
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        const regex = 
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(password)){
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    const onClickConfirmButton = () => {
        const user = userData.users.find((user: User) => user.email === username && user.password === password);
        if(user){
            alert('Successfully Login.');
        } else {
            alert('Not Registered User');
        }
    }

    useEffect(() => {
        if(userValid && pwValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [userValid, pwValid]);

    return (
        <LoginPage>
            <Header />
            <AppContainer>
                <StyledLoginBox>
                    <TitleWrap>
                        <LogoWrap>
                            <img src={LogoImage} width='120px' height='60px'/>
                        </LogoWrap>
                        <SubHeaderWrap>
                            <SubHeader>Login to AI trip planner - VoyAIGe</SubHeader>
                        </SubHeaderWrap>
                    </TitleWrap>

                    <ContentWrap>
                        <InputTitle>Username / Email</InputTitle>
                        <InputWrap>
                            <LoginInput type='text' value={username} onChange={handleLogin} />
                        </InputWrap>
                        <ErrorMessageWrap>
                            {
                                !userValid && username.length > 0 && (
                                    <div>Incorrect Username. Please Input Correct Username.</div>
                                )
                            }
                        </ErrorMessageWrap>


                        <InputTitle style={{marginTop: "26px" }}>Password</InputTitle>
                        <InputWrap>
                            <LoginInput type = 'password' value={password} onChange={handlePassword}/>
                        </InputWrap>
                        <ErrorMessageWrap>
                            {
                                !pwValid && password.length > 0 && (
                                    <>
                                        <div>*Password must be more than 8 characters.</div>
                                        <div>*Password must contain at least one numerical character.</div>
                                        <div>*Password must contain at least one special character.</div>
                                    </>
                                )
                            }
                        </ErrorMessageWrap>

                    </ContentWrap>
                    
                    <ButtonWrap>
                        <Button onClick={onClickConfirmButton} disabled={notAllow} background="black" radius="10px" height="50px">Login</Button>
                    </ButtonWrap>

                    <CreateAccountWrapper>
                        <span>Don't have an account? </span>
                        <CreateAccountLink to="/register">Create an Account</CreateAccountLink>
                    </CreateAccountWrapper>
            
                </StyledLoginBox>
            </AppContainer>
        </LoginPage>
    )
};

export default Login;