import { motion } from 'framer-motion';
import projectImg1 from '../assets/architectural_abstract_1.png';
// Fallback or reuse for project 2 since gen failed/skipped
import projectImg2 from '../assets/hero_bg_texture.png';

const Works = () => {
    const projects = [
        {
            id: 1,
            title: "BRUTALIST RESIDENCE",
            category: "Residential / 2024",
            image: projectImg1,
            size: "col-span-12 md:col-span-8"
        },
        {
            id: 2,
            title: "VOID MUSEUM",
            category: "Public / 2025",
            image: projectImg2,
            size: "col-span-12 md:col-span-4"
        },
    ];

    return (
        <section className="bg-white py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="flex justify-between items-end mb-20 border-b border-gray-200 pb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold tracking-tight text-[#9e2a2b]">SELECTED WORKS</h2>
                    <span className="font-mono text-sm">(02)</span>
                </motion.div>

                <div className="grid grid-cols-12 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`${project.size} group cursor-pointer`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="overflow-hidden mb-4 relative aspect-[4/3] md:aspect-auto h-[60vh] max-w-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                                <p className="text-sm font-mono text-gray-500 mt-1">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
