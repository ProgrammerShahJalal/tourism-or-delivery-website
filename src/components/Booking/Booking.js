import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';
import useAuth from '../../hooks/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Booking = () => {
    const { user } = useAuth();
    const { travelId } = useParams();
    const [travel, setTravel] = useState({});

    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://shrouded-tundra-27347.herokuapp.com/addOrders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully placed your orders!');
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch(`https://shrouded-tundra-27347.herokuapp.com/tours/${travelId}`)
            .then(res => res.json())
            .then(data => setTravel(data))
    }, [travelId])

    return (
        <div className='container'>
            <h2 className='text-center my-5'>Here is your order details</h2>
            <div className='mb-5'>
                <div className="text-center">
                    <h5>Dear <span className='highlight'>{user.displayName},</span> We know who you are!</h5>
                    <p><b>Your Name:</b> {user.displayName}</p>
                    <p><b>Your Email:</b> {user.email}</p>
                </div>
                <div className="row d=flex justify-content-center align-items-center">
                    <div className="booking-details col-md-6">
                        <div className='w-25'></div>
                        <div className="card" style={{ 'width': '40rem', }}>
                            < h4 className="text-center mt-3"> Details of {travel.name}</h4 >
                            <img src={travel.img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="col-md-6">
                                        <h5 className="card-title text-nowrap">{travel.name}</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <h6>Per days: ${travel.cost}</h6>
                                    </div>
                                </div>
                                <p className="card-text">{travel.description}</p>
                            </div>
                        </div>
                    </div >
                    <div className='col-md-6'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Your Name"
                                defaultValue={user.displayName}
                                className="p-2 m-2"
                            />
                            <br />

                            <input
                                {...register("email", { required: true })}
                                placeholder="Your Email"
                                defaultValue={user.email}
                                className="p-2 m-2"
                            />
                            <br />
                            <input
                                {...register("text", { required: true })}
                                placeholder="Order Name"
                                defaultValue={travel.name}
                                className="p-2 m-2"
                            />
                            <br />
                            <input
                                {...register("booking", { required: true })}
                                placeholder="Manage booking"
                                className="p-2 m-2"
                            />
                            <br />
                            <textarea
                                {...register("description", { required: true })}
                                placeholder="Description"
                                className="p-2 m-2"
                            />
                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" className="travel-btn" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;