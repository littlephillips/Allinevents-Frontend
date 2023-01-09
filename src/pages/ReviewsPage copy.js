import React, {useEffect, useState} from 'react'
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
import './Reviews.css'



function Reviews() {

   
        const [reviews, setReviews] = useState([]);

        useEffect(() => {
            fetch('https://my-json-server.typicode.com/Kago-1/db/Reviews')
               .then(response => response.json())
               .then(reviews => setReviews(reviews))

        }, [])

        const handleNewReview = (review) => {
            setReviews([...reviews, review])
        }

        return (
            <div className='reviews-items'>
                <h1>Customers Reviews...</h1>
                {reviews.map((review) => (
                    <ReviewCard key = {review.id} review = {review} />)
                )}
                <ReviewForm handleNewReview = {handleNewReview} reviews={reviews}/>
            </div>
        );
}

export default Reviews