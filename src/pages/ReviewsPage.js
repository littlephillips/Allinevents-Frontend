import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer';
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import '../css/Reviews.css'



function Reviews() {

        const [reviews, setReviews] = useState([]);

        useEffect(() => {
            fetch('http://localhost:3000/comments')
                .then(response => response.json())
                .then(reviews => setReviews(reviews))

        }, [])

        const handleNewReview = (review) => {
            setReviews([...reviews, review])
        }

        return (
<>
<button class="prev-page" onClick={() => window.history.back()}>Go Back</button>


    <div className='flex flex-'>
        <div className='bg-white flex flex-col w-screen sm:flex items-center justify-center  opacity-[90%] p-4 rounded-sm shadow-sm dark:bg-gray-800 dark:text-gray-50 overflow-y-scroll'>
                {reviews.map((review) => (
                    <ReviewCard key = {review.id} review = {review} />)
                )}
        </div>  
            <ReviewForm handleNewReview = {handleNewReview} reviews={reviews}/>  
    </div>
    <Footer/>
</>
    )
}

export default Reviews