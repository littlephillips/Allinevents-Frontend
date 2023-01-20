import "../css/Navbar.css"

// import React from 'react';
// import {
// Nav,
// NavLink,
// NavMenu,
// NavBtn,
// NavBtnLink,
// } from './NavbarElements';

// const Navbar = () => {
// return (
// 	<>

// {/* url('https://ibb.co/wyTD1rX') */}
// 	<Nav>
// 	<NavMenu className="font-primary ml-6 " style={{ display: "d-flex", justifyContent: "center"}}>
// 		{/* <NavLink className="p-6" to='/' > All-in Events</NavLink> */}
// 		<NavLink className="flex 1" to='/' > Home</NavLink>
// 		<NavLink to='/services'> Services </NavLink>
// 		<NavLink to='/contact' >Contact</NavLink>
// 	</NavMenu>


// 	<NavBtn>
// 		<NavBtnLink className="font-secondary" to='/login'>Admin</NavBtnLink>
// 	</NavBtn>
// 	</Nav>
// 	</>
// );
// };

const Navbar = () => {

	return(
		<>

<div class="dropdown text-2xl font-secondary m-2 overflow-scroll-y inline-block font-bold sticky bottom-[95%] rotate-x-90 sm:p-6 xsm:-rotate-90 opacity-100">
	<button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
		<span>Menu </span>
	</button>
	{/* <div className="sm:p-6"> */}
	<ul class="dropdown-content text-xl p-4 absolute hidden text-[#987b1a] pt-1 md:p-6">
		<li><a class="rounded-t bg-gray-200 font-semibold hover:text-blue-900 py-2 px-4 block whitespace-no-wrap" href="/">Home</a></li>
		<li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/services">Services</a></li>
      	<li class="dropdown">
          <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/contact">Contact</a>
		  <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/login">Admin</a>
          	{/* <ul class="dropdown-content absolute hidden text-gray-700 pl-5 ml-24 -mt-10">
          		<li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3-1</a></li>
              	<li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3-2</a></li>
            </ul> */}
      	</li>
		<li><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/booking">Book</a></li>
	</ul>
	{/* </div> */}
</div>
</>
	)
}

export default Navbar;
