import React from 'react';
import { motion } from 'framer-motion';
import EventRecentImg from '../../assets/images/EventRecent.png';
import MoonImg from '../../assets/images/Moon.png';

const EventRecent = () => {
    return (
        <section className="md:py-24 relative w-full overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                <div className="text-center mb-12">
                    <h2 className="text-xl md:text-5xl font-lemon text-white tracking-[0.2em] uppercase">
                        RECENT EVENTS
                    </h2>
                </div>

                <div className="relative mt-4 md:mt-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="absolute -top-12 -left-2 md:-top-24 md:-left-20 z-20 w-32 h-32  md:w-64 md:h-64 pointer-events-none"
                    >
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full"
                        >
                            <img src={MoonImg} alt="Moon" className='w-full h-full object-cover rounded-full shadow-[0_0_100px_rgba(255,255,255,0.2)] grayscale' />
                        </motion.div>
                    </motion.div>

                    <div className="absolute -top-2 right-4 md:-top-10 md:-right-14 z-20">
                        <span className="text-xl sm:text-2xl md:text-4xl font-lemon text-white font-bold opacity-90">#1</span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full ml-auto md:-left-20 md:w-[80%] aspect-[16/9] md:aspect-[1.8/1.4] bg-gray-900 shadow-2xl overflow-hidden rounded-lg mx-auto"
                    >
                        <img
                            src={EventRecentImg}
                            alt="Cosmic Event"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />

                    </motion.div>
                    <div className="absolute bottom-[-10px] md:right-2 sm:bottom-0 right-1 text-left w-[90%] md:w-1/2 h-auto md:h-auto md:bottom-10 md:-right-20 bg-white/30 backdrop-blur-sm p-4 md:p-10 text-white border border-white/10 z-30">
                        <span className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide block mb-1 md:mb-3 text-gray-300">18/06/2023</span>
                        <h3 className="text-base sm:text-xl md:text-4xl font-lemon font-bold leading-tight mb-2 md:mb-4">
                            TALK ON DARK MATTER
                        </h3>
                        <p className="text-gray-300 text-[8px] sm:text-xs md:text-base mb-3 md:mb-8 leading-relaxed tex-left line-clamp-3 md:line-clamp-4">
                            Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.
                        </p>
                        <button className="bg-white text-black px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2.5 font-bold text-[8px] sm:text-[10px] md:text-sm tracking-wide hover:bg-gray-200 transition-colors">
                            Learn More
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EventRecent;
