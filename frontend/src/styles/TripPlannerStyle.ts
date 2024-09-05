import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    height: 100vh;
`

export const LeftPanel = styled.div`
    background-color: white;
    width: 450px;
    min-width: 450px;
    max-width: 500px;
    height: 100%;
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 450px;
        min-width: 450px;
        flex-direction: row;
    }

    @media (min-width: 1024px) {
        width: 500px;
        min-width: 500px;
    }

    @media (min-width: 1440px) {
        width: 550px;
        min-width: 550px;
    }
`;

