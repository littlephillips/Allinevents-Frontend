
import React, { useEffect, useState } from "react";
import ServicePage from '../pages/ServicePage';

function Event(){

    const [services , setServices] = useState([])

   useEffect(()=> {
    fetch("http://localhost:3000/services")
      .then((resp) => resp.json())
      .then((services) => {setServices(services) });
   }, []);

    return(
        <div>
         <ServicePage key = {services.id} services={services}/>

        </div>
    )
}

export default Event;
