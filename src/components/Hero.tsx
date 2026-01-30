import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/Firefly002.png';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-arch-gray flex items-center justify-center">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
            </div>

            {/* Main Visual Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex items-center">

                {/* Asymmetrical Layout Grid */}
                <div className="grid grid-cols-12 w-full h-full">

                    {/* Text Content - Left/Top */}
                    <div className="col-span-12 md:col-span-4 flex flex-col justify-center relative z-20 text-black md:text-black">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6 text-[#9e2a2b]">
                                RED<br />
                                CRYSTAL
                            </h1>
                            <p className="text-sm md:text-base tracking-widest uppercase opacity-70 border-l-2 border-current pl-4 text-black">
                                Red attraction
                            </p>
                        </motion.div>
                    </div>

                    {/* Image Content - Right/Center - Spanning more cols */}
                    <div className="col-span-12 md:col-start-5 md:col-span-8 h-full relative">
                        <motion.div
                            className="relative h-[50vh] w-full md:h-auto md:absolute md:inset-y-12 md:left-0 md:right-12 overflow-hidden shadow-2xl mt-8 md:mt-0"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <img
                                src={heroImage}
                                alt="Architectural Visualization"
                                className="w-full h-full object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700 ease-in-out"
                            />
                        </motion.div>

                        {/* Floating Element for Depth */}
                        <motion.div
                            className="absolute bottom-20 right-0 md:-right-10 w-48 h-64 bg-arch-black text-arch-gray p-6 hidden md:flex flex-col justify-between shadow-xl"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <div className="text-xs font-mono">
                                Coordinates<br />34.3003° N<br />134.6662° E
                            </div>
                            <div className="text-4xl font-serif self-end">01</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
