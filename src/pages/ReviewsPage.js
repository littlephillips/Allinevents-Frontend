import React, {useEffect, useState} from 'react'
// import Footer from '../components/Footer';
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import '../css/Reviews.css'



function Reviews() {

        const [reviews, setReviews] = useState([]);

        useEffect(() => {
            fetch('/reviews')
                .then(response => response.json())
                .then(reviews => setReviews(reviews))

        }, [])

        const handleNewReview = (review) => {
            setReviews([...reviews, review])
        }

        return (
            <div className='flex flex-col w-screen sm:flex items-center justify-center  opacity-[90%] p-4 rounded-sm shadow-sm bg-[#f4f49f] dark:bg-gray-800 dark:text-gray-50'>
                    {reviews.map((review) => (
                        <ReviewCard key = {review.id} review = {review} />)
                    )}
                    <ReviewForm handleNewReview = {handleNewReview} reviews={reviews}/>
            </div>
            
            // </div>
        
        );
}

export default Reviews