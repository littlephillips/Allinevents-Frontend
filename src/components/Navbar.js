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
		<NavLink to='/' >  AllInEvents </NavLink>
		<NavLink to='/services'> Services </NavLink>
		<NavLink to='/contact' >Contact</NavLink>
	</NavMenu>


	<NavBtn>
		<NavBtnLink to='/admin'>Admin</NavBtnLink>
	</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
