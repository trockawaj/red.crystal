import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Works from '../components/Works';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Gallery />
            <Works />
            <Contact />
        </>
    );
};

export default Home;
