import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Rerousel } from 'rerousel';
import './LogoCarousel .css'
import google from '../../../../images/logos/google.png'
import netflix from '../../../../images/logos/netflix.png'
import airbnb from '../../../../images/logos/airbnb.png'
import slack from '../../../../images/logos/slack.png'
import uber from '../../../../images/logos/uber.png'

const clientLogos = [
    {
        img: google
    },
    {
        img: netflix
    },
    {
        img: airbnb
    },
    {
        img: slack
    },
    {
        img: uber
    }
]

console.log(clientLogos);

const LogoCarousel  = () => {
    const customerLogo = useRef(null);
    return (
        <div className='logo-carousel py-5'>
            <Container>
                <Rerousel itemRef={customerLogo}>
                    {clientLogos.map((c) => {
                        return <img className='w-20' src={c.img} ref={customerLogo} />;
                    })}
                </Rerousel>
            </Container>
        </div>
    );
};

export default LogoCarousel;