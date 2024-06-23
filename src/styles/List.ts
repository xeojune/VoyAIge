import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-right: 1px solid #ddd;
  width: 300px;
  overflow-y: auto;
  height: 94vh;
`;

export const ListItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
  color: #333;

  &:hover {
    background-color: #eee;
  }
`;