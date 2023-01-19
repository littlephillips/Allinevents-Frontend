import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
	<NavMenu className="font-primary ml-6" style={{display: "d-flex", justifyContent: "center"}}>
		{/* <NavLink className="p-6" to='/' > All-in Events</NavLink> */}
		<NavLink className="flex 1" to='/' > Home</NavLink>
		<NavLink to='/services'> Services </NavLink>
		<NavLink to='/contact' >Contact</NavLink>
	</NavMenu>


	<NavBtn>
		<NavBtnLink className="font-secondary" to='/login'>Admin</NavBtnLink>
	</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
