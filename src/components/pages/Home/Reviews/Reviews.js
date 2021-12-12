import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import customer1 from '../../../../images/customer1.png'
import customer2 from '../../../../images/customer2.png'
import customer3 from '../../../../images/customer3.png'
import './Reviews.css'

const userReviews = [
    {
        id: 1,
        name: 'salman',
        img: customer1,
        job: 'CEO of google',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fuga impedit modi saepe'
    },
    {
        id: 2,
        name: 'salman',
        img: customer2,
        job: 'CEO of microsoft',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fuga impedit modi saepe '
    },
    {
        id: 3,
        name: 'salman',
        img: customer3,
        job: 'CEO of facebook',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fuga impedit modi saepe'
    }
]

const Reviews = () => {
    return (
        <div className='review-section py-5'>
            <Container>
                <Row>
                    {
                        userReviews.map(item=>{
                            return <Col >
                                        <div className='border p-3'>
                                            <div className='d-flex'>
                                                <div>
                                                    <img src={item.img} alt={item.name} />
                                                </div>
                                                <div>
                                                    <h6>{item.name}</h6>
                                                    <p>{item.job}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>{item.review}</p>
                                            </div>
                                        </div>
                                </Col>

                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;