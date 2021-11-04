import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
                "content-type": "application/json"
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
    }

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])

    //manage Delete order

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/logInService/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(user => user._id !== id);
                        setOrders(remainingUsers);
                    }
                })
        }

    }
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-lg-4">
                    <h4 className="text-center primary-color mt-3">Add New Service</h4>
                    <div className="formList d-flex justify-content-center">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input placeholder="Enter service name"  {...register("name")} />
                            <input placeholder="Enter ImageUrl"  {...register("image")} />
                            <input placeholder="Enter service Description" {...register("Description")} />



                            <input type="submit" />
                        </form>
                    </div>
                </div>

                <div className="col-lg-8">
                    <h3 className="text-center primary-color">Manage all Order</h3>
                    <div className="container my-5">

                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>

                                    <th>User Name</th>
                                    <th>Order Id</th>
                                    <th>cancel Order</th>
                                </tr>
                            </thead>



                            {
                                orders.map(service =>
                                    <tbody key={service._id}>
                                        <tr>
                                            <td>{service.name}</td>
                                            <td>{service.order}</td>
                                            <td><button onClick={() => handelDelete(service._id)} className="btn btn-warning">delete order</button></td>
                                        </tr>

                                    </tbody>
                                )
                            }
                        </Table>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ManageOrder