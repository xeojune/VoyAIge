import styled from "styled-components";

// Entire list component container
export const ListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  break-word;
  text-align: center;
  padding: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  height: 100vh;
  background-color: white;

  @media (min-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

// List header
export const ListHeader = styled.div`
  flex: 0 1 auto;
  padding-bottom: 1rem;
  text-align: center;
`;

// List body
export const ListBody = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// SearchBar container
export const SearchBarContainer = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
`;

// Buttons container
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
`;

// Places container
export const PlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 290px);
  overflow-y: auto;
  margin-bottom: 0;

  @media (min-width: 768px) {
    margin-bottom: 0.5rem; 
  }
`;

export const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 0 4px 2px;
`

export const CardButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: auto;
    height: 40px;
    @media (min-width: 768px) {
        height: 48px;
    }
    @media (min-width: 1024px) {
        height: 56px;
    }
    @media (min-width: 1536px) {
        height: 64px;
    }
`
