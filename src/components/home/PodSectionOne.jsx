import React from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';
import PodMic from '../../assets/images/Podmictwo.png';

const PodSectionOne = () => {
    return (
        <section className="relative w-full py-10 px-4 md:px-8">
            <div className="max-w-9xl flex items-center justify-center flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full max-w-5xl aspect-[20/10] md:aspect bg-[#FFB566] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-12 shadow-2xl"
                >
                    <img
                        src={PodMic}
                        alt="Podcast Microphone"
                        className="w-full h-full object-cover object-center scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>

                    <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
                        <p className="text-white/90 text-xs md:text-sm font-medium mb-1 pl-1">Available on</p>
                        <div className="flex items-center gap-2 text-white">
                            <Youtube className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                            <span className="text-2xl md:text-3xl font-bold tracking-tighter condense">YouTube</span>
                        </div>
                    </div>
                </motion.div>

                <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl md:text-5xl lg:text-6xl text-left font-black text-white uppercase leading-[4] tracking-2"
                    >
                        PODCAST OF THE WEEK
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col text-left gap-4 lg:pt-2"
                    >
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                            Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
                        </p>

                        <button className="w-fit flex items-center gap-2 px-6 py-2 hover:bg-white hover:text-black border-2 border-white rounded-lg text-white font-medium hover:bg-white/10 transition-colors group">
                            Learn More
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PodSectionOne;
