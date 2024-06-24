import React from "react";
import { Navbar, NavbarBrand, NavbarMenu, NavbarItem } from "../../styles/NavBar";

const NavBar: React.FC = () =>{
    return(
    <Navbar>
       <NavbarBrand>VoyAIge</NavbarBrand>
       <NavbarMenu>
         <NavbarItem>
            <h2>Step 1:</h2>
            <h2>Confirm Date</h2>
         </NavbarItem>
         <NavbarItem>
            <h2>Step 2:</h2>
            <h2>Choose Location</h2>
         </NavbarItem>
         <NavbarItem>
            <h2>Step 3:</h2>
            <h2>Book Hotels</h2>
         </NavbarItem>
       </NavbarMenu>
    </Navbar>
    );
};

export default NavBar;