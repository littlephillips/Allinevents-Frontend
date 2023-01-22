import "../css/Navbar.css"

const Navbar = () => {

	return(
		<>
			<div class="dropdown text-2xl font-secondary m-2 overflow-scroll-y inline-block font-bold sticky bottom-[95%] rotate-x-90 sm:p-6 xsm:-rotate-90 opacity-100">
				<button class="bg-[#2867f0] text-white font-bold py-4 px-5 rounded-2 inline-flex items-center">
					<span>Menu </span>
				</button>
				<ul class="dropdown-content text-xl p-4 absolute hidden  text-[#2867f0] pt-1 md:p-6">
					<li>
						<a class="rounded-t bg-[#FFD23F] font-bold hover:bg-gray-400 hover:text-black py-2 px-4 block whitespace-no-wrap" href="/">Home</a>
					</li>

					<li>
						<a class="bg-[#FFD23F] hover:bg-gray-400 hover:text-black  py-2 px-4 block whitespace-no-wrap" href="/services">Services</a>
					</li>

					<li class="dropdown">
						<a class="bg-[#FFD23F] hover:bg-gray-400 hover:text-black  py-2 px-4 block whitespace-no-wrap" href="/contact">Contact</a>
						<a class="bg-[#FFD23F] hover:bg-gray-400 hover:text-black    py-2 px-4 block whitespace-no-wrap" href="/login">Admin</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Navbar;
