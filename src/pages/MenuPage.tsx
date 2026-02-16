import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import aboutBg from '../assets/about_bg_grid.png';
import animeImg02 from '../anime/anime02.png';

const MenuPage: React.FC = () => {
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
                        <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase text-black">MENU</h1>
                        <div className="w-12 h-0.5 bg-black mx-auto"></div>
                    </motion.div>

                    {/* Pricing List */}
                    <div className="max-w-3xl mx-auto space-y-12 mb-32">
                        {/* Moment 3000 */}
                        <motion.div
                            className="text-center space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-xl md:text-2xl font-bold tracking-wider">モーメント</h2>
                            <p className="text-3xl md:text-4xl font-serif">￥3000</p>
                            <p className="text-sm md:text-base text-gray-700">ー商品の合成&ラフイメージ1枚ー</p>
                        </motion.div>

                        {/* Moment 5000 */}
                        <motion.div
                            className="text-center space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="text-xl md:text-2xl font-bold tracking-wider">モーメント</h2>
                            <p className="text-3xl md:text-4xl font-serif">￥5000</p>
                            <p className="text-sm md:text-base text-gray-700">ー商品の合成&ラフイメージ3枚ー</p>
                        </motion.div>

                        {/* Motion Video 5000 */}
                        <motion.div
                            className="text-center space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h2 className="text-xl md:text-2xl font-bold tracking-wider">モーションビデオ</h2>
                            <p className="text-3xl md:text-4xl font-serif">￥5000</p>
                            <p className="text-sm md:text-base text-gray-700">ー商品の合成&ラフビデオ1シーンー</p>
                        </motion.div>

                        {/* Motion Video 8000 */}
                        <motion.div
                            className="text-center space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <h2 className="text-xl md:text-2xl font-bold tracking-wider">モーションビデオ</h2>
                            <p className="text-3xl md:text-4xl font-serif">￥8000</p>
                            <p className="text-sm md:text-base text-gray-700">ー商品の合成&ラフビデオ3シーンー</p>
                        </motion.div>
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

            {/* Footer with Transparent BG */}
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

export default MenuPage;
