import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav
`
background: ;
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
background: #2867f0;
border-radius: 8px;
padding: 8px ;
font-size: 20px;
color: #FFF;
outline: none;
border: none;
cursor: pointer;
transtion: all 0.2s ease-in-out;
text-decoration: none;
maargin-right: 10px;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #446ec8;
    color: #ff0;
    text-decoration: none;
}

@media screen and (max-width: 768px){
    padding: 4px 16px;
}
`