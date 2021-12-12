import React, { useRef } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



import carousel1 from '../../../../images/carousel1.png'
import carousel2 from '../../../../images/carousel2.png'
import carousel4 from '../../../../images/carousel4.png'
import carousel5 from '../../../../images/carousel5.png'
import './displayWork.css'

import { Rerousel } from 'rerousel';
import { Col, Container, Row } from 'react-bootstrap';


const displayWork = [
    {
        img: carousel1,
        id:1
    },
    {
        img: carousel2,
        id:2
    },
    {
        img: carousel4,
        id:3
    },
    {
        img: carousel5,
        id:4
    }
]

console.log('0');

const DisplayWork = () => {
    const work = useRef(null);
    return (
       <div className='displayWork py-5'>
            <Container className=''>
                <Row>
                <h2 className='text-center mb-md-5 text-white mb-sm-2'>Provide awesome <span className='color-primary'>services</span></h2>
                    <Rerousel  itemRef={work}>
                        {displayWork.map((c) => {
                            return <Col p-0 m-0 md={4} ref={work}>
                                <div className='m-3'>
                                    <img key={c.id} className='w-20 img-fluid' src={c.img}  />
                                </div>
                            </Col>;
                        })}
                    </Rerousel>
                </Row>
            </Container>
       </div>
    );
};

export default DisplayWork;