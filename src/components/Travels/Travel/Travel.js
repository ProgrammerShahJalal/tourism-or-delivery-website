import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Travel = ({ travel }) => {
    const { name, img, description, cost, _id } = travel;

    const history = useHistory();

    const handleOrder = _id => {
        const uri = `/booking/${_id}`
        history.push(uri);
    }

    return (
        <div className='col col-lg-4 col-md-6 col-sm-12'>
            <img className="img-fluid mt-5" src={img} alt="" />
            <h3 className='tour-title'>{name}</h3>
            <p className='justify'>{description}</p>
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-6">
                    <Link to={`/booking/${_id}`}>
                        <button onClick={() => handleOrder(_id)} className="regular-btn">Book Now</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <h5>Per day ${cost}</h5>
                </div>
            </div>
        </div>
    );
};

export default Travel;