import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


// css
import "../css/bookingspage.css"
import  "../css/notification.css"

function BookingsPage() {

    const navigate = useNavigate()

    const [notification, setNotification] = useState(false)
    const [userInfo, setUserInfo] = useState(
    {
        fullname: '',
        phonenumber: '',
        email: '',
        eventname: '',
        eventdate:''
    });

    // NOTIFICATION
    function notifyUser(){
        setNotification((notification) => !notification);
        setTimeout(endNotification, 1000)
    }


    function onInputChange(event) {
        event.preventDefault();
        event.stopPropagation();
    
        const { value, name } = event.currentTarget;
    
        setUserInfo({
        ...userInfo,
        [name]: value,
        });
    }
    

const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://35.172.230.181:3010/bookings', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        id: userInfo.id,
        fullname: userInfo.fullname,
        phonenumber: userInfo.phonenumber,
        email: userInfo.email,
        county: userInfo.county,
        eventname: userInfo.eventname,
        eventdate: userInfo.eventdate
    })
    })
    
    await res.json()
    notifyUser();    
        
        setUserInfo({
            fullname: '',
            phonenumber: '',
            email: '',
            eventname: '',
            eventdate:''
        })
    }

    function endNotification() {
        setNotification((notification) => !notification)
        navigate("/services")
    }
    

// calender input two weeks from today
    function addTwoWeeks(){
        let today = new Date();
        today.setDate(today.getDate() + 14);

        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd < 10 ){
        dd = '0' + dd
        }

        if (mm < 10) {
        mm = '0' + mm
        }

        today = yyyy + '-' + mm + '-' + dd
        return today;
    }


    return (
        <>
        <button class="prev-page" 
            onClick={() => window.history.back()}>
                Go Back
            </button>
    
        <div className='main-booking'>
        <div className="form_box">
            <h1>BOOK YOUR EVENT</h1>
            <form className="booking-form" onSubmit={handleSubmit}>
                <hr />
            <h2> 📝  Your Details</h2>

                <input 
                    className="inner-form"
                    type="text" 
                    name="fullname" 
                    id="fullname" 
                    placeholder="Your Name" 
                    required
                    value={userInfo.fullname}
                    onChange={onInputChange} 
                />

                <input 
                    className="inner-form"
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Your Email" 
                    required
                    value={userInfo.email}
                    onChange={onInputChange} 
                />


                <input 
                    className="inner-form telephone"
                    type="telephone" 
                    name="phonenumber" 
                    id="phonenumber" 
                    placeholder="Your Telephone Number" 
                    required
                    value={userInfo.phonenumber}
                    onChange={onInputChange} 
                />

                <h2> 💒  Event Name required</h2>
                    <div class="event_required">
                        <input
                            className="inner-form" 
                            type="text" 
                            name="eventname" 
                            id="eventname" 
                            placeholder="Event Name" 
                            required
                            value={userInfo.eventname}
                            onChange={onInputChange}
                        />
                    </div>
                
                <h2> 📅 Event Date Required</h2>
                <div class="date_required">

                <input 
                    className="inner-form"    
                    type="date"
                    name="eventdate" 
                    min={addTwoWeeks()}
                    id="eventdate"
                    required = "required"   
                    value={userInfo.eventdate}
                    onChange={onInputChange}      
                />
                </div> 

                <p className='allinterms'>By clicking Book now, you agree to our 
                <NavLink  className="terms-booking" to="/"> terms and conditions</NavLink>.
                </p>

                <button className="booking-button" type="submit">Book Now</button>
                    {notification? (
                        <div className='bookings-notification'>
                            <p className="bookings-success">
                                booking successfull
                            </p>
                        </div>
                    ) : null}    
            </form>
        </div>
        </div>
    </>     
    )
}

export default BookingsPage