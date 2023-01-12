import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav
`
background: rgba(255, 189, 29, 0.7);
height: 70px;
display: flex;
justify-content: Right;
z-index: 12;
`;

export const Bars = styled(FaBars)
`
display: none;
color: #060b26; 
}
`;

// @media screen and (max-width: 768px) {
//     display: block;
//     position:absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer


export const NavMenu = styled.div
`
display: flex;
// flex: 1;
align-items:center;
margin-right: 24px;
}
`;

// @media screen and (max-width: 768px) {
//     display: none;




export const NavLink = styled(Link)
`
color:rgba(37, 150, 190, 1);
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 24px;
font-weight: bold;
&.active {
    font-size: 26px;
};
`;


export const NavBtn = styled.nav
`
display: flex;
align-items: center;
margin-right: 30px;

@media screen and (max-width: 768px){
    display: none;
}

`;

export const NavBtnLink = styled(Link)
`
background: #000;
border-radius: 5px;
padding: 8px 20px;
font-size:20px;
color: #FFF;
outline: none;
border: none;
cursor: pointer;
transtion: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
	font-weight: bolder;
}
`