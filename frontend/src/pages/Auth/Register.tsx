import { AppContainer, ButtonWrap, ContentWrap, CreateAccountLink, CreateAccountWrapper, ErrorMessageWrap, InputTitle, InputWrap, LoginInput, LoginPage, LogoWrap, StyledLoginBox, SubHeader, SubHeaderWrap, TitleWrap } from "../../styles/Login";
import Header from "../Home/Header"
import LogoImage from "../../assets/Logo.png"
import { Button } from "../../components/Button";
import { AuthWrap, RegisterInputWrapper } from "../../styles/Register";
import { useState } from "react";

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const [userValid, setUserValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [nickValid, setNickValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleNickName= (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
        const regex = /^[a-zA-Z0-9_-]{2,14}$/;
        if(regex.test(nickname)) {
            setNickValid(true);
        }
        else {
            setNickValid(false);
        }
    }

    const handleRegister= (e: React.ChangeEvent<HTMLInputElement>) => {
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
    return (
        <LoginPage>
            <Header />
            <AppContainer>
                <StyledLoginBox height="550px">
                    <TitleWrap>
                        <LogoWrap>
                            <img src={LogoImage} width='120px' height='60px'/>
                        </LogoWrap>
                        <SubHeaderWrap>
                            <SubHeader>SignUp to AI trip planner - VoyAIge</SubHeader>
                        </SubHeaderWrap>
                    </TitleWrap>

                    <ContentWrap>
                        {/*Registering Name*/}
                        <InputTitle>Nickname</InputTitle>
                        <RegisterInputWrapper>
                            <InputWrap>
                                <LoginInput type="text" value={nickname} onChange={handleNickName}/>
                            </InputWrap>
                            <AuthWrap>
                                <Button radius="8px" width="100px" background="gray">Confirm</Button>
                            </AuthWrap>
                        </RegisterInputWrapper>
                            
                        <ErrorMessageWrap>
                            {
                                !nickValid && nickname.length > 0 && (
                                    <div>* Nickname should be between 2-15 characters</div>
                                )
                            }
                        </ErrorMessageWrap>

                        {/*Registering Username*/}
                        <InputTitle style={{marginTop: "26px" }}>Username / Email</InputTitle>
                        <RegisterInputWrapper>
                            <InputWrap>
                                <LoginInput type="text" value={username} onChange={handleRegister}/>
                            </InputWrap>
                            <AuthWrap>
                                <Button radius="8px" width="100px" background="gray">Verify</Button>
                            </AuthWrap>
                        </RegisterInputWrapper>
                        <ErrorMessageWrap>
                            {
                                !userValid && username.length > 0 && (
                                    <div>* Incorrect Email Address</div>
                                )
                            }
                        </ErrorMessageWrap>

                        {/*Registering Password*/}
                        <InputTitle style={{marginTop: "26px" }}>Password</InputTitle>
                        <InputWrap>
                            <LoginInput type="password" value={password} onChange={handlePassword}/>
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
                        <Button background="black" radius="10px" height="50px">Register</Button>
                    </ButtonWrap>
                    <CreateAccountWrapper>
                        <span>Already have an account? </span>
                        <CreateAccountLink to="/login">Login</CreateAccountLink>
                    </CreateAccountWrapper>
                </StyledLoginBox>
            </AppContainer>
        </LoginPage>
    )
}

export default Register;