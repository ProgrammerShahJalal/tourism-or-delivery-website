import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Travels from '../../Travels/Travels';
import Bannar from '../Bannar/Bannar';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Travels></Travels>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;