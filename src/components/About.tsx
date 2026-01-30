import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="min-h-screen bg-arch-gray py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 h-full">
                {/* Title Column */}
                <div className="col-span-12 md:col-span-3">
                    <motion.h2
                        className="text-xl font-bold tracking-widest uppercase border-b-2 border-arch-black pb-4 mb-10 inline-block text-[#9e2a2b]"
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
                        <h3 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-8">
                            赤色の鼓動<br />
                            静寂なる美の深淵
                        </h3>
                        <div className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl space-y-6">
                            <p>
                                AIが創造したモデルは、究極の美を持ちながらも、まだ「命」を知りません<br />
                                そこに、貴社のプロダクト――ファッション、コスメ、あるいは躍動するスポーツの輝き――を纏わせることで、初めて物語が始まります
                            </p>
                            <p>
                                無機質な存在に血が通い、鼓動が響き始める瞬間。人の五感は、その美しさの中に確かな熱と価値を見出します。命なきものに魂を吹き込み、世界を鮮やかに染め上げる「<span className="text-[#9e2a2b]">赤</span>」の魔法。それは、美が生命へと昇華するための挑戦の色です
                            </p>
                        </div>
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

            {/* New Centered Section */}
            <motion.div
                className="max-w-4xl mx-auto mt-32 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="mb-8">
                    <p className="text-xl md:text-2xl font-serif font-light leading-loose tracking-wide text-gray-800">
                        RED CRYSTALは、デジタルとリアルの境界を溶かす
                    </p>
                </div>

                <Link
                    to="/about"
                    className="inline-block border border-black text-black bg-transparent px-12 py-4 uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-[#9e2a2b] hover:border-[#9e2a2b] hover:text-white"
                >
                    about us
                </Link>
            </motion.div>
        </section>
    );
};

export default About;
