import React from 'react'
import { NavLink } from 'react-router-dom'
// css
import "../css/servicepage.css"


function ServicePage({services}) {
  return (
    <div className="services-page">
      <h1 id="header">Our services</h1>
      <div id="content-box">
        {services.map((services) => (
          <div id="carde">
            <img src= {services.image_url} alt= 'service'/>
              <h2>{services.eventname}</h2>
              <p>
                  {services.description}
              </p>
              <ul>
                <li>{services.services}</li>
              </ul>
              <div className='services-buttons'>
              <button className="service_button-book">
                <NavLink to="/booking">Book</NavLink>
              </button>
              <button className="service_button-review">
                <NavLink to="/reviews">Review</NavLink>
              </button>
          </div>
            
          </div>
        ))}
      </div>
    </div>  
  )
}






export default ServicePage