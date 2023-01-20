// import Hero from "./Hero";
// import Slider from "./Slider";

const { default: Navbar } = require("../components/Navbar")
const { default: Hero } = require("./Hero")


// const HomePage = () =>{

//     return(
//     <div className='flex'>
// 		<div className="lg:flex flex-1" to='/' >AllInEvents </div>
// 		    <div class="lg:flex items-center ">
//                 <link to='/services'>Services </link>
//                 <link to='/contact' >Contact</link>
// 		    </div>
		


// 	<button>
// 		<link to='/login'>Admin</link>
// 	</button>
   
//     <Hero />
//             <Slider
//                 imageSrc={"https://cdn0.weddingwire.com/vendor/207389/original/960/jpeg/img-3866_51_983702.webp"}
//                 title={"One Step Event Planner."}
//                 subtitle={
//                   "At AllEvents, we promise to make every special event in your life unforgetable...…"
//                 }
//               />
//               <Slider
//                 imageSrc={"https://media.istockphoto.com/id/496971209/photo/the-begining-of-forever.jpg?s=612x612&w=0&k=20&c=J7uidujGk1TMNiSIMMvxyIWsVE5Pzhyvb3upPLeank0="}
//                 title={"Celebrate Affordably."}
//                 subtitle={"You dont have to break the bank to get your dream wedding...."}
//                 flipped={true}
//               />
// 	</div>
//     )

// }

// export default HomePage;

// const HomePage = () => {
//     return(
       
//     )
// }

// export default HomePage;

const HomePage = () => {

    return(
        <>
            <Navbar />
            <Hero />
        </>

    )

}

export default HomePage;