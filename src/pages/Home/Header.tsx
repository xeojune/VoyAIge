import { NavbarContainer, Logo, NavItems, NavItem, NavLink } from "../../styles/HeaderStyle";

//New HomePage Before Rendering Map
const Navbar: React.FC = () => {
    return (
      <NavbarContainer>
        <Logo>VoyAIge</Logo>
        <NavItems>
          <NavItem>
            <NavLink href="#">Popular Destinations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Instructions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Login</NavLink>
          </NavItem>
        </NavItems>
      </NavbarContainer>
    );
  };
  
  export default Navbar;