import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="min-h-screen bg-arch-gray py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 h-full">
                {/* Title Column */}
                <div className="col-span-12 md:col-span-3">
                    <motion.h2
                        className="text-xl font-bold tracking-widest uppercase border-b-2 border-arch-black pb-4 mb-10 inline-block"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Concept
                    </motion.h2>
                </div>

                {/* Content Column */}
                <div className="col-span-12 md:col-span-9 flex flex-col justify-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-8">
                            Architecture is not just about <span className="italic">building</span>.<br />
                            It is about <span className="font-semibold">shaping void</span>.
                        </h3>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl">
                            We approach web design with the mindset of an architect. We don't just arrange pixels; we construct digital spaces that breathe.
                            By manipulating grid systems, negative space, and depth, we create immersive experiences that transcend the flat screen.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 gap-4 mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <div className="bg-arch-black h-px w-full my-auto"></div>
                        <p className="text-sm font-mono text-gray-500">
                            FORM FOLLOWS FUNCTION<br />
                            LESS IS MORE
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
