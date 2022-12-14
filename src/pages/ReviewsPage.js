import React, {useEffect, useState} from 'react'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import '../css/Reviews.css'



function Reviews() {

   
        const [reviews, setReviews] = useState([]);

        useEffect(() => {
            // fetch('https://my-json-server.typicode.com/Kago-1/db/Reviews')
            fetch(' http://localhost:3000/Reviews')
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