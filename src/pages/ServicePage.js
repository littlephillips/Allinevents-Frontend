import React from 'react'
// css
import "../css/servicepage.css"

function ServicePage({services}) {
  return (
    <div>
      <h1 id="header">Our services</h1>
      {/* <div id="wrapper"> */}
      <div id="content-box">
        {services.map((services) => (
          <div id="carde">
            <img src= {services.picture} alt= 'service'/>
              <h2>{services.title}</h2>
              <p>
                  {services.description}
              </p>
              <button id="service_button">
                <a href="#">Visit Page</a>
              </button>
          </div>
        ))}
      </div>
       {/* </div> */}
      </div>  
  )
}






export default ServicePage