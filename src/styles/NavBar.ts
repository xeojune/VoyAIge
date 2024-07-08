import styled from "styled-components";

export const Navbar = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    min-width: 100px;
    padding-top: 20px;
    list-style-type: none;
    background-color: white;
  }
`;

export const NavbarBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
`;

export const NavbarMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  
`;

export const NavbarItem = styled.div`
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  margin-bottom: 50px;

  &:hover {
    color: #007bff;
  }
`;
