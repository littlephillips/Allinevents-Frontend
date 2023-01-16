import React, {useState} from 'react'


function AdminCreateForm() {

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
        const res = await fetch("/events", {
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

        await res.json()
        setEvent({
            name:'',
            description:'',
            services:'',
            image: null
        })
    }  


    return (

        <div class='w-screen'>

        <form onSubmit={handleSubmit} className='w-[50%] relative mx-auto flex flex-col p-4'>
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
        </div>
    )
}

export default AdminCreateForm