import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
     fetch("services.json")
       .then((res) => res.json())
       .then((data) => setServices(data));
   }, []);
   return (
     <div className="container mt-4" id="services">
       <div className="row text-center">
         <h1 className="text-success text-xl text-3xl font-semibold">Services That I Provide</h1>
         <div className="services-container mt-2">
           {services.map((service) => (
             <Service key={service.id} service={service}></Service>
           ))}
         </div>
       </div>
     </div>
   );
};

export default Services;