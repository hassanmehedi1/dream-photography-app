import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
   const { serviceId } = useParams();
   return (
     <div>
       <div className="text-center mt-4">
         <div className='text-2xl font-mono font-semibold'>
           <h2>Thank You for Choosing This Bundle</h2>
           <h4>Please Press Checkout For order Completion</h4>
         </div>
         <Link to="/checkout">
           <button className="btn btn-primary mt-5">Proceed Checkout</button>
         </Link>
       </div>
     </div>
   );
};

export default ServiceDetail;