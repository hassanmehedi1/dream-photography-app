import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../../images/person/my-pp1.png'

const About = () => {
   return (
     <>
       <section className="grid grid-cols-2 mt-4 container">
         <div className="font-mono text-3xl font-semibold mt-20">
           <h1 className="text-6xl text-pink-500">Mehedi Hassan</h1>
           <h2>Junior Web Developer and Freelance Digital Marketer</h2>
           <br />
           <p className="text-base font-sans">
             My goal is to become a full stack web developer and get a full time
             job with good salary. I am focused for this and I will do whatever
             I have to become a successful web developer. I am willing to push
             myself to the edge because I love this field. It has become my
             passion and hobby. I am also looking forward to enhance my Digital
             marketing skills and earn more money from the fiverr marketplace
             which is a online freelance platform. Also I will be preparing for
             my masters degree at abroad.
           </p>
           <br />
           <Button className="bg-blue-500 hover:text-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl">
             <a
               target="_blank"
               href="https://www.linkedin.com/in/hassan-mehdi11/"
             ></a>
             Explore More
           </Button>
         </div>
         <div>
           <img className="w-100" src={img} alt="" />
         </div>
       </section>
     </>
   );
};

export default About;