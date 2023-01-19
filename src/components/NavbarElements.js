import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav
`
background: #FFD23F;
height: 70px;
display: flex;
justify-content: space-between;
z-index: 12;
`;

export const NavMenu = styled.div
`
display: flex;
align-items:center;
margin-right: 24px;
}
`;

export const NavLink = styled(Link)
`
color: #2867f0;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 24px;
font-weight: bold;
&.active {
    color: rgb(255, 0, 0);
};
&:hover {
    text-decoration: none;
}

@media screen and (max-width: 768px){
    font-size: 20px;
}
`;


export const NavBtn = styled.nav
`
display: flex;
align-items: center;
margin-right: 30px;
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
    text-decoration: none;
}

@media screen and (max-width: 768px){
    padding: 4px 16px;
}
`