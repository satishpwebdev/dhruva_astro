import React from 'react';
import { motion } from 'framer-motion';
import Dhruva from '../../assets/images/dhruva_final.png'

const KnowMore = () => {
    return (
        <section className=" py-6 md:py-24 relative w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-lg md:text-2xl font-lemon text-white tracking-[0.2em] uppercase">
                        KNOW MORE ABOUT US HERE
                    </h2>
                </motion.div>

                <div className="flex flex-row items-center justify-between gap-4 md:gap-24 mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-1/3 flex justify-end"
                    >
                        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-80 md:h-80 flex items-center justify-center">
                            <img
                                src={Dhruva}
                                alt="Dhruva Club Logo"
                                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-2/3 flex flex-col justify-center text-white text-left"
                    >
                        <h3 className="text-[10px] sm:text-sm md:text-3xl lg:text-2xl font-lemon font-bold leading-tight tracking-[0.16em] mb-2 md:mb-8">
                            WE ARE A CLUB THAT LEARNS, SHARES AND EXPLORES EVERYTHING RELATED TO OUR UNIVERSE.
                        </h3>
                        <p className="text-[8px] sm:text-xs md:text-lg text-gray-300 font-lemon font-bold tracking-wide leading-relaxed uppercase">
                            DHRUVA IS A COLLEGE CLUB, WE WORK TOWARD INCREASING KNOWLEDGE ABOUT SPACE, COSMOS AND EVERYTHING WE ARE STILL LEARNING ABOUT. WE SHARE AND LEARN TOGETHER.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-center"
                >
                    <p className="text-md md:text-xl font-lemon font-bold text-white tracking-wide uppercase max-w-7xl mx-auto">
                        "ASTRONOMY COMPELS THE SOUL TO LOOK UPWARDS AND LEADS US FROM THIS WORLD TO ANOTHER"
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default KnowMore;
