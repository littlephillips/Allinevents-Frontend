import React from 'react'
import "../css/Aboutpage.css"
import image0 from "../assets/image0.jpeg"
import image2 from "../assets/image2.jpeg"



function About() {
    return (
  //     <div class=" min-h-min about">
  //         <div className="about-section">
  //         <h1 className='tits'>About Us</h1>
  //         <p>AllEvents is the one place stop for planning your dream celebratiions.</p>
  //       <p>Our adage is simple: Celebrate. Live. Love. Snicker. We anticipate making your next soiree.</p>
  //       </div>
  //       <h2 className='team'>Our Team</h2>
  //       <div className="row ">
  //         <div className="column">
  //         <div className="card">
  //         <img src={image0} alt="isir" className='isirrr'></img>
  //           <div className='container'>
  //           <h2>Isir Malak</h2>
  //           <p className="title">CEO & Founder</p>
  //           <p>Event Organizer and planner.</p>
  //           <p>Isir@example.com</p>
  //           </div>
  //         </div>
  //         </div>

  //         <div className="column">
  //         <div class="card">
  //         <img src={image2} alt="John"></img>
  //         <div className="container">
  //           <h2>Philip Kinuthia</h2>
  //           <p className="title">Art Director</p>
  //           <p>Deoration and photography.</p>
  //           <p>phillip@example.com</p>
  //         </div>
  //         </div>
  //       </div>

  //       <div className="column">
  //         <div className="card">
  //         <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-03/220317-Cynthia-Talla-ew-321p-4bc199.jpg" alt="John"></img>
  //           <div className="container">
  //           <h2>Silvia Mwangi</h2>
  //           <p className="title">Designer</p>
  //           <p>Designs the event decor.</p>
  //           <p>Silvia@example.com</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>


<>
<div class="shadow-sm min-h-min w-screen p-6 flex flex-col text-center bg-[#f1f1ef]">
    <h1 className='font-primary p-2 text-4xl font-bold'>About Us</h1>
    <p className='font-secondary text-md'>AllEvents is the one place stop for planning your dream celebrations.</p>
    <hr />
    <br />

    <h2 className='text-center font-bold font-primary p-4 shadow-sm '>Our Team</h2>

    <div className='flex p-2 space-x-3 justify-center'>

    {/* Card 1 */}

    

    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={image0} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Isir Malak</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>

    {/* Card 2 */}

    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={image0} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Isir Malak</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>

e
    {/* Card 3 */}

    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={image0} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Isir Malak</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>

      <div className="column">
      <div class="card">
      <img src={image2} alt="John" className='isirrr'></img>
      <div className="container">
        <h2>Philip Kinuthia</h2>
        <p className="title">Art Director</p>
        <p>Deoration and photography.</p>
        <p>phillip@example.com</p>

      </div>
    </div>

    {/* Card 4 */}

    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={image0} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Isir Malak</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>

    </div>


    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={image0} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Isir Malak</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>

     </div>

     <div className="column">
      <div className="card">
       <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-03/220317-Cynthia-Talla-ew-321p-4bc199.jpg" alt="John" className='isirrr'></img>
         <div className="container">
        <h2>Silvia Mwangi</h2>
        <p className="title">Designer</p>
        <p>Designs the event decor.</p>
        <p>Silvia@example.com</p>

      </div>
    </div>

    </div>

</div>

</>

    )
}

export default About