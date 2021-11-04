import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, image, doc, _id } = service

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="primary-color">{name}</Card.Title>
                    <Card.Text>
                        {doc}
                    </Card.Text>
                    <Link to={`/order/${_id}`}><button className="btn btn-dark" >Place Order</button></Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;