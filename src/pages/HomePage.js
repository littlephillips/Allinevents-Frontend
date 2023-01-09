import React from 'react'
import '../../src/dist/output.css'

function HomePage() {
  return (
    <>
      <div className="text-center w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-[url('https://d92mrp7hetgfk.cloudfront.net/images/sites/H2B/Event-Planner/original.jpg?1532640584')]">
        <section
          className="mb-5  space-y-5">
          <h2 className='text-7xl font-bold text-white outline-4 '>Your one Stop for all Your events and audiences</h2>
          <p className='pt-6 text-5xl font-semibold text-[#233D4D]'>What kind of event are you planning?</p>
          <div className='pt-7 space-x-9'>
            <a href='#' className='p-2 rounded-md bg-blue-300'>In-Person</a>
            <a href='#' className='p-2 rounded-md bg-blue-300'>Hybrid</a>
            <a href='#' className='p-2 rounded-md bg-blue-300'>Virtual</a>
            <a href='#' className='p-2 rounded-md bg-blue-300'>Webinar</a>
          </div>
        </section>
      </div>

     



                                            {/* Section 2 */}

      <section className='flex flex-col pt-4'>
        <h1 className='text-center font-bold text-4xl'>Our Services</h1>
        <p className='text-center p-2 font-light'>Check out all our events</p>

        {/* Corporate Events */}
        <h1 className='font-bold text-4xl mx-2'>Corporate Events</h1>
        <div className='flex flex-row shadow-md'>
          <card className='w-1/3 flex flex-col p-7 shadow-sm'>
            <img
              src='https://pbs.twimg.com/media/CwSYBzrWQAAtzwT.jpg'
            />
            <div>
              <h3 className='font-semibold'>Event Management</h3>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </card>

          <card className='w-1/3 flex flex-col p-7'>
            <img
              src='https://pbs.twimg.com/media/CwSYBzrWQAAtzwT.jpg'
            />
            <div>
              <h3 className='font-semibold'>Event Management</h3>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </card>

          <card className='w-1/3 flex flex-col p-7'>
            <img
              src='https://pbs.twimg.com/media/CwSYBzrWQAAtzwT.jpg'
            />
            <div>
              <h3 className='font-semibold'>Event Management</h3>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </card>
        </div>

        {/* Private Events */}

        <h1 className='font-bold text-4xl mx-2 mt-4'>Private Events</h1>
        <div className='flex flex-row shadow-md'>
          <card className='w-1/3 flex flex-col p-7 shadow-sm'>
            <img
              src='https://pbs.twimg.com/media/CwSYBzrWQAAtzwT.jpg'
            />
            <div>
              <h3 className='font-semibold'>Event Management</h3>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </card>

          <card className='w-1/3 flex flex-col p-7'>
            <img
              src='https://pbs.twimg.com/media/CwSYBzrWQAAtzwT.jpg'
            />
            <div>
              <h3 className='font-semibold'>Event Management</h3>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </card>

          <card className='w-1/3 flex flex-col p-7'>
            <img
              src='https://pbs.twimg.com/media/CwSYBzrWQAAtzwT.jpg'
            />
            <div>
              <h3 className='font-semibold'>Event Management</h3>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </card>
        </div>
    </section>


     {/* About Us */}
     <div className='p-4 w-screen'>
        <h1 className='text-center font-bold text-4xl mt-4'>About Us</h1>
        <h3 className='text-center font-semibold text-sm p-4'>You know Events, We know you.</h3>
        <h4 className='text-center font-semibold'>We Collaborate with our Partners to Deliver Successful Events</h4>

        <div className='p-5 text-2xl flex space-x-4'>
          <p className='w-1/2 '>Managing and booking events is stressful.  AllinEvents powers restaurants, hotels, 
            and unique/special venues to book more catering, group, and event business and will increase sales without increasing your workload.
          </p>

          <div className='w-1/2 ml-4'>
            <ul className='list-disc'>
              <li>Streamline the booking process</li>
              <li>Quickly create professional proposals, Banquet Event Orders, and contracts</li>
              <li>Quickly create professional proposals, Banquet Event Orders, and contracts</li>
              <li>Easily manage events and track sales, leads, and guest information for one or hundreds of venues</li>
            </ul>
          </div>

        </div>
      </div>

      

                                                      {/* Footer */}

    <footer className='flex justify-around  bg-[#FFBD1D]'>
      <h1>Logo</h1>

      <div>
        <h1 className='text-2xl font-extrabold' >Product</h1>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </div>
      
      <div>
        <h1 className='text-2xl font-extrabold'>Get Started</h1>
        <ul>
          <li>SignUp</li>
          <li>Login</li>
          <li>Book Event</li>
        </ul>
      </div>

      <div>
        <h1 className='text-2xl font-extrabold'>Help & Support</h1>
        <ul>
          <li>Help Center</li>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>
      </div>
    </footer>
   </>
  
   
  )
}

export default HomePage