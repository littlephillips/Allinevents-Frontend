//hooks
import { useState, useEffect} from 'react'

// css
import "../css/bookingspage.css"

function BookingsPage() {
const [query, setQuery] = useState("");
const [event, setEvent] = useState([]);
const [eventname, setEventName] = useState('')
const [userInfo, setUserInfo] = useState(
    {
    fullname: '',
    phonenumber: '',
    email: '',
    eventname: '',
    eventdate:''
    });

    useEffect(() => {
    fetch('http://localhost:4000/events')
    .then((res) => res.json())
    .then((data) => setEvent(data))
    },[]);

    //window.console.dir(event);

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
const res = await fetch('http://localhost:4000/bookings', {
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

const data = await res.json()
setUserInfo([...userInfo, data])
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

// search function 

function handleClick(){
let filterdEvent = event.filter (event => event.eventname.toUpperCase() === eventname.toUpperCase())
setQuery(filterdEvent)
}

return (
<div className='bookings-container'>
    <h1 className="bookings-h1">AllInEvents Booking</h1>
    <div className="form-group">

        <div className="display-event"> 
            <h2> Search For an Event </h2>
        <div className='event-search-filter'>
            <input className="search"
            type="text"
            placeholder="Event name"
            value={eventname}
            onChange={(e) => setEventName(e.target
                .value)}
            />

            <button className='events-search-button' onClick={handleClick}>Go</button>
        </div>            
                <table id="display-events">
                    <thead>
                    <tr>
                    <th> EVENT</th>                       
                    <th>DESCRIPTION</th>
                    <th>SERVICES</th>
                    <th>IMAGE</th>                        
                    </tr>
                </thead>
                { query
                    ? query.map( (event) => (
                    <tr key={event.id}>
                        <td>{event.eventname}</td>
                        <td>{event.description}</td>
                        <td>
                        {event.services.map(
                            event => (
                            <li>{event}</li>
                            )
                        )}
                        </td>
                        <td >
                        <img className='backend-images' src={event.img_url} alt="not found" />
                        </td>
                    </tr>
                    ))
                    : null }   
                <tbody>
                </tbody>
                </table>  
        </div>  

    <div className="bookings-form">
        <form onSubmit={handleSubmit}>
        <div className="main-form"> 
            <h1>Enter details to book! </h1>

            <div className="inner-form">
            <input 
            type="text"
            name="fullname" 
            placeholder="fullname"
            required = "required" 
            value={userInfo.fullname}
            onChange={onInputChange}              />
            </div>

            <div className="inner-form">
            <input 
            type="text"
            name="eventname" 
            placeholder="eventname"
            required = "required" 
            value={userInfo.eventname}
            onChange={onInputChange}              />
            </div>

            <div className="inner-form">
            <input 
            type="text"
            name="phonenumber" 
            placeholder="254797321068"
            pattern="[0-9]{12}"
            required = "required"   
            value={userInfo.phonenumber}
            onChange={onInputChange}              />
            </div>

            <div className="inner-form">
            <input 
            type="text"
            name="email" 
            placeholder="email"
            required = "required"
            autoComplete='off'
            value={userInfo.email}
            onChange={onInputChange}              />
            </div>

            <div className="inner-form">
            <input 
            type="date"
            name="eventdate" 
            min={addTwoWeeks()}
            required = "required" 
            value={userInfo.eventdate}
            onChange={onInputChange}              />
            </div>

            <button className="booking-button-profile" type="submit">Save</button>
            </div>
        </form>
    </div>
    </div>
                
    <div className="bookings-footer">
    <h3>AllInEvents &copy; 2022</h3>
    </div>

</div>   
)                      
}



export default BookingsPage

