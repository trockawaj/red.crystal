import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Works />
            <Contact />
        </>
    );
};

export default Home;
