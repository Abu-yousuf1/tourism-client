import React, { useEffect } from 'react';
import useAuth from './../../hooks/useAuth';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Table } from 'react-bootstrap';


const OrderList = () => {
    const { user } = useAuth();
    const [services, setServices] = useState([])

    // console.log(Email);

    useEffect(() => {
        const key = { email: user.email };
        fetch('https://vast-beach-23588.herokuapp.com/logInService', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(key)
        })
            .then(res => res.json())
            .then(data => {
                setServices(data);
            }).catch((err) => {
                console.log(err);
            })

    }, [])





    const handelDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete?')
        if (proceed) {
            fetch(`https://vast-beach-23588.herokuapp.com/logInService/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = services.filter(user => user._id !== id);
                        setServices(remainingUsers);
                    }
                })
        }

    }


    return (
        <div>
            <Header />
            <h3 className="text-center primary-color">Your Order list</h3>
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
                        services.map(service =>
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
            <Footer />
        </div>
    );
};

export default OrderList;