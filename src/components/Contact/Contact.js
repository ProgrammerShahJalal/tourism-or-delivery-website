import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth/useAuth';


const Contact = () => {
    const { user } = useAuth();

    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };

    return (
        <div className='container contact-box'>
            <h2 className='text-center pt-3'>Contact Us</h2>
            <div className="row d-flex justify-content-center align-items-center my-5">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
                        <input placeholder='Type Your Name' defaultValue={user.displayName} {...register("name", { required: true })} required />
                        <input placeholder="Type Your Email" defaultValue={user.email} {...register("email", { required: true })} required />
                        {errors.email && <span className='error'>This field is required</span>}
                        <input placeholder="Type Your Address" {...register("address")} />
                        <input type="tel" {...register("MobileNumber")} placeholder='Type Your Mobile' />
                        <input type="submit" />
                    </form>
                </div>
                <div className="col-md-6 text-right">
                    <h2>YOUR PERFECT <br />TOUR EXPERIENCE</h2>
                    <h3>Activities and accommodations</h3>
                    <button className='regular-btn'>View More</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;