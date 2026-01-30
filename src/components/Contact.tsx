import { motion } from 'framer-motion';

interface ContactProps {
    titleLine1?: string;
    titleLine2?: string;
    titleLine1Color?: string;
    titleLine2Color?: string;
    subtitle?: React.ReactNode;
    backgroundColor?: string;
    linkColor?: string;
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
    linkColor = "text-arch-black" // Default to inherit or specific color if needed, actually text-arch-black is base text color, links borrow from it usually but here we want explicit control
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
                    <div className={`grid grid-cols-1 gap-8 text-xl font-light ${linkColor}`}>
                        <a href="mailto:hello@studio.com" className="border-b border-gray-700 pb-4 hover:opacity-70 hover:border-white transition-all">hello@studio.com</a>
                        <a href="#" className="border-b border-gray-700 pb-4 hover:opacity-70 hover:border-white transition-all">Instagram</a>
                        <a href="#" className="border-b border-gray-700 pb-4 hover:opacity-70 hover:border-white transition-all">LinkedIn</a>
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
