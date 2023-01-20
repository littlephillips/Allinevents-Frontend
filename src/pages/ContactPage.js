import React, {useState} from "react";
import { FaMapMarkerAlt,FaPhone, FaMailBulk} from "react-icons/fa";

import '../css/contact.css'
import  "../css/notification.css"



export default function ContactPage() {

const [notification, setNotification] = useState(false)
const [engage, setEngage] = useState({
  fullname:"",
  email: "",
  comment:""
})

function notifyUser(){
  setNotification((notification) => !notification);
  setTimeout(endNotification, 1000)
}

function handleChange(e){
  e.preventDefault()
  const { value, name} = e.currentTarget;

  setEngage({
    ...engage,
    [name]: value
  });
}



  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("/engagements", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        id: engage.id,
        fullname: engage.fullname,
        email: engage.email,
        comment: engage.comment
      })
    })

    await res.json()
    notifyUser();
    setEngage({
      fullname:"",
      email: "",
      comment:""
    })
  }

  function endNotification() {
    setNotification((notification) => !notification)
  }


  return (
    <div className='contact-page'>

      <div className='contact-heading'>
        <h2>Contact Us</h2>
      </div>

      <div className='contact-container'>
        <div className='contact-row'>  
          <div className='contact-column'>
              <div className='contact-widget'>

                <div className='contact-widget-item'>
                  <div className='contact-icon'>
                    <i className='FaLocationArrow'>
                    <FaMapMarkerAlt/>
                    </i>
                  </div>
                  <div className='contact-text'>
                    <h5>Address</h5>
                    <p>40 W 34th St.. Nairobi Kenya</p>
                  </div>
                </div>

                <div className='contact-widget-item'>
                  <div className='contact-icon'>
                    <i className='faphone'>
                      <FaPhone/>
                    </i>
                  </div>

                  <div className='contact-text'>
                    <h5>Contact Us</h5>
                    <p>+25471234565</p>
                  </div>
                </div>

                <div className='contact-widget-item'>
                  <div className='contact-icon'>
                    <i className='FaMailBulk'>
                      <FaMailBulk/>
                    </i>
                  </div>
                  <div className='contact-text'>
                    <h5>Mail</h5>
                    <p>allinevents.support@gmail.com</p>
                  </div>
                </div>

            </div>
          </div>

          <div className='contact-column'>


            {notification? (
              <div className='bookings-notification contact'>
                <p className="bookings-success">
                Thank you for contacting us!
                </p>
              </div>
            ) : null}   

            <div className='contact-form'>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder='fullname'
                  required
                  name="fullname"
                  value={engage.fullname}
                  onChange={handleChange}
                />
                <input 
                  type="email" 
                  placeholder='Email'
                  name ="email"
                  required
                  value={engage.email}
                  onChange={handleChange}
                />
                <textarea 
                  placeholder='Comment'
                  name="comment"
                  required
                  value={engage.comment}
                  onChange={handleChange}
                />
                <button className='contact-site-btn'>SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className='contact-row'>
          <div className='map-column'>
            <div className='contact-map'>
            <iframe title="unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.790618517481!2d36.78241265076555!3d-1.3004808360050335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde4c!2sMoringa%20School!5e0!3m2!1sen!2ske!4v1672869696560!5m2!1sen!2ske" 
                allowfullscreen=" "
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe> 
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

