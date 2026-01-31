import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import Contact from '../components/Contact';
import aboutBg from '../assets/about_bg_grid.png';

// Import images
import loc1 from '../location/location0001.png';
import loc2 from '../location/location0002.png';
import loc3 from '../location/location0003.png';
import loc4 from '../location/location0004.png';
import loc5 from '../location/location0005.png';
import loc6 from '../location/location0006.png';
import loc7 from '../location/location0007.png';
import loc8 from '../location/location0008.png';
import loc9 from '../location/location0009.png';
import loc10 from '../location/location0010.png';
import loc11 from '../location/location0011.png';
import loc12 from '../location/location0012.png';
import loc13 from '../location/location0013.png';
import loc14 from '../location/location0014.png';
import loc15 from '../location/location0015.png';
import loc16 from '../location/location0016.png';
import loc17 from '../location/location0017.png';
import loc18 from '../location/location0018.png';
import animeImg02 from '../anime/anime02.png';

const images = [
    loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8, loc9,
    loc10, loc11, loc12, loc13, loc14, loc15, loc16, loc17, loc18
];

const LocationPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

                <div className="w-full max-w-7xl mx-auto px-6 mb-16 z-10">
                    {/* Header / Title */}
                    <motion.div
                        className="space-y-4 text-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase text-black">LOCATION</h1>
                        <div className="w-12 h-0.5 bg-black mx-auto"></div>
                    </motion.div>

                    {/* Masonry Grid */}
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-32">
                        {images.map((img, index) => (
                            <div key={index} className="break-inside-avoid cursor-pointer" onClick={() => setSelectedImage(img)}>
                                <motion.img
                                    src={img}
                                    alt={`Location ${index + 1}`}
                                    className="w-full h-auto object-cover hover:opacity-90 transition-opacity duration-300 shadow-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mb-20">
                        <div className="inline-block">
                            <Link to="/" className="inline-block border border-black text-black bg-transparent px-12 py-4 uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-[#9e2a2b] hover:text-white hover:border-[#9e2a2b] bg-white/50 backdrop-blur-sm">
                                Back to Home
                            </Link>
                        </div>
                    </div>
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

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10 cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors">
                            <X size={48} strokeWidth={1} />
                        </button>
                        <motion.img
                            src={selectedImage}
                            alt="Full View"
                            className="max-w-full max-h-full object-contain"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LocationPage;
