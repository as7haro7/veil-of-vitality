// ../components/Carusel.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Caruse() {
  return <>

<section className="slider container mb-3">
　　　        <Carousel>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src= 'img/9331195346974.jpg'
　　　          alt="First slide"
　　　        />
　　　      </Carousel.Item>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src= 'img/9336537546782.jpg'
　　　          alt="Second slide"
　　　        />
　　　      </Carousel.Item>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src= 'img/9347516137502.jpg'
　　　          alt="Third slide"
　　　        />
　　　      </Carousel.Item>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src= 'img/9339595423774.jpg'
　　　          alt="for slide"
　　　        />
　　　      </Carousel.Item>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src= 'img/9347516137502.jpg'
　　　          alt="for slide"
　　　        />
　　　      </Carousel.Item>
　　　    </Carousel>
　　　    </section>
  </>;
}

export default Caruse;