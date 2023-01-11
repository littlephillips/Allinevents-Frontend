import React from 'react'
import '../css/ReviewCard.css'

function ReviewCard({ review:{name, comment}}) {
  return (
    <div className="card bg-slate-100 w-136 rounded-xl p-6 dark:bg-slate-800">
    <figure class="w-136 rounded-lg">
<img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/6324413/pexels-photo-6324413.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" width="392" height="512" />
<figcaption class="font-medium">
<div class="text-sky-500 text-center">
{name}
</div>
</figcaption>
<div class="pt-6 text-center space-y-4">
<blockquote>
<p class="text-lg font-medium">
{comment}
</p>
</blockquote>
</div>
</figure>
</div>
  )
}

export default ReviewCard