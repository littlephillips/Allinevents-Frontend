import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

	<NavMenu>
		<NavLink to='/' activeStyle>  AllInEvents </NavLink>
		<NavLink to='/services' activeStyle> Services </NavLink>
		<NavLink to='/contact' activeStyle>Contact</NavLink>
	</NavMenu>

	<NavBtn>
		<NavBtnLink>Admin</NavBtnLink>
	</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
