import React from 'react'
import '../../src/dist/output.css'

function HomePage() {
  return (
  <div className='p-24 w-full min-h-screen'>
    <section className='mb-5 space-y-5'>
      <h2 className='text-3xl'>Your one Stop for all Your events and audiences</h2>
      <p className='pt-6'>What kind of event are you planning?</p>
      <div className='pt-7 space-x-3'>
        <a href='#' className='p-2 rounded-md bg-blue-300'>In-Person</a>
        <a href='#' className='p-2 rounded-md bg-blue-300'>Hybrid</a>
        <a href='#' className='p-2 rounded-md bg-blue-300'>Virtual</a>
        <a href='#' className='p-2 rounded-md bg-blue-300'>Webinar</a>
      </div>
    </section>

   <section className='flex flex-col'>
    <h1 className='text-center'>Our Services</h1>
    <p className='text-center'>Check out all our events</p>
    <div className='flex flex-row'>
      <card className='w-1/3'>
        <img
          src='https://imgs.search.brave.com/ptFA8-vFStIS0FxaXzu8JtrDrHcjw48TvnPljTw_0Ms/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDEz/NTY1MjU3NS1yZXJz/Zm8tdDUwMHg1MDAu/anBn'
          alt='event-image'
        />
        <h3>Event Management</h3>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </card>
    </div>
   </section>

    </div>
   
  )
}

export default HomePage