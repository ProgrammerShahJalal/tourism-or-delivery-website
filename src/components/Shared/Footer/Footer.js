import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row d-flex justify-content-around align-items-center">
                    <div className="col-md-3">
                        <div className="text-center">
                            <Link to='/'> <img className='w-25' src="https://i.ibb.co/ckQ5x6N/travel.png" alt="" /></Link>
                            <h3>World Tours</h3>
                        </div>
                        <p className='footer-paragraph'>Hey there traveller. We know you want to see the world. We can see the fire in your eyes when you think about all the waters you haven't sailed, the views you haven't seen and all the authentic Italian you haven't had a chance to indulge in.
                        </p>
                        <div className="footer-icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h3>Quick Link</h3>
                        <div className="row">
                            <Link className="text-decoration-none text-white" to="/home">Home</Link>
                            <Link className="text-decoration-none text-white" to="/tours">Tours</Link>
                            <Link className="text-decoration-none text-white" to="/contact">Contact Us</Link>
                            <Link className="text-decoration-none text-white" to="/team">Our Team</Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Our Contacts</h3>
                        <div className="row">
                            <Link className="text-decoration-none text-white" to="/contact"><i className="fas fa-map-marker-alt"></i> 983 Main rd, PA 12345 Dubai</Link>
                            <Link className="text-decoration-none text-white" to="/contact"><i className="fas fa-phone"></i> + 888 4766-7843</Link>
                            <Link className="text-decoration-none text-white" to="/contact"><i className="fas fa-envelope"></i> worldtours@gmail.com</Link>
                            <Link className="text-decoration-none text-white" to="/contact"><i className="fas fa-globe-asia"></i> www.worldtours.com</Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Beautiful Place</h3>
                        <div className='row'>
                            <img className='col-md-4 mb-3' src="https://i.ibb.co/5vHLfkP/9.jpg" alt="" />
                            <img className='col-md-4 mb-3' src="https://i.ibb.co/nRNsx3P/8.jpg" alt="" />
                            <img className='col-md-4 mb-3' src="https://i.ibb.co/wh445sw/7.jpg" alt="" />
                        </div>
                        <div className='row'>
                            <img className='col-md-4 mb-3' src="https://i.ibb.co/Mcvb6mZ/6.jpg" alt="" />
                            <img className='col-md-4 mb-3' src="https://i.ibb.co/jr9qyB4/5.jpg" alt="" />
                            <img className='col-md-4 mb-3' src="https://i.ibb.co/tq9hKxB/4.jpg" alt="" />
                        </div>
                        <div className='row'>
                            <img className='col-md-4 mb-3' src="https://i.ibb.co/ctsbMMd/3.jpg" alt="" />
                            <img className='col-md-4 mb-3' src="https://i.ibb.co/LRg7Hch/2.jpg" alt="" />
                            <img className='col-md-4 mb-3' src="https://i.ibb.co/6D08qYx/1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center last-footer'>
                <small>© 2022 All Rights Reserved by <span id="special">Shah Jalal</span></small>
            </div>
        </div>
    );
};

export default Footer;