import React from 'react';
import './Bannar.css';
import { Carousel } from 'react-bootstrap';


const Bannar = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src="https://i.ibb.co/LR9cF8X/travel-slider-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="position-absolute start-0 bottom-50">
                    <h3 className="h1 text-white">Let's Discover <br />The World <span className='highlight'>Together</span></h3>
                    <p className='text-white'>Life is a Journey,<br /> is not a destination.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src="https://i.ibb.co/kqr0sGq/travel-slider-2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className="position-absolute start-50 end-0 bottom-50 top-0">
                    <h3 className='h1'>Upto <span className='highlight'>25%</span> off<br />on first travel</h3>
                    <p>The Journey is our home.<br /> Let's go a tour.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src="https://i.ibb.co/6XBBBMT/tour-slider-3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className="position-absolute start-0 end-50 bottom-50">
                    <h3 className="h1"><span className="highlight">Finally...</span><br />It's Time to Enjoy</h3>
                    <p>Travel is the only thing<br />you buy that makes you richer</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Bannar;