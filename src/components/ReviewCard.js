import React from 'react'
import '../css/ReviewCard.css'

function ReviewCard({ review:{fullname, review}}) {
  
  return (
    <>
    <div className="card  bg-slate-100 w-136 rounded-xl p-4 dark:bg-slate-800">
      <figure class="w-136 rounded-lg  py-3">

        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.unsplash.com/photo-1617376431454-8195cf1fd668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" width="392" height="512" />
        
        <figcaption class="font-medium">
          <div class="text-center text-[#2867f0]">{fullname} </div>
        </figcaption>

          <div class="pt-6 text-center space-y-4">
            <blockquote>
              <p class="text-lg font-medium text-black"> {review}  </p>
            </blockquote>
          </div>

      </figure>
    </div>
  </>
  )
}

export default ReviewCard

