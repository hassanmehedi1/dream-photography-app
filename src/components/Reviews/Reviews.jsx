import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
   const [reviews,setReviews] = useState([])

   useEffect(() => {
     fetch("reviews.json")
       .then((res) => res.json())
       .then((data) => {
         setReviews(data);
       });
   }, []);
   return (
     <div className='text-lg' id='reviews'>
       <h2 className='flex justify-center text-2xl font-semibold text-blue-700'>My Client Reviews</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 place-content-center ml-10 lg:grid-cols-3 gap-2">
         {reviews.map((review) => (
           <Review key={review.id} review={review}></Review>
         ))}
       </div>
     </div>
   );
};

export default Reviews;