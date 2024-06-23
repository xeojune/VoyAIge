import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

export const MainContent = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
`;

export const LeftContent = styled.div`
  flex: 1;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightContent = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #6c757d;
  margin-bottom: 40px;
`;

export const ScreenshotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 80%;
    max-height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

// export const SearchBar = styled.input`
//   width: 100%;
//   font-size: 1.5rem;
//   padding: 10px;
//   border: 1px solid black;
//   border-radius: 5rem;
//   outline: none;

//   &::placeholder {
//     color: #aaa;
//   }
// `;
