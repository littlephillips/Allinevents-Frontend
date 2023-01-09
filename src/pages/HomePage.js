import React from 'react'
import '../../src/dist/output.css'

function HomePage() {
  return (
    <section className='flex bg-teal-600'>
      <h1>Your one Stop for all you events and audiences</h1>
      <p>What kind of event are you planning?</p>
      <div>
        <a href='#'>In-Person</a>
        <a href='#'>Hybrid</a>
        <a href='#'>Virtual</a>
        <a href='#'>Webinar</a>
      </div>
    </section>
  )
}

export default HomePage