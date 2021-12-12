import React from 'react';
import Contact from '../Contact/Contact';
import DisplayWork from '../DisplayWork/DisplayWork';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import LogoCarousel from '../LogoCarousel/LogoCarousel';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const HomeMain = () => {
    return (
        <div>
           <HeaderMain/>
           <LogoCarousel/>
           <Services/>
           <DisplayWork/>
           <Reviews/>
           <Contact/>
        </div>
    );
};

export default HomeMain;