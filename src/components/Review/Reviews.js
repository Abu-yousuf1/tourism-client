import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Reviews = () => {
    return (
        <div>
            {/* Review Section ........... */}
            <section className="text-center my-5">
                <h5 className="primary-color" >Our Traveller Say</h5>
                <h1 className="fw-bold">What Our Traveller Say <br /> About Us</h1>
            </section>

            <section className="my-5">
                <CardGroup >
                    <Card className="mx-3 border-0  text-center">
                        <Card.Img variant="top" className="w-50 rounded rounded-circle mx-auto d-block" src="https://demo.egenslab.com/html/tourx/assets/images/reviewer/reviewer-3.png" />
                        <Card.Body>
                            <Card.Title>Shawn pull</Card.Title>
                            <Card.Title className="text-muted">Traveller</Card.Title>
                            <Card.Text className="text-muted">
                                Fusce aliquam luctus est, eget tincidunt velit scelerisque rhonocus.aliquam lacinia ipsum ornare,porttitor risus nec, mattis mauris.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mx-3 border-0  text-center">
                        <Card.Img variant="top" className="w-50 rounded rounded-circle mx-auto d-block" src="https://demo.egenslab.com/html/tourx/assets/images/reviewer/reviewer-2.png" />
                        <Card.Body>
                            <Card.Title>Jahid Hassan</Card.Title>
                            <Card.Title className="text-muted">Traveller</Card.Title>
                            <Card.Text className="text-muted">
                                Fusce aliquam luctus est, eget tincidunt velit scelerisque rhonocus.aliquam lacinia ipsum ornare,porttitor risus nec, mattis mauris.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mx-3 border-0 text-center center text-center">
                        <Card.Img className="w-50 rounded mx-auto d-block" variant="top" src="https://demo.egenslab.com/html/tourx/assets/images/reviewer/reviewer-1.png" />
                        <Card.Body>
                            <Card.Title>Dina Jems</Card.Title>
                            <Card.Title className="text-muted">Traveller</Card.Title>
                            <Card.Text className="text-muted">
                                Fusce aliquam luctus est, eget tincidunt velit scelerisque rhonocus.aliquam lacinia ipsum ornare,porttitor risus nec, mattis mauris.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </section>
        </div>
    );
};

export default Reviews;