import React from "react";
import "./AddTourist.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import axios from "axios";

const AddTourist = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/addTourist', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully register as a Tourist!');
                    reset();
                }
            })
    }
    return (
        <div className='mb-5'>
            <h1 className="mt-5 text-center">
                Please register As a Tourist
            </h1>
            <div className="w-25 m-auto mt-5">
                <div className="main-form border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Your Name"
                                className="p-2 m-2"
                            />
                            <br />

                            <input
                                {...register("email", { required: true })}
                                placeholder="Your Email"
                                className="p-2 m-2"
                            />
                            <br />
                            <input
                                {...register("date", { required: true })}
                                placeholder="date"
                                defaultValue={new Date()}
                                className="p-2 m-2"
                            />
                            <br />
                            <textarea
                                {...register("description", { required: true })}
                                placeholder="Description"
                                className="p-2 m-2 special-textarea"
                            />
                            <br />
                            <input
                                {...register("booking", { required: true })}
                                placeholder="Manage booking"
                                className="p-2 m-2"
                            />
                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" className="regular-btn" />
                        </form>
                        <p className="m-2 mb-2">
                            Already have an account?{" "}
                            <Link to="/login">
                                <span>Create an account</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddTourist;