import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './PlaceOrder.css'
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {

    const { id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const orderService = id
        data.order = orderService;
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Order processed successfully.")
                    reset();
                }
            })

    };
    return (
        <div>
            <Header />
            <h1 className="text-center primary-color">Place order</h1>
            <div className="formList d-flex justify-content-center">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />


                    <input placeholder="Enter your email" defaultValue={user.email} {...register("email", { required: true })} />
                    <input placeholder="city"  {...register("city")} />
                    <input placeholder="Address" {...register("Address")} />
                    {errors.exampleRequired && <span className="text-danger">This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default PlaceOrder;