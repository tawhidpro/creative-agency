import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import service1 from '../../../../images/icons/service1.png'
import service2 from '../../../../images/icons/service2.png'
import service3 from '../../../../images/icons/service3.png'
import './Services.css'

const services = [
    {
        id: 1,
        title: 'Web and mobile design',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, id.',
        img: service1
    },
    {
        id: 1,
        title: 'Graphic design',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, id.',
        img: service2
    },
    {
        id: 1,
        title: 'Web development',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, id.',
        img: service3
    }
]

const Services = () => {
    return (
       <div className="services-section py-5">
            <Container>
                <Row>
                    <h2 className='text-center mb-md-5 mb-sm-2'>Provide awesome <span className='color-primary'>services</span></h2>
                    {
                        services.map(item=>{
                            return <Col sm={12} md={4} className="text-center m-0 p-0" key={item.id}>
                              <Link style={{'textDecoration' : 'none'}} to="/">
                                <div className='m-2 p-5 shadow'>
                                    <img className='services-icon ' src={item.img} alt={item.title} />
                                        <h4 className='services-title mt-2'>{item.title}</h4>
                                        <p className='services-des mt-2'>{item.des}</p>
                                </div>
                              </Link>
                            </Col>
                        })
                    }
                </Row>
            </Container>
       </div>
    );
};

export default Services;