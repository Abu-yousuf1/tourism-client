import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth()

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className="primary-color fw-bold" >Fly Away Allies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            {
                                user?.email && <Nav.Link as={Link} to="/orderList" >OrderReview</Nav.Link>
                            }
                            {
                                user?.email && <Nav.Link as={Link} to="/manageOrder" >ManageOrder</Nav.Link>
                            }
                            {
                                user?.email ?
                                    <Navbar.Text>  <span className="btn" onClick={logout}>Log Out</span> </Navbar.Text>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            {
                                user.email && <Navbar.Text>{user.displayName} </Navbar.Text>

                            }
                            <Nav.Link as={Link} to="/about" >About</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;