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
      <NavLink to='/login' activeStyle> Admin</NavLink>
		</NavMenu>

		<NavBtn>
      <NavBtnLink to='/contact'>Contact</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
