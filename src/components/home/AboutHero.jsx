import React from 'react';
import { motion } from 'framer-motion';
import Dhruva from '../../assets/images/dhruva_final.png';
import Moon from '../../assets/images/Moon.png';
import EventHero from '../../assets/images/GroupPhoto.png';

const AboutHero = () => {
    return (
        <div className="w-full flex flex-col relative z-10">
            <section className="relative w-full min-h-[80vh] pt-24 px-4 md:px-12 flex flex-col z-20">
                <div className="max-w-5xl mx-auto w-full relative">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-wide mb-12 md:mb-20 md:text-left"
                    >
                        ABOUT US.
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center md:justify-start"
                        >
                            <div className="w-64 h-64 md:w-80 md:h-80 relative">
                                <img
                                    src={Dhruva}
                                    alt="Dhruva Logo"
                                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-left"
                        >
                            <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose tracking-wide font-medium">
                                Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="absolute -bottom-20 right-2 md:-bottom-32 md:-right-10 w-[150px] h-[150px] md:w-[250px] md:h-[250px] z-30 pointer-events-none"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    <img
                        src={Moon}
                        alt="Moon"
                        className="w-full h-full object-cover rounded-full shadow-[0_0_100px_rgba(255,255,255,0.2)] grayscale"
                    />
                </motion.div>
            </section>

            <section className="relative w-full h-[60vh] md:h-screen z-10 mt-[50px] md:mt-[100px]">
                <img
                    src={EventHero}
                    alt="Team Group"
                    className="w-full h-full object-cover"
                />

            </section>
        </div>
    );
};

export default AboutHero;
