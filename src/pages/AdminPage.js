import React, {useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AdminCreateForm from '../components/AdminCreateForm';



function Admin() {

    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [engagements, setEngagements] = useState([]);
    const [create, setCreateForm] = useState(false)

    const toggleCreateForm = () => {
        setCreateForm(!create)
    }



    // get and delete booking

    useEffect(() => {
        fetch("http://35.172.230.181:3010/bookings")
        .then((res) => res.json())
        .then((data) => setBookings(data))
    }, []);


    const removeBooking = (id) => {
        fetch(`http://35.172.230.181:3010/bookings/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json'
                }
            })

            .then(console.log("Deleted"))
            .catch(err => console.log(err));
        };

    
    // get and delete booking    

    useEffect(() => {
        fetch("http://35.172.230.181:3010/engagements")
        .then((res) => res.json())
        .then((data) => setEngagements(data))
    }, []);




    const removeEngagement = (id) => {
        fetch(`http://35.172.230.181:3010/engagements/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json'
                }
            })

            .then(console.log("Deleted"))
            .catch(err => console.log(err));
        };

    // window.console.dir(engagements)

    return (
        <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                    <header class="bg-surface-primary border-bottom pt-6">
                    <div class="container-fluid">
                        <div class="mb-npx">

                            <div class="row align-items-center">
                                <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                                    <h1 class="h2 mb-0 ls-tight text-primary">Welcome ...</h1>
                                </div>
                                <div class="h-2/3">
                                    <div class="mx-n4 float-right">
                                        <button class="btn d-inline-flex btn-sm btn-primary mx-4" 
                                        onClick={() => {
                                            localStorage.clear(navigate("/"))
                                        }}>
                                            <span>Logout</span>
                                        </button>
                                    </div>                                     
                                </div>
                            </div>
                            <ul class="nav nav-tabs mt-4 overflow-x border-0">
                                <li class="nav-item ">
                                    <NavLink
                                    onClick={toggleCreateForm}
                                    class="nav-link active">Create Event</NavLink>
                                    {create && (
                                        <AdminCreateForm />
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>

         {/* dashboard */}

        <main class="py-6 bg-surface-secondary">
                    <div class="container-fluid">
                        <div class="row g-6 mb-6">
                        <div class="col-xl-4  col-13">
                            <div class="card shadow border-0">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">AllIn Budget</span>
                                            <span class="h3 font-bold mb-0">$50000.90</span>
                                        </div>
                                        <div class="col-auto">
                                            <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                <i class="bi bi-credit-card"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-2 mb-0 text-sm">
                                        <span class="badge badge-pill bg-soft-success text-success me-2">
                                            <i class="bi bi-arrow-up me-1"></i>24%
                                        </span>
                                        <span class="text-nowrap text-xs text-muted">Since last month</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4  col-13">
                            <div class="card shadow border-0">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Page Visit</span>
                                            <span class="h3 font-bold mb-0">215</span>
                                        </div>
                                        <div class="col-auto">
                                            <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                <i class="bi bi-people"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-2 mb-0 text-sm">
                                        <span class="badge badge-pill bg-soft-success text-success me-2">
                                            <i class="bi bi-arrow-up me-1"></i>30%
                                        </span>
                                        <span class="text-nowrap text-xs text-muted">Since last month</span>
                                    </div>
                                </div>
                            </div>
                        </div>



                    <div class="col-xl-4 col-13">
                            <div class="card shadow border-0">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Motivation </span>
                                            <span class="h3 font-bold mb-0">95%</span>
                                        </div>
                                        <div class="col-auto">
                                        <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                        <i class="bi bi-minecart-loaded"></i>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="mt-2 mb-0 text-sm">
                                        <span class="badge badge-pill bg-soft-success text-success me-2">
                                            <i class="bi bi-arrow-up me-1"></i>10%
                                        </span>
                                        <span class="text-nowrap text-xs text-muted">Since last month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


        {/* bookings*/}
                        <div class="card-header m-3 text-center bg-primary" >
                            <h1 class="lg text-lg text-white ">AllInEvents Bookings</h1>
                        </div>
                        <div class="table-responsive">
                        <table class="table table-hover table-nowrap">
                            <thead class="lg text-lg text-black bg-slate-200">
                                <tr>
                                    <th scope="col">Event Name</th>
                                    <th scope="col">Event Date</th>
                                    <th scope="col">Client Name</th>
                                    <th scope="col">Client Email</th>
                                    <th scope="col">Client Phone</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    (bookings.length > 0)  ?
                                    bookings && bookings.map((booking, id) => {
                                        return (
                                            <tr key={id}>
                                                <td>📊 {booking.eventname}  </td>
                                                <td>📅 {booking.eventdate}</td>
                                                <td>🧑 {booking.fullname}</td>
                                                <td>💌 {booking.email}</td>
                                                <td>📞  {booking.phonenumber}   </td>
                                                <td class="text-center">
                                                <button type="button" onClick={() => removeBooking(booking.id)} class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                    <i class="bi bi-trash text-black-700 hover:text-red-700" ></i>
                                                </button>
                                                </td>
                                            </tr>
                                        );
                                    }) : <h1
                                    style={
                                        {color: "red",
                                        fontWeight: "400",
                                        width: "100%" }
                                        }> No Available Bookings, consider more marketing!! </h1> }
                            </tbody>
                        </table>
                        </div>
                    </div>

        {/* engagements */}
                        <div class="card-header m-3 text-center bg-primary" >
                            <h1 class="lg text-lg text-white ">AllInEvents Engagements</h1>
                        </div>

                        <div class="table-responsive">
                        <table class="table table-hover table-nowrap">
                            <thead class="lg text-lg text-black bg-slate-200">
                                <tr>
                                    <th scope="col">Client Name</th>
                                    <th scope="col">Client Email</th>
                                    <th scope="col">Comment</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    (engagements.length > 0)  ?
                                    engagements && engagements.map((engagement, id) => {
                                        return (
                                            <tr key={id}>
                                                <td>🧑  {engagement.fullname} </td>
                                                <td>💌  {engagement.email} </td>
                                                <td>💬  {engagement.comment}</td>
                                                <td class="text-center">
                                                <button type="button" onClick={() => removeEngagement(engagement.id)} class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                <i class="bi bi-trash text-black-700 hover:text-red-700" ></i>
                                                </button>
                                                </td>
                                            </tr>     
                                        );
                                    }) : <h1
                                    style={
                                        {color: "green",
                                        fontWeight: "600",
                                        width: "100%",
                                        marginLeft: "10px",
                                        padding: "10px"}
                                        }> No Engagements yet!! </h1> }
                            </tbody>
                        </table>
                        </div>
                </main>
            </div>
        </div>
            )
        }

        export default Admin
