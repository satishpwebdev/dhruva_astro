import React from 'react';
import { motion } from 'framer-motion';
import AstronautImg from '../../assets/images/Astronaut.png';
import GalaxyBg from '../../assets/images/galaxy.png';

const EventAstro = () => {
    return (
        <section className="relative w-full py-16 md:py-24 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="absolute top-0 left-4 md:left-8 z-10">
                    <span className="text-xl sm:text-2xl md:text-4xl font-lemon text-white font-bold tracking-wider">#2</span>
                </div>

                <div className="relative pt-8 md:pt-12 block md:flex md:flex-row items-center justify-end">

                    <div className="w-full ml-auto md:w-[60%] md:ml-0 relative z-0 md:-left-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full aspect-video md:aspect-[1/1] overflow-hidden rounded-lg shadow-2xl"
                        >
                            <img
                                src={AstronautImg}
                                alt="Astronaut on Moon"
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute left-2 bottom-[-40px] w-[80%] sm:bottom-[-20px] md:w-[45%] text-left md:absolute md:left-20 md:top-1/2 md:-translate-y-1/2 z-10 md:mt-0"
                    >
                        <div className="bg-white/30 backdrop-blur-md border border-white/30 p-4 md:p-10 text-white shadow-xl relative overflow-hidden rounded-lg md:rounded-none">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                            <span className="text-[10px] sm:text-xs md:text-md font-mono tracking-widest block mb-2 md:mb-4 text-gray-300">18/06/2023</span>

                            <h3 className="text-base sm:text-xl md:text-4xl font-lemon font-normal leading-tight mb-2 md:mb-6 tracking-wide">
                                ASTRONAUTS WE KNOW
                            </h3>

                            <p className="text-gray-300 text-[8px] sm:text-xs md:text-base mb-3 md:mb-8 leading-relaxed line-clamp-3 md:line-clamp-none">
                                Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.
                            </p>

                            <button className="bg-white text-black px-3 py-1 sm:px-4 sm:py-2 md:px-8 md:py-3 font-bold text-[8px] sm:text-[10px] md:text-sm tracking-widest hover:bg-gray-200 transition-colors uppercase">
                                Learn More
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default EventAstro;
