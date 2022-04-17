import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
     <div className='max-w-screen-2xl grid justify-center align-middle'>
       <img
         src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48326.jpg?size=626&ext=jpg"
         alt=""
       />
       <Link to="/home" className='btn btn-primary block w-50 mx-auto'>Go Back To Home</Link>
     </div>
   );
};

export default NotFound;