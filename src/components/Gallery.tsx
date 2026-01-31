import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryProps {
    title: string;
    images: string[];
    description?: string;
    className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ title, images, description, className = "pb-20 pt-10" }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Infinite Loop Logic: Clone items for seamless scroll
    const displayImages = [...images, ...images, ...images];

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            handleScroll('right');
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Initial Scroll Position (Center Set)
    useEffect(() => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            // Scroll to the start of the middle set
            const singleSetWidth = current.scrollWidth / 3;
            current.scrollLeft = singleSetWidth;
        }
    }, [images]);

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const firstChild = current.firstElementChild as HTMLElement;
            if (!firstChild) return;

            // Calculate scroll amount (one item + gap)
            const itemWidth = firstChild.offsetWidth;
            const gap = 16;
            const scrollAmount = itemWidth + gap;

            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                // Infinite interactions handled in onScroll
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    // Scroll Reset Logic for Infinite Loop
    const handleScrollEvent = () => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const singleSetWidth = current.scrollWidth / 3;

            // If scrolled into the third set (Clone Start), jump back to Middle (Originals)
            if (current.scrollLeft >= singleSetWidth * 2) {
                current.style.scrollBehavior = 'auto'; // Instant jump
                current.scrollLeft -= singleSetWidth;
                current.style.scrollBehavior = 'smooth'; // Restore
            }
            // If scrolled into the first set (Clone End), jump forward to Middle
            else if (current.scrollLeft <= singleSetWidth * 0.5) {
                const gap = 16;
                if (current.scrollLeft <= gap) {
                    current.style.scrollBehavior = 'auto';
                    current.scrollLeft += singleSetWidth;
                    current.style.scrollBehavior = 'smooth';
                }
            }
        }
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

                    {/* Removed Top Vertical Line */}
                    <h3 className="text-3xl md:text-4xl font-serif tracking-widest uppercase">{title}</h3>
                    <div className="w-8 h-px bg-arch-black mt-6"></div>
                </div>
            </div>

            <div className="relative w-full group">
                {/* Navigation Buttons */}
                <button
                    onClick={() => handleScroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-arch-black transition-colors opacity-0 group-hover:opacity-100 duration-300"
                >
                    <ChevronLeft size={48} strokeWidth={0.5} />
                </button>
                <button
                    onClick={() => handleScroll('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-arch-black transition-colors opacity-0 group-hover:opacity-100 duration-300"
                >
                    <ChevronRight size={48} strokeWidth={0.5} />
                </button>

                {/* Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScrollEvent}
                    className="flex overflow-x-auto gap-4 px-12 md:px-20 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {displayImages.map((img, index) => (
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
