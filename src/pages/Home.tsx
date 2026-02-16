import React from 'react';
import { Link } from 'react-router-dom';
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
import img019 from '../assets/firefly019.png';
import img020 from '../assets/firefly020.png';
import img021 from '../assets/firefly021.png';

import heartImg from '../assets/menu/heart.png'; // Added heartImg import

const modelImages = [
    img005, img006, img007, img008, img009,
    img015, img016, img017, img018, img019, img020, img021
];

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />

            {/* Menu Section */}
            {/* Menu Section */}
            <section className="w-full flex justify-center items-center bg-white mt-16 md:-mt-96 mb-40 md:mb-48 relative z-10">
                <div className="relative w-[90%] md:w-full max-w-6xl h-[400px] md:h-[700px] flex justify-center items-center">
                    <img src={heartImg} alt="Menu Heart" className="w-full h-full object-contain" />
                    <Link to="/menu" className="absolute z-10">
                        <div className="bg-black text-white px-8 py-3 md:px-12 md:py-5 text-xl md:text-2xl tracking-widest transition-colors duration-300 hover:bg-[#9e2a2b]">
                            MENU
                        </div>
                    </Link>
                </div>
            </section>

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
