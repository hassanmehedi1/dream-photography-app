import React from 'react';

const Review = ({review}) => {
   const { name, about, rating, img, id } = review;

   return (
     <div>
       <div className="shadow-xl rounded-2xl w-[250px] bg-white p-4 border-2 border-red-200 my-3">
         <div className="justify-between items-center">
           <div className="flex-shrink-0">
             <div>
               <img
                 alt="profile"
                 src={img}
                 className="mx-auto object-cover rounded-full h-16 w-16 "
               />
             </div>
           </div>
           <div className=" flex flex-col justify-end">
             <span className="text-gray-800 font-medium">{name}</span>
             <span className="text-gray-500 text-xs">{about}</span>
             <span className="text-gray-800 font-bold text-xs">
               Rating: {rating}
             </span>
           </div>
         </div>
       </div>
     </div>
   );
};

export default Review;