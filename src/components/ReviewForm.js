import React, {useState} from 'react'

function ReviewForm({handleNewReview}) {

  const [formData,setFormData]=useState([{
    fullname:"",
    email: "",
    review:"",
  }])

  const handleSaveReview = async (e) => {
        e.preventDefault();
          const res = await fetch("http://35.172.230.181:3010/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id:formData.id,
                fullname: formData.fullname,
                email: formData.email,
                review: formData.review,
            }),
            });
            const response =   await res.json();
            handleNewReview(response);
            
            setFormData({
              fullname:"",
              email: "",
              review:"",
            })
    };


  function handleChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  return(
    <>   
    <section  className="float-left box-border h-screen w-screen flex flex-col justify-center overflow-y">
    <div className=" lg:grid max-w-2xl rounded-sm shadow-sm scroll-fix bg-[#FFD23F] grid-cols-1  px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
      <div className='lg:grid sm:hidden xs:hidden'>
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Leave us a Review</h1>

          <p className="pt-2 pb-4">The information you provide us greatly helps us improve our services</p>

          <div className="space-y-4">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span>Address, 40 W 34th St.. Nairobi Kenya</span>
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+25471234565</span>
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>allinevents.support@gmail.com</span>
            </p>
          </div>
        </div>
      
      </div>
      <form onSubmit={handleSaveReview} novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
        
        <label className="block">
          <span className="mb-1">Full name</span>
          <input 
            value={formData.fullname} 
            onChange={handleChange} 
            required
            name='fullname' type="text" placeholder="Leroy Jenkins" className="block w-full px-3 py-3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
        </label>

        <label className="block">
          <span className="mb-1">Email address</span>
          <input value={formData.email} 
          required
          onChange={handleChange} name='email' type="email" placeholder="leroy@jenkins.com" className="block w-full px-3 py-3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
        </label>

        <label className="block">
          <span className="mb-1">Message</span>
          <textarea 
            value={formData.review} 
            onChange={handleChange} 
            required
            name='review' 
            placeholder="review" 
            rows="3" 
            className="block w-full px-3 py-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
        </label>
        
        <button type="submit" className="self-centerrr px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
      </form>
    </div>
  </section>
 </>
  )
}

export default ReviewForm