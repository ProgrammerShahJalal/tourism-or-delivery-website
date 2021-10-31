import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://shrouded-tundra-27347.herokuapp.com/tours', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added a New Tour Successfully!');
                    reset();
                }
            })
    }

    return (
        <div className='add-service'>
            <h2 className="text-center mt-5">You Can Add a Tour</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" {...register("name", { required: true })} />
                <textarea placeholder='description' {...register("description", { required: true })} />
                <input placeholder="cost" type="number" {...register("cost", { required: true })} />
                <input placeholder="image url" {...register("img", { required: true })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;