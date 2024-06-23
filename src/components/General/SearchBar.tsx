import React from "react";
import { SearchBarContainer, SearchIcon, SearchInput, SearchBarProps } from "../../styles/SearchBar";

const SearchBar: React.FC<SearchBarProps> = ({ 
    placeholder
}) => {
    return (
        <SearchBarContainer>
      <SearchIcon />
      <SearchInput placeholder={placeholder} />
    </SearchBarContainer>
    );
  };
  
  export default SearchBar;