import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
  return (
    
    <Section>
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
 
    </Section>
 )
    
}

export default Banner

const Section = styled.div`
margin-top: 95px;

`


