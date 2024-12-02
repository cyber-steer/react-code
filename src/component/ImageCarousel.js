import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ImageCarousel.css';

const ImageCarousel = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <Carousel className='my-4' interval={1000}>
      <Carousel.Item>
        <img
          className='carousel-image'
          src={`${publicUrl}/images/image_1.png`}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='carousel-image'
          src={`${publicUrl}/images/image_2.png`}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='carousel-image'
          src={`${publicUrl}/images/image_3.png`}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
