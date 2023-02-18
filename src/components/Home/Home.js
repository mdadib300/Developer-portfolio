import React from 'react';
import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Portfolio />
            <Testimonials />
        </div>
    );
};

export default Home;