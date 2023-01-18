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
	<NavMenu style={{display: "d-flex", justifyContent: 
	"center"}}>
		<NavLink className="flex 1" to='/' >  AllInEvents </NavLink>
		<NavLink to='/services'> Services </NavLink>
		<NavLink to='/contact' >Contact</NavLink>
	</NavMenu>


	<NavBtn>
		<NavBtnLink to='/login'>Admin</NavBtnLink>
	</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
