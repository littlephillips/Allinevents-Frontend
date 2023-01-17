import React from 'react'
import { NavLink } from 'react-router-dom'
// css
// import "../css/servicepage.css"


// function ServicePage({services}) {
//   return (
//     <div className="services-page">
//       <h1 id="header">Our services</h1>
//       <div id="content-box">
//         {services.map((services) => (
//           <div id="carde">
//             <img src= {services.image_url} alt= 'service'/>
//               <h2>{services.eventname}</h2>
//               <p>
//                   {services.description}
//               </p>
//               <ul>
//                 <li>{services.services}</li>
//               </ul>
//               <div className='services-buttons'>
//               <button className="service_button-book">
//                 <NavLink to="/booking">Book</NavLink>
//               </button>
//               <button className="service_button-review">
//                 <NavLink to="/reviews">Review</NavLink>
//               </button>
//           </div>
            
//           </div>
//         ))}
//       </div>
//     </div>  
//   )
// }

const ServicePage = ({services}) =>{

//       style=  {{ background: "url('https://wallpapercave.com/wp/wp6689710.jpg')"}}> 
   return(
    <div class="z-30 flex flex-col relative bg-[#F3FCF0] bg-opacity-75 items-center p-0 justify-center w-screen ">
    {/* <div class="absolute flex items-center justify-center w-full bg-gray-900 bg-opacity-75"></div> */}

    {services.map((services) => (
    <div key={services.id} class="shadow-2xl border-b-[22px] border-[#FFD23F] w-screen bg-cover bg-center h-screen "
    style={{backgroundImage: `url('${services.image_url}')`}}
    
    
    >

    <div
        class="relative flex flex-col justify-between h-screen">
            <div
                class="relative my-6 px-8 ">
                    <div 
                        class="border-b-4 border-gray-400 px-20 py-5 mx-2 absolute ">
                        <h1 class="italic text-white text-2xl md:text-4xl lg:text-6xl uppercase text-center font-semibold">{services.eventname}</h1>
                    </div>
            </div>

    
            <div class="h-screen p-6  w-screen flex flex-col justify-center items-center ">
                <div class="lg:flex flex-col justify-center items-center lg:w-2/4 lg:h-2/3 md:h-2/3 sm:h-[50%] bg-slate-600 bg-opacity-50 ">
                    <p class="text-center text-white lg:text-3xl md:text-2xl sm:text-xl  mb-4 sm:p-2 "> {services.description} </p>
                    <p>{services.services}</p>
                    <div class=" p-2 right-0">
                        <button class="opacity-75 bg-gray-300 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span><NavLink to="/booking">Book</NavLink></span>
                        </button>
                    </div>
                </div>
            </div>
    {/* <div class="absolute bg-red-200 h-[20px] w-screen ">
    </div> */}
            
    </div>
</div>




    ))}


   </div>
   )
}





export default ServicePage