import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/Firefly003.png';
import Contact from '../components/Contact';
import aboutBg from '../assets/about_bg_grid.png';
import animeImg02 from '../anime/anime02.png';

const AboutPage: React.FC = () => {
    return (
        <div
            className="min-h-screen w-full relative overflow-x-hidden text-black bg-[#9e2a2b]/20"
            style={{
                backgroundImage: `url(${aboutBg})`,
                backgroundSize: '100px 100px',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat'
            }}
        >
            <main className="w-full flex flex-col items-center pt-20 pb-0">

                <div className="w-full max-w-4xl mx-auto px-6 mb-16 text-center z-10">
                    {/* Header / Title */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase text-black">ABOUT US</h1>
                        <div className="w-12 h-0.5 bg-black mx-auto"></div>
                    </motion.div>
                </div>

                {/* Main Image with Firefly003 (Boxed Layout with Margins) */}
                <motion.div
                    className="w-full max-w-5xl aspect-[16/9] shadow-2xl relative overflow-hidden mb-16 mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <img
                        src={aboutImage}
                        alt="Red Crystal Vision"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Text Content */}
                <div className="w-full max-w-4xl mx-auto px-6 mb-32 z-10 text-center text-black">
                    <motion.div
                        className="space-y-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="space-y-8">
                            <p className="text-xl md:text-2xl font-serif font-light leading-loose tracking-wide">
                                デザインは、単なる視覚表現ではありません。<br className="hidden md:block" />
                                それは、空間における思考の具現化です。
                            </p>
                            <p className="text-lg md:text-xl font-serif font-light leading-loose opacity-80">
                                Design is not merely visual expression.<br className="hidden md:block" />
                                It is the embodiment of thought within space.
                            </p>
                        </div>

                        <div className="inline-block">
                            <a href="/" className="inline-block border border-black text-black bg-transparent px-12 py-4 uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-[#9e2a2b] hover:text-white hover:border-[#9e2a2b]">
                                Back to Home
                            </a>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Added Footer (Contact Component) with Transparent BG */}
            <Contact
                titleLine1="RED"
                titleLine2="CRYSTAL"
                titleLine1Color="text-black"
                titleLine2Color="text-gray-600"
                backgroundColor="bg-[#9e2a2b]/20 backdrop-blur-sm"
                linkColor="text-black"
                animeImage={animeImg02}
            />
        </div>
    );
};

export default AboutPage;
