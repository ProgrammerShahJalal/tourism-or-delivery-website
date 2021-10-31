import React from 'react';
import './Travels.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Travel from './Travel/Travel';
import { Spinner } from 'react-bootstrap';


const Travels = () => {
    const [isLoading, setIsloading] = useState(true);
    const [travels, setTravels] = useState([]);

    useEffect(() => {
        setIsloading(true);
        fetch('https://shrouded-tundra-27347.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => {
                setIsloading(false);
                setTravels(data);
            })
    }, [])
    if (isLoading) {
        return <div className="text-center mt-5"><Spinner animation="border" variant="danger" />;</div>
    }
    return (
        <div className="container my-5">
            <h1 className='text-center'>Recommended Travels </h1>
            <div className='row mb-5'>
                {
                    travels.map(travel => <Travel key={travel.id} travel={travel}></Travel>)
                }
            </div>
        </div>
    );
};

export default Travels;