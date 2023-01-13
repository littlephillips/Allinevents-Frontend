import React, {useState} from 'react'
import '../css/Reviews.css'

function ReviewForm({handleNewReview}) {

  const [formData,setFormData]=useState([{
    fullname:"",
    email: "",
    comment:"",
  }])

  const handleSaveReview = async (e) => {
        e.preventDefault();
          const res = await fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id:formData.id,
                fullname: formData.fullname,
                email: formData.email,
                comment: formData.comment,
            }),
            });
            const response = await res.json();
            handleNewReview(response);
            setFormData([{
              fullname:"",
              email: "",
              comment:"",
            }]);

    };


  function handleChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  

  return (
    <div className="reviews">
      <div id="reviews-container">
        <div className="review-card">
          <div className='form'> <br/><br/>
            <h3 className='text-sky-500 text-2xl'>Would you like to share your experience with us?</h3>
              <div className="md:flex md:justify-center mb-6 grid text-center max-w-screen-xl gap-8 px-8 py-16 mx-auto rounded-lg  md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
                <form onSubmit={handleSaveReview} className="comment-form">
                  <div>
                    <label for="name" className="text-sm font-bold">Name</label>
                    <input value={formData.fullname} onChange={handleChange} name='fullname' type="text" placeholder="Your name?" className="w-full p-3 rounded dark:bg-gray-800" />
                  </div> <br />
                  <div>
                    <label for="email" className="text-sm font-bold">Email</label>
                    <input value={formData.email} onChange={handleChange} name='email' type="email" placeholder="Your email won't be published" className="w-full p-3 rounded dark:bg-gray-800 email-input" required />
                  </div> <br />
                  <div>
                    <label for="message" className="text-sm font-bold">Comment</label>
                    <textarea value={formData.comment} onChange={handleChange} name='comment' rows="3" placeholder="Leave a comment ..." className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                  </div> <br />
                  <button type="submit" className="p-3 text-sm font-bold tracking-wide uppercase rounded bg-sky-500 hover:bg-sky-600">Submit Review</button>
                </form>
              </div>
          </div>
        </div>        
      </div>    
    </div>
  );
}

export default ReviewForm