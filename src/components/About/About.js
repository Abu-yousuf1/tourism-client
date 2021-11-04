import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Review/Reviews';

const About = () => {
    return (
        <div>
            <Header />
            <div>
                <div className="section-container mx-auto text-center my-5">
                    <h3 className="primary-color fw-bold">The Best Travel Agency Company.</h3>
                    <h5 className="text-muted">Our institute provides care for our region’s most precious resource: human. We care for the growing needs of our community.</h5>
                </div>


                <div className="container mt-5 py-5">
                    <div className="row ">
                        <div className="col-lg-4 text-center">
                            <i className="fas fa-code-branch fs-1 primary-color"></i>
                            <h1 className="secondary-color fw-bold my-2">6500+</h1>
                            <p className="text-muted fw-bold">Bring best quality tourist services to ones who are in need worldwide.</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <i class="fas fa-users fs-1 primary-color"></i>
                            <h1 className="secondary-color fw-bold my-2">1000+</h1>
                            <p className="text-muted fw-bold">100% trusted travel agency</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <i class="fas fa-map-marker-alt fs-1 primary-color"></i>
                            <h1 className="secondary-color fw-bold my-2">300+</h1>
                            <p className="text-muted fw-bold">Bring best quality tourist services to ones who are in need worldwide.</p>
                        </div>
                    </div>
                </div>

                <Reviews />
            </div>
            <Footer />
        </div>
    );
};

export default About;