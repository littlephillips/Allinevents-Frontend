import React, {useEffect, useState} from 'react'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import '../css/Reviews.css'



function Reviews() {

        const [reviews, setReviews] = useState([]);

        useEffect(() => {
            fetch("/comments")
                .then(response => response.json())
                .then(reviews => setReviews(reviews))

        }, [])

        const handleNewReview = (review) => {
            setReviews([...reviews, review])
        }

        return (
            <div className='review-container'>
                <div className='reviews-items'>
                    <h1>Customers Reviews...</h1>
                    {reviews.map((review) => (
                        <ReviewCard key = {review.id} review = {review} />)
                    )}
                    <ReviewForm handleNewReview = {handleNewReview} reviews={reviews}/>
                </div>
            </div>
        
        );
}

export default Reviews