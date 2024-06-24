import React from "react";
import { ListContainer, ListItem } from "../../styles/List";

const List: React.FC = () =>{
    return(
        <ListContainer>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
        </ListContainer>
    );
};

export default List;