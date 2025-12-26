import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Moon from '../../assets/images/Moon.png'

const Hero = () => {
    return (
        <div className="relative h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to- to-transparent z-10" />

            </div>

            <div className="relative z-20 text-center px-4 max-w-6xl mx-auto ">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-lemon font-bold text-white mb-2 md:mb-6 leading-tight tracking-wide transition-colors shadow-[0_0_0px_rgba(255,255,255,0.5)]">
                        LET'S TRAVEL TO THE EDGE
                        OF SPACE
                    </h1>
                    <p className="text-[10px] sm:text-sm md:text-xl max-w-3xl mb-4 md:mb-10 leading-relaxed text-white font-bold transition-colors shadow-[0_0_0px_rgba(255,255,255,0.5)]">
                        We are a group that love to explore and learn new information related to our universe.
                        Join us and Explore
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-1.5 md:px-8 md:py-3 bg-transparent border md:border-2 border-white text-white font-lemon tracking-widest text-[10px] md:text-sm hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                        >
                            DISCOVER MORE
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-0  w-[190px] h-[190px] sm:w-[180px] sm:h-[180px] md:bottom-2 md:right-40 md:w-[280px] md:h-[280px] z-10 opacity-90 pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <img
                    src={Moon}
                    alt="Moon"
                    className="w-full h-full object-cover rounded-full shadow-[0_0_100px_rgba(255,255,255,0.2)] grayscale"
                />
            </motion.div>
            <motion.div
                className="absolute right-2 bottom-4 md:right-8 md:bottom-10 flex flex-col items-center gap-2 md:gap-4 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-white shadow-[0_0_0px_rgba(255,255,255,0.5)] text-[10px] md:text-sm font-lemon tracking-[0.2em] writing-vertical-l rotate-90">
                    SCROLL
                </span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="text-white/70 mt-1 md:mt-4" size={16} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
