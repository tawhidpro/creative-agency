import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderContent from '../HeaderContent/HeaderContent';
import HeaderNav from '../HeaderNavbar/HeaderNav';
import './HeaderMain.css'


const HeaderMain = () => {
    return (
        <div >
            <div className='home-header'>
                <HeaderNav/>
                <div className='header-content' >
                    <Container>
                        <HeaderContent/>
                    </Container>
                </div>
            </div>       
        </div>
    );
};

export default HeaderMain;