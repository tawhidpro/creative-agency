import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Frame from '../../../../../images/logos/Frame.png'




const HeaderContent = () => {
    return (
        <div>
                <Row>
                    <Col md={5} sm={12} className='content-left'>
                        <h1>Let’s Grow Your 
                            Brand To The 
                            Next Level</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quidem quibusdam hic neque dolor ullam omnis, laboriosam reiciendis praesentium eveniet temporibus porro voluptas officia ad repellendus nesciunt ut a, itaque sunt incidunt repellat laborum nobis?</p>
                            <Link to="/contact">
                                <Button className='call-to-action-btn'  variant='dark' >Hire us</Button>
                            </Link>
                            
                    </Col>
                    <Col className='hero-right-img' sm={12} md={{span: 6, offset: 1}}>
                        <img  className='img-fluid' src={Frame} alt="" />
                    </Col>
                </Row>
        </div>
    );
};

export default HeaderContent;