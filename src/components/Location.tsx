import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

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

const images = [
    loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8, loc9,
    loc10, loc11, loc12, loc13, loc14, loc15, loc16, loc17
];

const Location: React.FC = () => {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    return (
        <section className="bg-arch-gray pb-20 px-6 mt-12 md:mt-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-12">
                    {/* Disclaimer Text */}
                    <div className="mb-8 w-full overflow-x-auto text-center">
                        <p className="text-xs md:text-sm text-gray-600 font-sans whitespace-nowrap inline-block text-center">
                            当社のAIモデルは、権利関係がクリアな画像生成AIのシステムを使用しているため、安心して広告等にご利用いただけます
                        </p>
                        <div className="mt-4 text-xs md:text-sm text-gray-500 font-sans leading-relaxed">
                            <p>ロケーションは参考の為に表示しています</p>
                            <p>お客様の求めるロケーションで撮影が可能です</p>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-serif tracking-widest uppercase">LOCATION</h3>
                    <div className="w-8 h-px bg-arch-black mt-6"></div>
                </div>

                {/* Masonry Grid */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-16">
                    {images.map((img, index) => (
                        <div key={index} className="break-inside-avoid cursor-pointer" onClick={() => setSelectedImage(img)}>
                            <motion.img
                                src={img}
                                alt={`Location ${index + 1}`}
                                className="w-full h-auto object-cover hover:opacity-90 transition-opacity duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            />
                        </div>
                    ))}
                </div>

                {/* ALL Button */}
                <div className="text-center">
                    <Link
                        to="/location"
                        className="inline-block border border-black text-black bg-transparent px-12 py-4 uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-[#9e2a2b] hover:border-[#9e2a2b] hover:text-white"
                    >
                        ALL
                    </Link>
                </div>
            </div>

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
        </section>
    );
};

export default Location;
