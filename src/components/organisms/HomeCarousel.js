import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../../public/images-carousel/carousel1.jpg';
import carousel2 from '../../../public/images-carousel/carousel2.jpg';
import carousel3 from '../../../public/images-carousel/carousel3.jpg'; 


const Banner = () => {
  return (
    <>
        <Carousel className="sliders">
            <Carousel.Item className="sliders-item">
                <img
                    className="sliders-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfnCoRxF8p1rTc58Q5ZcjAYvlfmWhbNQ_Nvh2EkeKeoK-q4c93WBfzYWWy7yXBfyePtw&usqp=CAU"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="sliders-item">
                <img
                    className="sliders-img"
                    src="https://www.cotodigital3.com.ar/sitios/cdigi/static/content/images/cdigi/ofertas/cartridge/nuevahome/2022-07/images/colgate040622.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className="sliders-item"> 
                <img
                    className="sliders-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzFM19clxbsjtYle6Fa7w0r3Q19Xzaqtdd33HMCBTg9TN0KWqpGqnrmxK1Srm3cT_vQ&usqp=CAU"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

        {/* <style jsx> {`
        Carousel {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50%;
        }
        Carousel.Item {
            display: flex;
            justify-content: center;
            aling-items: center;
            width: 50%;
        }
        img {
            display: flex;
            justify-content: center;
            aling-items: center;
            width: 50%;
        }
        `} </style> */}
 
    </>
 )
    
}

export default Banner

// const styles = {
//     display: flex,
//     align-items: center,
//     justify-content: center,
// }



