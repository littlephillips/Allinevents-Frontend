import React from 'react'
import './ReviewCard.css'

function ReviewCard({ review:{name, body}}) {
  return (
    <div className="card bg-slate-100 w-136 rounded-xl p-9 dark:bg-slate-800">
    <figure class="bg-slate-100 w-136 rounded-lg p-9 dark:bg-slate-800">
<img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/6324413/pexels-photo-6324413.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" width="392" height="512" />
<figcaption class="font-medium">
<div class="text-sky-500 text-center">
{name}
</div>
</figcaption>
<div class="pt-6 text-center space-y-4">
<blockquote>
<p class="text-lg font-medium">
{body}
</p>
</blockquote>
</div>
</figure>
</div>
  )
}

export default ReviewCard