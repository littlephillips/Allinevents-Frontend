import React from 'react'
import "../css/Aboutpage.css"
import image0 from "../assets/image0.jpeg"
import image2 from "../assets/image2.jpeg"



function About() {
    return (
        <>
      <div className="about-section">
      <h1 className='tits'>About Us</h1>
      <p>AllEvents is the one place stop for planning your dream celebratiions.</p>
    <p>Our adage is simple: Celebrate. Live. Love. Snicker. We anticipate making your next soiree.</p>
    </div>
    <h2 className='team'>Our Team</h2>
     <div className="row">
      <div className="column">
       <div className="card">
       <img src={image0} alt="isir" className='isirrr'></img>
        <div className='container'>
        <h2>Isir Malak</h2>
        <p className="title">CEO & Founder</p>
        <p>Event Organizer and planner.</p>
        <p>Isir@example.com</p>
        </div>
       </div>
      </div>

      <div className="column">
      <div class="card">
      <img src={image2} alt="John"></img>
      <div className="container">
        <h2>Philip Kinuthia</h2>
        <p className="title">Art Director</p>
        <p>Deoration and photography.</p>
        <p>phillip@example.com</p>
      </div>
      </div>
     </div>

     <div className="column">
      <div className="card">
       <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-03/220317-Cynthia-Talla-ew-321p-4bc199.jpg" alt="John"></img>
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