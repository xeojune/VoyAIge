import { AppContainer, ButtonWrap, ContentWrap, CreateAccountLink, CreateAccountWrapper, ErrorMessageWrap, InputTitle, InputWrap, LoginInput, LoginPage, LogoWrap, StyledLoginBox, SubHeader, SubHeaderWrap, TitleWrap } from "../../styles/Login";
import Header from "../Home/Header"
import LogoImage from "../../assets/Logo.png"
import { Button } from "../../components/Button";
import { AuthWrap, RegisterInputWrapper, SuccessContentWrap, SuccessHeader, SuccessHeaderWrap } from "../../styles/Register";
import { useEffect, useState } from "react";

//test
import userData from "../../api/LoginTest/auth.json";
import { SuccessCheckmark } from "../../animations/CheckAnimation";
import { FaCheck } from "react-icons/fa";

interface User {
    nickname: string;
    email: string;
    password: string;
}

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const [userValid, setUserValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [nickValid, setNickValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    //duplicate checking
    const [dupNick, setDupNick] = useState(false);
    const [dupUser, setDupUser] = useState(false);

    //show checkmark if nickname valid & no duplicate
    const [showCheckmark, setShowCheckmark] = useState(false);
    const [showCheckmark2, setShowCheckmark2] = useState(false);

    const [success, setSuccess] = useState(false);

    const handleNickName= (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
        const regex = /^[a-zA-Z0-9_-]{2,14}$/;
        if(regex.test(nickname)) {
            setNickValid(true);
        }
        else {
            setNickValid(false);
        }
        setDupNick(false);
        setShowCheckmark(false);
    }

    const handleDupNick = (nickname:string) => {
        const duplicate = userData.users.some((user: User) => user.nickname === nickname);
        setDupNick(duplicate);

        if (!duplicate && nickValid) {
            setShowCheckmark(true); // Show success animation if no duplicates
        } else {
            setShowCheckmark(false); // Hide animation if duplicates or invalid
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
        setDupUser(false);
        setShowCheckmark2(false);
    }

    const handleDupUser = (username:string) => {
        const duplicateUser = userData.users.some((user: User) => user.email === username);
        setDupUser(duplicateUser);

        if (!duplicateUser && userValid) {
            setShowCheckmark2(true); // Show success animation if no duplicates
        } else {
            setShowCheckmark2(false); // Hide animation if duplicates or invalid
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

    const handleSubmit = async () => {
        console.log(username, password, nickname)
        setSuccess(true);
    }

    useEffect(() => {
        if(userValid && pwValid && nickValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [userValid, pwValid, nickValid, dupNick, dupUser]);

    return (
        <LoginPage>
            <Header />
            <>
                {success ? (
                    <AppContainer>
                        <StyledLoginBox height="550px">
                            <TitleWrap>
                                <LogoWrap>
                                    <img src={LogoImage} width='120px' height='60px'/>
                                </LogoWrap>
                            </TitleWrap>
                            <SuccessContentWrap>
                                <SuccessHeaderWrap>
                                    <SuccessHeader>Sign Up Successful!</SuccessHeader>
                                </SuccessHeaderWrap>
                                <CreateAccountWrapper>
                                    <CreateAccountLink to="/login">Login</CreateAccountLink>
                                </CreateAccountWrapper>
                            </SuccessContentWrap>
                        </StyledLoginBox>
                    </AppContainer>
                ) : (
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
                                        <Button radius="8px" width="100px" background="gray" onClick={() => handleDupNick(nickname)}>
                                            {showCheckmark ? (
                                                <FaCheck/>
                                            ) : (
                                                "Confirm"
                                            )}
                                        </Button>
                                    </AuthWrap>
                                </RegisterInputWrapper>
                                    
                                <ErrorMessageWrap>
                                    {
                                        !nickValid && nickname.length > 0 && (
                                            <div>* Nickname should be between 2-15 characters</div>
                                        )
                                    }
                                    {
                                        nickValid && dupNick && (
                                            <div>* This nickname is already taken</div>
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
                                        <Button radius="8px" width="100px" background="gray" onClick={() => handleDupUser(username)}>
                                            {showCheckmark2 ? (
                                                <FaCheck/>
                                            ) : (
                                                "Verify"
                                            )}
                                        </Button>
                                    </AuthWrap>
                                </RegisterInputWrapper>
                                <ErrorMessageWrap>
                                    {
                                        !userValid && username.length > 0 && (
                                            <div>* Incorrect Email Address</div>
                                        )
                                    }
                                    {
                                        userValid && dupUser && (
                                            <div>* This Email is already registered.</div>
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
                                <Button background="black" radius="10px" height="50px" disabled={notAllow} onClick={handleSubmit}>Register</Button>
                            </ButtonWrap>
                            <CreateAccountWrapper>
                                <span>Already have an account? </span>
                                <CreateAccountLink to="/login">Login</CreateAccountLink>
                            </CreateAccountWrapper>
                        </StyledLoginBox>
                    </AppContainer>
                )}
            </>
        </LoginPage>
    )
}

export default Register;