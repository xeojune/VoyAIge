import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
    flex-direction: column;
    gap: 2.3rem;
    height: 94vh;
`

export const NavbarBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
`;

export const NavbarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NavbarItem = styled.div`
  font-size: 1rem;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;