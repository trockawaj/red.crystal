import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import defaultAnimeImg from '../anime/anime01.png';

interface FooterLinkProps {
    href: string;
    label: string;
    animeImage?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label, animeImage = defaultAnimeImg }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={href}
            className="group relative pb-4 w-full block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Text */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                {label}
            </span>

            {/* Underline */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-700 transition-colors duration-300 group-hover:bg-[#9e2a2b]"></div>

            {/* Anime Image Pop-up */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute bottom-[1px] right-0 pointer-events-none z-20"
                        initial={{ opacity: 0, y: 10, scale: 0.8, originY: 1 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <img src={animeImage} alt="pop" className="w-24 h-auto object-contain" />
                    </motion.div>
                )}
            </AnimatePresence>
        </a>
    );
};

interface ContactProps {
    titleLine1?: string;
    titleLine2?: string;
    titleLine1Color?: string;
    titleLine2Color?: string;
    subtitle?: React.ReactNode;
    backgroundColor?: string;
    linkColor?: string;
    animeImage?: string;
}

const Contact: React.FC<ContactProps> = ({
    titleLine1 = "START",
    titleLine2 = "PROJECT",
    titleLine1Color = "text-arch-black", // Default black/current
    titleLine2Color = "text-gray-600", // Default gray
    subtitle = (
        <>
            We are currently accepting new projects for 2026.<br />
            Let's build something timeless together.
        </>
    ),
    backgroundColor = "bg-white",
    linkColor = "text-arch-black", // Default to inherit or specific color if needed, actually text-arch-black is base text color, links borrow from it usually but here we want explicit control
    animeImage
}) => {
    return (
        <section className={`${backgroundColor} text-arch-black py-32 px-6`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-6xl md:text-8xl font-bold flex flex-col leading-none mb-12">
                        <span className={titleLine1Color}>{titleLine1}</span>
                        <span className={titleLine2Color}>{titleLine2}</span>
                    </h2>
                    <p className="text-gray-400 max-w-md">
                        {subtitle}
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col justify-end"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className={`flex flex-col gap-8 text-xl font-light ${linkColor}`}>
                        <FooterLink href="mailto:hello@studio.com" label="hello@studio.com" animeImage={animeImage} />
                        <FooterLink href="#" label="Instagram" animeImage={animeImage} />
                        <FooterLink href="#" label="LinkedIn" animeImage={animeImage} />
                    </div>
                    <p className="mt-12 text-xs font-mono text-gray-600">
                        © 2026 RED CRYSTAL. ALL RIGHTS RESERVED.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
