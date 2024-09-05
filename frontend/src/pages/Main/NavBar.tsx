import React from "react";
import { Navbar, NavbarBrand, NavbarMenu, NavbarItem } from "../../styles/NavBar";

const NavBar: React.FC = () =>{
    return(
    <Navbar>
       <NavbarBrand>VoyAIge</NavbarBrand>
       <NavbarMenu>
         <NavbarItem>
            <h5>Step 1:</h5>
            <h5>Confirm Date</h5>
         </NavbarItem>
         <NavbarItem>
            <h5>Step 2:</h5>
            <h5>Choose Location</h5>
         </NavbarItem>
         <NavbarItem>
            <h5>Step 3:</h5>
            <h5>Book Hotels</h5>
         </NavbarItem>
       </NavbarMenu>
    </Navbar>
    );
};

export default NavBar;