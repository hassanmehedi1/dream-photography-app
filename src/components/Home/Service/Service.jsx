import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
   const { name, img, description, price, id } = service;

   const navigate = useNavigate();
   const navigateToServiceDetail = (id) => {
     navigate(`/service/${id}`);
   };
   return (
     <div className="service mx-auto">
       <Card style={{ width: "18rem" }}>
         <Card.Img variant="top" src={img} />
         <Card.Body className="text-start">
           <Card.Title>{name}</Card.Title>
           <Card.Text>Price: {price}</Card.Text>
           <Card.Text>{description}</Card.Text>
           <Button
             className="w-100 text-blue-400"
             onClick={() => navigateToServiceDetail(id)}
             variant="primary"
             
           >
             Book Now
           </Button>
         </Card.Body>
       </Card>
     </div>
   );
};

export default Service;