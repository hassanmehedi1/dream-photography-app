import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import './ServiceDetail.css'

const ServiceDetail = () => {
   const { serviceId } = useParams();

    const [user] = useAuthState(auth);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleNameBlur = (event) => {
      setName(event.target.value);
    };

    const handleAddressBlur = (event) => {
      setAddress(event.target.value);
    };

    const handlePhoneBlur = (event) => {
      setPhone(event.target.value);
    };

    const handleShipping = (event) => {
      event.preventDefault();
      const shipping = { name, address, phone };
      navigate('/checkout')
    };
   return (
     <div className="grid justify-center form-container">
       <div className="">
         <h2 className="form-title text-3xl font-semibold text-center">
           Shipping Information
         </h2>
         <form className="inline-block" onSubmit={handleShipping}>
           <div className="input-group mb-3 mt-3">
             <label
               className="mx-2 font-mono font-semibold text-xl"
               htmlFor="name"
             >
               Name:{" "}
             </label>
             <input
               className="border-3 rounded border-solid border-blue-400 grid content-end"
               onBlur={handleNameBlur}
               type="text"
               name="name"
               required
             />
           </div>
           <div className="input-group mb-3 mt-3">
             <label
               className="mx-2 font-mono font-semibold text-xl"
               htmlFor="email"
             >
               Email:
             </label>
             <input
               className="border-3 rounded border-solid border-blue-400 grid content-end"
               value={user?.email}
               readOnly
               type="email"
               name="email"
               required
             />
           </div>
           <div className="input-group mb-3 mt-3">
             <label
               className="mx-2 font-mono font-semibold text-xl"
               htmlFor="address"
             >
               Address:
             </label>
             <input
               className="border-3 rounded border-solid border-blue-400 grid content-evenly"
               onBlur={handleAddressBlur}
               type="text"
               name=""
               required
             />
           </div>
           <div className="input-group mb-3 mt-3">
             <label
               className="mx-2 font-mono font-semibold text-xl"
               htmlFor="phone"
             >
               Phone:
             </label>
             <input
               className="border-3 rounded border-solid border-blue-400"
               onBlur={handlePhoneBlur}
               type="number"
               name=""
               required
             />
           </div>
           <p style={{ color: "red" }}>{error}</p>
           <input
             className="form-submit mx-2 font-mono font-semibold text-xl text-blue-600 btn btn-primary mx-auto grid mt-3 w-100"
             type="submit"
             value="Checkout"
           />
         </form>
       </div>
     </div>
   );
};

export default ServiceDetail;

{/* <div>
       <div className="text-center mt-4">
         <div className='text-2xl font-mono font-semibold'>
           <h2>Thank You for Choosing This Bundle</h2>
           <h4>Please Press Checkout For order Completion</h4>
         </div>
         <Link to="/checkout">
           <button className="btn btn-primary mt-5">Proceed Checkout</button>
         </Link>
       </div>
    </div> */}