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
            <section className="py-12 md:py-24 w-full flex justify-center items-center bg-white">
                <div className="relative w-64 h-64 md:w-80 md:h-80 flex justify-center items-center">
                    <img src={heartImg} alt="Menu Heart" className="w-full h-full object-contain" />
                    <Link to="/menu" className="absolute z-10">
                        <div className="bg-black text-white px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl tracking-widest transition-colors duration-300 hover:bg-[#9e2a2b]">
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
