import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png'
import banner2 from '../../../images/banner/banner2.png'
import banner3 from '../../../images/banner/banner3.png'
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="container mx-auto mt-4">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="text-lg text-blue-600 font-mono font-semibold">
            <h3>Wedding Photography</h3>
            <p>Premium Wedding Photo Session</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="text-lg text-yellow-500 font-mono font-semibold">
            <h3>Portrait Photography</h3>
            <p>Excellent Portrait Session At Your Chosen Place</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="text-lg font-mono font-semibold">
            <h3>Landscape Photography</h3>
            <p>Art Style Landscape Photography</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;