import React, {useState} from 'react'

function Admin() {
    const [show, setShow] = useState(false)
    const [event, setEvent] = useState({
        name:'',
        description:'',
        services:[],
        image:null

    })
    const [imageInput, setImageInput] = useState(null)
 
    const handleSubmit =(e)=> {
        e.preventDefault()
        const nameInput = e.target[0].value
        const descriptionInput = e.target[1].value
        const servicesInput = e.target[2].value       
        setEvent({name: nameInput,description: descriptionInput, services: servicesInput, image: imageInput})
        console.log(event)
    }    

    return (
        <div className='w-full h-screen'>
            <div className='w-full h-full px-4 py-8'>
                <button onClick={() => setShow(!show)} className='py-1 px-2 border border-yellow-400 rounded-full'>create an event</button>
                <div className='w-full mt-6'>
                    <p className='text-center'>create an event</p>
                    {show   && 
                    <form onSubmit={(e) => handleSubmit(e)} className='w-[50%] mx-auto flex flex-col p-4'>
                        <input className='border border-black py-3 px-2 my-2 w-full' type="text" name="name" id="name" placeholder='event name'/>
                        <input className='border border-black py-4 px-2 my-2 w-full' type="textarea" name="desc" id="desc" placeholder='desc' />
                        <input className='border border-black py-4 px-2 my-2 w-full' type="text" name="services" id="services" placeholder='Enter servies offered seperated by comas(,)' />
                        <input type="file" name="img" id="img" onChange={(e) => setImageInput(e.target.value) }/>
                        <button className='bg-yellow-300 my-3 p-2'>submit</button>
                    </form>
                    }
                </div>
            </div>
        </div>

    )
}

export default Admin    