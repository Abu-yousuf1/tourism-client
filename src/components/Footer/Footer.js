import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../hooks/useAuth';

const Footer = () => {
    const { user, logout } = useAuth();
    return (
        <div className="footer-bg-color ps-4 text-light row">
            <div className="col-lg-3 m-lg-5 m-2">
                <h1><span className="fw-bold secondary-color">Fly Away Allies</span></h1>
                <p className="text-muted mt-4 fw-bold">Travelers are always looking for inspiration to guide their adventures. Coming up with a list of places to visit can be challenging when you're staring at a globe.
                </p>
                <h6 className="fw-bold mt-5">SUBSCRIBE</h6>
            </div>

            <div className="col-lg-2 mt-5">
                <h5 className="fw-bold">USEFUL LINKS</h5>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                {
                    user?.email && <Nav.Link as={Link} to="/orderList" >OrderReview</Nav.Link>
                }
                {
                    user?.email && <Nav.Link as={Link} to="/manageOrder" >ManageOrder</Nav.Link>
                }
                {
                    user?.email ?
                        <button className="btn" onClick={logout}>Log Out</button>
                        :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                }
                <Nav.Link as={Link} to="/about">About</Nav.Link>
            </div>

            <div className="col-lg-6  d-flex align-items-center justify-content-center">
                <i className="fab fa-facebook text-muted fs-3 "></i>
                <i className="fab fa-twitter text-muted ps-3 fs-3 "></i>
                <i className="fab fa-instagram-square text-muted ps-3 fs-3 "></i>
                <i className="fab fa-vimeo-v text-muted ps-3 fs-3 "></i>
            </div>
        </div>
    );
};

export default Footer;