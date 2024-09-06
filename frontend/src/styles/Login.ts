import styled from "styled-components";
import { Link } from "react-router-dom";

interface LoginBoxProps {
  width?: string;
  height?: string;
}

export const LoginPage = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
`
//Bottom Page Container under Header
export const AppContainer = styled.main`
  font-family: 'Arial', sans-serif;
  display: flex;
  width: 100%;
  height: calc(100vh - 94px);
  justify-content: center;
  align-items: center;
`
// Login Box
export const StyledLoginBox = styled.div<LoginBoxProps>`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '500px'};
  padding: 20px;
  display: flex;
  max-width: 400px;
  flex-direction: column;
  background-color: #f7f7f7;
  border-radius: 10px;
`;

// Title Container - Logo & SubHeader
export const TitleWrap = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #262626;
  display: flex;
  flex-direction: column;
`
export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const SubHeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`
export const SubHeader = styled.p`
  font-size: 10px;
  color: #333; /* Adjust the color as needed */
  text-align: center;
`
//Main Login Input Container
export const ContentWrap = styled.div`
  margin-top: 26px;
  flex: 1;
`
//Title of Input (id, pw)
export const InputTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: gray;
  margin-left: 4px;
  margin-bottom: 8px;
  transition: color 0.3s ease;
`
//Container for Input (id, pw)
export const InputWrap = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px;
  background-color: white;
  border: 1px solid #e2e0e0;
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: #a1e0fa;

    ${InputTitle} {
      color: #a1e0fa;
    }
  }
`

// actual (id, pw) inputs
export const LoginInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-size: 14px;
  font-weight: 400;
`

// error message container
export const ErrorMessageWrap = styled.div`
  margin-top: 8px;
  color: #ef0000;
  font-size: 12px;
  margin-left: 4px;
`

// Container for Button
export const ButtonWrap = styled.div`
  width: 100%;
`

// Register Link
export const CreateAccountWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const CreateAccountLink = styled(Link)`
  color: blue;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;