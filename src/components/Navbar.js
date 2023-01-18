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
	<div
	style={{backgroundImage: `url('public/img/bg-nav.png')')`}}>
	<NavMenu className='box-border m-auto '>
		<div class="flex items-center space-x-4 justify-between ">
			<NavLink className="flex" to='/' >AllInEvents </NavLink>
			{/* <Bars /> */}
			<div class=" flex flex-row items-center">
				<NavLink className="" to='/services'>Services</NavLink>
				
			</div>
			<NavLink to='/contact' >Contact</NavLink>
		</div>
		
		


	{/* <NavBtn>
		<NavBtnLink to='/login'>Admin</NavBtnLink>
	</NavBtn> */}
	</NavMenu>
	</div>
);
};

export default Navbar;
