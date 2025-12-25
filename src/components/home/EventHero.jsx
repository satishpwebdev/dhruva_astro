import React from 'react';
import { motion } from 'framer-motion';
import EventHeroImg from '../../assets/images/EventHero.png';

const EventHero = () => {
    return (
        <section className="relative w-full py-16 px-4 sm:px-6 lg:px-24 flex justify-center items-center">
            <div className="relative w-full max-w-6xl aspect-[16/9] md:aspect-[2.4/1] bg-gray-900 shadow-2xl overflow-hidden">
                <img
                    src={EventHeroImg}
                    alt="Astronaut Stargazer"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 md:bottom-12 md:left-12 flex flex-col items-start z-10 w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-lemon text-white font-bold tracking-wide leading-none drop-shadow-lg"
                    >
                        OUR STARGAZERS
                    </motion.h1>

                    <div className="flex flex-col md:flex-row items-baseline gap-1 md:gap-6 mt-1 md:mt-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-lemon text-white font-bold tracking-wide leading-none drop-shadow-lg"
                        >
                            SPECTACLE
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-[10px] sm:text-xs md:text-lg lg:text-xl font-lemon text-white/90 tracking-widest drop-shadow-md"
                        >
                            A JOURNEY THROUGH THE COSMOS
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventHero;
