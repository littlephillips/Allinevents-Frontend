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
    <div class="z-30 flex flex-col relative bg-[#F3FCF0] bg-opacity-75 items-center p-6 justify-center w-full ">
    <div class="absolute flex items-center justify-center w-full bg-gray-900 bg-opacity-75"></div>

    {services.map((services) => (
    <div key={services.id} class="shadow-2xl rounded-lg  w-4/5 bg-cover bg-center h-screen mb-5"
    style={{backgroundImage: `url('${services.image_url}')`}}
    
    >

    <div class="grid grid-cols-12 gap-1">
    <div class="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
        <div class="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
          {/* <img src={services.image_url} alt="serviices" /> */}
            <p class="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                {services.eventname}
            </p>
        </div>
        <div class="text-gray-400 font-semibold text-xl mb-4">{services.id}</div>
        <div class="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
    </div>

    <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
        <div class="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
            <div class="p-8">
                <p class="text-white text-xs md:text-sm lg:text-xl mb-4"> {services.description} </p>
                <p>{services.services}</p>
                <div class="bottom-0 absolute p-2 right-0">
                    <button class="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span><NavLink to="/booking">Book</NavLink></span>
                    </button> 
                </div>
            </div>
       
    </div>
</div>

</div>
</div>







    ))}


   </div>
   )
}





export default ServicePage