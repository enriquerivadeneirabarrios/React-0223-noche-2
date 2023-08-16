import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../../public/images-carousel/carousel1.jpg';
import carousel2 from '../../../public/images-carousel/carousel2.jpg';
import carousel3 from '../../../public/images-carousel/carousel3.jpg';
import carousel4 from '../../../public/images-carousel/carousel4.jpg'; 


const Banner = () => {
  return (
    <>
        <Carousel className="sliders">
            <Carousel.Item className="sliders-item">
                <img
                    className="sliders-img"
                    src= "./images-carousel/carousel1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="sliders-item">
                <img
                    className="sliders-img"
                    src= "./images-carousel/carousel2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className="sliders-item"> 
                <img
                    className="sliders-img"
                    src= "./images-carousel/carousel3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className="sliders-item">
                <img
                    className="sliders-img"
                    src= "./images-carousel/carousel4.jpg"
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
 
    </>
 )
    
}

export default Banner




