// import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
// import BookingsPage from '../pages/BookingsPage'


const ServicePage = ({services}) =>{

    // const [booking, setBooking] = useState(false)

    // const toggleBooking = () => {
    //     setBooking(!booking)
    // }

return(
<>
    <div class="flex flex-col items-center justify-center w-screen ">
    {services.map((services) => (
    <div key={services.id} class=" border-b-[22px] border-[#FFD23F] w-screen bg-cover bg-center h-screen "
    style={{backgroundImage: `url('${services.image_url}')`}}>  
    <div
        class="relative flex flex-col justify-between h-screen">
            <div class="relative my-6 px-8 ">
                <div 
                    class="border-b-4 bg-[#FFD23F] border-gray-800 px-20 py-3 mx-3 absolute font-semibold">
                    <h1 class="italic font-primary text-[#2867f0] text-2xl md:text-4xl lg:text-6xl uppercase text-center font-bold">
                        {services.eventname}
                    </h1>
                </div>
            </div>
            <div class="h-screen p-6  w-screen flex flex-col justify-center items-center ">
                <div class="p-6 rounded-sm shadow-md lg:flex flex-col justify-center items-center lg:w-2/4 lg:h-2/3 md:h-2/3 sm:h-[60%] bg-slate-800 bg-opacity-70">
                    <p class="text-center font-secondary text-white lg:text-3xl md:text-2xl sm:text-xl  mb-4 sm:p-2 ">
                        {services.description} 
                    </p>
                    <p class="text-center font-secondary text-white lg:text-3xl md:text-2xl sm:text-xl  mb-4 sm:p-2 ">
                        {services.services}
{/* 
                        {services.services.map(
                            services => (
                                <ul key={services.id}>
                                    <li>{services}</li>
                                </ul>
                            )
                        )} */}
                    </p>
                    
                    <div class="md: flex flex-col items-center p-2 right-0">                        
                        <button class="opacity-80 bg-gray-300 hover:bg-pink-900 hover:text-white text-sm font-bold py-2.5 px-8 rounded inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="green">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>
                                <NavLink class="font-primary" to="/booking">Book</NavLink>
                                {/* <NavLink  onClick={toggleBooking}>Book</NavLink>
                                {booking && (
                                    <BookingsPage/>
                                )} */}
                                </span>
                        </button>
                        <button style={{marginTop: "10px", }} class="opacity-75 bg-gray-300 hover:bg-pink-900 hover:text-white text-sm font-bold py-2.5 px-4 rounded inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24 " stroke="red">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span><NavLink class="font-primary" to="/reviews">Review</NavLink></span>
                        </button>
                    </div>
                </div>
            </div>      
        </div>
        </div>
    ))}
    </div>

    <Footer />
</>
)
}





export default ServicePage