import {useState} from 'react'


function AdminCreateForm() {


    const [event, setEvent] = useState({
        eventname:'',
        description:'',
        services:'',
        image_url: ''
    })

    function handleChange(e){
        e.preventDefault();
        e.stopPropagation();

        const { value, name} = e.currentTarget;

        setEvent({
        ...event,
        [name]: value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('/events', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: event.id,
                eventname: event.eventname,
                description: event.description,
                services: event.services,
                image_url: event.image_url
            })
        })

        await res.json()   

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
                    type="text"
                    name="eventname" 
                    placeholder='event name'
                    value={event.eventname}
                    onChange={handleChange}
                />

                <input 
                    className='border border-black py-4 px-2 my-2 w-full' 
                    type="textarea" 
                    name="description" 
                    placeholder='description' 
                    value={event.description}
                    onChange={handleChange}
                />

                <input 
                    className='border border-black py-4 px-2 my-2 w-full' 
                    type="text" 
                    name="services" 
                    placeholder='Enter servies offered seperated by comas(,)' 
                    value={event.services}
                    onChange={handleChange}
                />

                <input 
                    className='border border-black py-4 px-2 my-2 w-full'
                    type="text"
                    placeholder='Event image url' 
                    name="image_url"
                    value={event.image_url}
                    onChange={handleChange}
                />

                <button type="submit" className='bg-yellow-300 my-3 p-2'>Create</button>
            </form>
        </div>
    )
}

export default AdminCreateForm