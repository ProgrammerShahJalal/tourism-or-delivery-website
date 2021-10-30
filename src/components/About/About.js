import React from 'react';
import './About.css';

const About = () => {


    return (
        <div className='container about-box'>
            <div className="row d-flex">
                <div className="col-md-4">
                    <div className="row">
                        <div className="about-img">
                            <img className='w-50' src="https://i.ibb.co/j6mf4Vz/support.png" alt="" />
                            <img className='w-50' src="https://i.ibb.co/HGkYwv7/company.png" alt="" />
                            <img className='w-50' src="https://i.ibb.co/xjV0kTz/best-price.jpg" alt="" />
                            <img className='w-50' src="https://i.ibb.co/HP5zS9B/services.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h2>About Us</h2>
                    <p className='justify'>World Travel, Inc. is a global mid-market leader in corporate travel management. As the largest organically grown travel management company in the United States, we've grown steadily and sustainably since 1983. The World Travel Guides aims at providing everything for travellers about a destination, before they actually head out. Be it honeymooners, budget travellers, family trippers, these country guides will give travellers a peep into the destination's culture, etiquette, cuisine and more.
                    </p>
                    <p className='justify'>Our mission is to maximise the inclusive and sustainable growth potential of the Travel & Tourism sector by partnering with governments, destinations, communities, and other stakeholders to drive economic development, create jobs, reduce poverty, security, and understanding in our world.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;