import React, {useState} from 'react'


function AdminCreateForm() {

    // const [update, setUpdating] = useState(false)
    const [event, setEvent] = useState({
        eventname:'',
        description:'',
        services:'',
        image_url: ''
    })

    function handleChange(e){
        e.preventDefault();

        const { value, name} = e.currentTarget;

        setEvent({
        ...event,
        [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(event)
        fetch("/events", {
            method: "POST",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify ({
                id: event.id,
                name: event.eventname,
                description: event.description,
                services: event.services,
                image_url: event.image_url
            })
        })

        setEvent({
            eventname:'',
            description:'',
            services:'',
            image_url: ''
        })
    }  


    return (

        <div class='w-screen'>

        <form onSubmit={handleSubmit} className='w-[50%] relative mx-auto flex flex-col p-4'>
            <input 
            className='border border-black py-3 px-2 my-2 w-full'
            type="text" name="eventname" id="name" 
            placeholder='event name'
            value={event.eventname}
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

            <input 
            className='border border-black py-4 px-2 my-2 w-full'
            placeholder='image url' 
            type="text" name="image_url" id="image" 
            value={event.image_url}
            onChange={handleChange}
            />

            <button className='bg-yellow-300 my-3 p-2'>submit</button>
        </form>
        </div>
    )
}

export default AdminCreateForm