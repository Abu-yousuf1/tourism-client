import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';
import './services.css'
import Service from './Service';
import Reviews from '../Review/Reviews';

const Services = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div className="container" id="services">
            {/* services section............... */}
            <section className="text-center my-5">
                <h5 className="primary-color">Choose Your Package</h5>

                <h1 className="fw-bold">Select Your Best Package <br /> For Your Travel</h1>
            </section>

            <section>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        user.map(services => <Service service={services} key={services._id}>{services.name}</Service>)
                    }
                </Row>
            </section>

            <Reviews />

        </div>
    );
};

export default Services;