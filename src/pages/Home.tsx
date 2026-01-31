import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import Works from '../components/Works';
import Contact from '../components/Contact';

// Import images directly in Home to pass to galleries
import img005 from '../assets/Firefly005.png';
import img006 from '../assets/Firefly006.png';
import img007 from '../assets/Firefly007.png';
import img008 from '../assets/Firefly008.png';
import img009 from '../assets/Firefly009.png';
import img015 from '../assets/firefly015.png';
import img016 from '../assets/firefly016.png';
import img017 from '../assets/firefly017.png';
import img018 from '../assets/firefly018.png';

const modelImages = [
    img005, img006, img007, img008, img009,
    img015, img016, img017, img018
];

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Gallery
                title="MODELS"
                images={modelImages}
                className="pb-0 pt-0 md:pt-4"
            />
            <Location />
            <Works />
            <Contact />
        </>
    );
};

export default Home;
