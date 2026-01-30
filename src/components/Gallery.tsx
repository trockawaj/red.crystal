import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import img005 from '../assets/Firefly005.png';
import img006 from '../assets/Firefly006.png';
import img007 from '../assets/Firefly007.png';
import img008 from '../assets/Firefly008.png';
import img009 from '../assets/Firefly009.png';
import img010 from '../assets/Firefly010.png';
import img011 from '../assets/Firefly011.png';
import img012 from '../assets/Firefly012.png';
import img013 from '../assets/Firefly013.png';
import img014 from '../assets/Firefly014.png';

const images = [img005, img006, img007, img008, img009, img010, img011, img012, img013, img014];

const Gallery: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            handleScroll('right');
        }, 4000); // 4 seconds auto move
        return () => clearInterval(interval);
    }, []);

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            // Get width of first child (image wrapper) + gap
            const firstChild = current.firstElementChild as HTMLElement;
            if (!firstChild) return;

            // Calculate item width including gap. Window getComputedStyle to get gap if needed, 
            // but we know gap-4 is 1rem (16px).
            const itemWidth = firstChild.offsetWidth;
            const gap = 16; // 1rem approx
            const scrollAmount = itemWidth + gap;

            if (direction === 'left') {
                if (current.scrollLeft <= 0) {
                    // Loop to end (not smooth infinite, but functional loop)
                    current.scrollTo({ left: current.scrollWidth, behavior: 'smooth' });
                } else {
                    current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
            } else {
                // Check if at end
                // allow a small buffer for float precision
                if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
                    // Loop to start
                    current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <section className="pb-20 pt-10 bg-arch-gray overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="h-16 w-px bg-arch-black mb-6"></div>
                    <h3 className="text-3xl md:text-4xl font-serif tracking-widest uppercase">MODELS</h3>
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
                    className="flex overflow-x-auto gap-4 px-12 md:px-20 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {images.map((img, index) => (
                        <div key={index} className="flex-none w-[80vw] md:w-[25vw] aspect-[3/4] snap-center">
                            <img
                                src={img}
                                alt={`Model ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
