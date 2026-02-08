import { motion } from 'framer-motion';
import videoSrc from '../video/video01.mp4';
import posterImg from '../assets/architectural_abstract_1.png';

const Works = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-white">
            {/* Video Background */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                poster={posterImg}
                preload="auto"
            />

            {/* Overlay - Light Gray Semi-transparent */}
            <div className="absolute inset-0 bg-gray-200/20 backdrop-blur-[1px]"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
                <motion.div
                    className="flex justify-between items-end border-b border-arch-black/30 pb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#9e2a2b]">SELECTED WORKS</h2>
                    <span className="font-mono text-sm md:text-base text-black">(02)</span>
                </motion.div>

                {/* Optional: Descriptive text or just letting the video speak */}
                <motion.div
                    className="mt-8 text-black/80 font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="tracking-widest uppercase text-sm">Visual Experience</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Works;
