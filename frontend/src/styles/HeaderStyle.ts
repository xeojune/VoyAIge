import styled from "styled-components";


export const NavbarContainer = styled.nav`
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavItems = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li`
  margin: 0 20px;
  font-size: 1rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  
  

  &:hover {
    color: #A8E8FF;
  }
`;

//Previous Code from Travel Advisor

// export const AppBar = styled.nav`
//     position: static;
//     background-color: #3f51b5;
//     color: white;
//     padding: 16px 24px;
// `;

// export const Toolbar = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `;

// interface TitleProps {
//     variant: 'h5' | 'h6';
// }

// export const Title = styled.h5<TitleProps>`
//     display: none;
//     margin: 0;
//     color: white;

//     ${(props) =>
//         props.variant === 'h5' &&
//         css`
//             font-size: 1.5rem;
//         `}

//     ${(props) =>
//         props.variant === 'h6' &&
//         css`
//             font-size: 1.25rem;
//         `}

//     @media (min-width: 600px) {
//         display: block;
//     }
// `;

// export const BoxContainer = styled.div`
//     display: flex;
//     align-items: center;
// `;

// export const Search = styled.div`
//     position: relative;
//     border-radius: 4px;
//     background-color: rgba(255, 255, 255, 0.15);
//     &:hover {
//         background-color: rgba(255, 255, 255, 0.25);
//     }
//     margin-right: 16px;
//     margin-left: 0;
//     width: 100%;

//     @media (min-width: 600px) {
//         margin-left: 24px;
//         width: auto;
//     }
// `;

// export const SearchIconWrapper = styled.div`
//     padding: 0 16px;
//     height: 100%;
//     position: absolute;
//     pointer-events: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: white;
// `;

// export const InputBase = styled.input`
//     color: white;
//     background: none;
//     border: none;
//     padding: 8px 8px 8px 0;
//     padding-left: calc(1em + 32px);
//     width: 100%;

//     @media (min-width: 960px) {
//         width: 200px;
//     }

//     &:focus {
//         outline: none;
//     }
    
//     &::placeholder {
//         color: rgba(255, 255, 255, 0.5);
//     }
// `;

