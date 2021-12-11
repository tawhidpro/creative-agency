import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink as Link  } from 'react-router-dom';

const HeaderNav = () => {
 
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Creative agency</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/portfolio">Our Portfolio</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/team">Our Team</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/contact">Contact Us</Link>
                        </li>
                        <Link to="/login">
                           <Button variant='dark'>Login</Button>
                        </Link>
                        
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    );
};

export default HeaderNav;