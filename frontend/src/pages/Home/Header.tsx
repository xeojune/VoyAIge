import { Link } from "react-router-dom";
import { NavbarContainer, Logo, NavItems, NavItem, NavLink } from "../../styles/HeaderStyle";
import LogoImage from "../../assets/Logo.png"


//New HomePage Before Rendering Map
const Navbar: React.FC = () => {
    return (
      <NavbarContainer>
        <Link to="/">
          <Logo src={LogoImage} alt="VoyAIge Logo" />
        </Link>
        <NavItems>
          <NavItem>
            <NavLink as={Link} to='/login'>Login</NavLink>
          </NavItem>
        </NavItems>
      </NavbarContainer>
    );
  };
  
  export default Navbar;