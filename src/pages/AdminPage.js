import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose, AiFillPlusCircle, AiFillDelete} from "react-icons/ai"
import {FaQuestionCircle, FaUserFriends} from "react-icons/fa"
// import {HiMenu} from "react-router/hi"

function Admin() {
    const [show, setShow] = useState(false)
    const [showNav, setShowNav] = useState(false)
    const [event, setEvent] = useState({
        name:'',
        description:'',
        services:'',
        image: null
    })
    function handleChange(e){
        e.preventDefault();

        const { value, name} = e.currentTarget;

        setEvent({
            ...event,
            [name]: value
        });
    }

    const handleSubmit =  async (e) => {
        e.preventDefault()
        console.log(event)
        const res = await fetch("http://localhost:3000/events", {
            method: "POST",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify ({
                id: event.id,
                name: event.name,
                description: event.description,
                services: event.services,
                image: event.image
            })
        })
       

        const data = await res.json()
        setEvent([...event, data])
        console.log(event)
    }       

    return (
        <div className='w-full h-screen'>
            <div className='w-full h-full px-4 py-8 relative'>
                {showNav ?  <AiOutlineClose onClick={() =>setShowNav(!showNav)} className='text-white z-20 absolute left-8 text-2xl top-8 cursor-pointer font-bold'/> : <AiOutlineMenu onClick={() => setShowNav(true)} className='text-black text-2xl cursor-pointer' /> }

                {/* <button  className='py-1 mt-10 px-2 border border-yellow-400 rounded-full'>create an event</button> */}
                <div className={showNav ? 'w-[400px] transition text-white absolute left-0 top-0 h-full bg-[#233d4d]' : 'w-[400px] text-white absolute left-[100%] top-0 h-full bg-blue-800'}>
                    <div className='w-full  h-full relative flex flex-col justify-center pl-10 relative'>

                        {/* <NavLink className='my-4 text-xl font-bold flex items-center'>< AiFillHome/>About</NavLink> */}
                        <NavLink onClick={() => setShow(!show)} className='my-4 text-xl font-bold flex items-center'><AiFillPlusCircle className='mr-4'/>Event</NavLink>
                        <NavLink  to="/profile" className='my-4 text-xl font-bold flex items-center'>< FaUserFriends className='mr-4'/>Profile</NavLink>

                        {/* <NavLink className='my-4 text-xl font-bold flex items-center'>BookEvent</NavLink> */}
                        <NavLink className='my-4 text-xl font-bold flex items-center'>< AiFillDelete className='mr-4'/>Delete</NavLink>
                        {/* <NavLink className='my-4 text-xl font-bold flex items-center'>Contact</NavLink> */}
                        <NavLink className='my-4 text-xl font-bold flex items-center'><FaQuestionCircle className='mr-4'/>Logout</NavLink>
                    </div>

                </div>
                <div className='w-full mt-6'>
                    {/* <p className='text-center'>create an event</p> */}
                    {show   && 
                    <form onSubmit={handleSubmit} className='w-[50%] mx-auto flex flex-col p-4'>
                        <input 
                            className='border border-black py-3 px-2 my-2 w-full'
                            type="text" name="name" id="name" 
                            placeholder='event name'
                            value={event.name}
                            onChange={handleChange}
                        />

                        <input 
                            className='border border-black py-4 px-2 my-2 w-full' 
                            type="textarea" name="description" id="description" placeholder='description' 
                            value={event.description}
                            onChange={handleChange}
                        />

                        <input 
                            className='border border-black py-4 px-2 my-2 w-full' 
                            type="text" name="services" id="services" 
                            placeholder='Enter servies offered seperated by comas(,)' 
                            value={event.services}
                            onChange={handleChange}
                        />

                        <input type="file" name="image" id="image" 
                            onChange={handleChange}
                        />

                        <button className='bg-yellow-300 my-3 p-2'>submit</button>
                    </form>
                    }
                </div>
            </div>
        </div>

    )
}

export default Admin    