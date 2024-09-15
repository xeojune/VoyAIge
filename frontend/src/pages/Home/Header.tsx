import { Link, Navigate } from "react-router-dom";
import { NavbarContainer, Logo, NavItems, NavItem, NavLink } from "../../styles/HeaderStyle";
import LogoImage from "../../assets/Logo.png"
import { useRecoilState } from "recoil";
import { isAuthenticatedState } from "../../states/atoms/authState";
import { useEffect } from "react";
import getUserStatus from "../../api/UserStatus";
import { CgProfile } from "react-icons/cg";


//New HomePage Before Rendering Map
const Navbar: React.FC = () => {

    const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedState);

    useEffect(() => {
      // Check if the user is logged in by verifying the token
      const checkLoginStatus = async () => {
        const userStatus = await getUserStatus();
        if (userStatus) {
          setIsAuthenticated(true); // Set Recoil state to authenticated
        } else {
          setIsAuthenticated(false); // Set Recoil state to not authenticated
        }
    };
  
      checkLoginStatus(); // Check on component mount
    }, [setIsAuthenticated]);

    const handleLogout = () => {
      // Remove the JWT token from localStorage
      localStorage.removeItem("accessToken");
  
      // Update Recoil state to indicate the user is not authenticated
      setIsAuthenticated(false);
      console.log(localStorage.getItem('accessToken'));
    };

    return (
      <NavbarContainer>
        <Link to="/">
          <Logo src={LogoImage} alt="VoyAIge Logo" />
        </Link>
        <NavItems>
          <NavItem>
            {isAuthenticated ? (
            <NavLink as={Link} to="/login" onClick={handleLogout}>
              Logout
            </NavLink>
          ) : (
            <NavLink as={Link} to="/login">Login</NavLink> // Show Login if not authenticated
          )}
          </NavItem>
        </NavItems>
      </NavbarContainer>
    );
  };
  
  export default Navbar;