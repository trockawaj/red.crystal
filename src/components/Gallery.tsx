import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryProps {
    title: string;
    images: string[];
    description?: string;
    className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ title, images, description, className = "pb-20 pt-10" }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScrollEvent = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            const maxScroll = scrollWidth - clientWidth;
            setScrollProgress(maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0);
        }
    };

    const handlePointerDown = (e: React.PointerEvent) => {
        if (!trackRef.current || !scrollContainerRef.current) return;
        const trackRect = trackRef.current.getBoundingClientRect();

        const handleMove = (clientX: number) => {
            let newProgress = ((clientX - trackRect.left) / trackRect.width) * 100;
            newProgress = Math.max(0, Math.min(100, newProgress));
            setScrollProgress(newProgress);
            const { scrollWidth, clientWidth } = scrollContainerRef.current!;
            const maxScroll = scrollWidth - clientWidth;
            scrollContainerRef.current!.scrollLeft = (newProgress / 100) * maxScroll;
        };

        const onPointerMove = (moveEvent: PointerEvent) => handleMove(moveEvent.clientX);
        const onPointerUp = () => {
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
        };

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        // Initial jump
        handleMove(e.clientX);
    };

    return (
        <section className={`${className} bg-arch-gray overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <div className="flex flex-col items-center">
                    {/* Optional Description above title or integrated */}
                    {description && (
                        <div className="mb-8 max-w-3xl">
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans">{description}</p>
                        </div>
                    )}

                    <h3 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-2">{title}</h3>
                </div>
            </div>

            <div className="relative w-full">
                {/* Custom PC Scrollbar */}
                <div className="hidden md:flex justify-center w-full mb-8 px-12 relative z-20">
                    <div
                        ref={trackRef}
                        onPointerDown={handlePointerDown}
                        className="w-full max-w-3xl h-[2px] bg-gray-300 relative cursor-pointer"
                    >
                        <div
                            className="absolute top-1/2 h-[6px] w-24 bg-arch-black cursor-grab active:cursor-grabbing hover:h-[8px] transition-all"
                            style={{ left: `${scrollProgress}%`, transform: `translate(-${scrollProgress}%, -50%)` }}
                        />
                    </div>
                </div>

                {/* Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScrollEvent}
                    className="flex overflow-x-auto gap-4 px-12 md:px-20 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {images.map((img, index) => (
                        <div key={index} className="flex-none w-[80vw] md:w-[25vw] aspect-[3/4] snap-center cursor-pointer" onClick={() => setSelectedImage(img)}>
                            <img
                                src={img}
                                alt={`${title} ${index + 1}`}
                                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
                            />
                        </div>
                    ))}
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

export default Gallery;
