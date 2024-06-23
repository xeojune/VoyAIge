import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
    placeholder: string;
}

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 30px;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SearchIcon = styled(IoSearch)`
  color: #888;
  font-size: 1.5rem;
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  color: #333;
  &::placeholder {
    color: #aaa;
  }
`;

export type { SearchBarProps };
