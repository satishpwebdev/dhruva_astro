import React from 'react';
import { motion } from 'framer-motion';
import SlideOne from '../../assets/images/SlideOne.png';
import SlideTwo from '../../assets/images/SlideTwo.png';
import SlideThree from '../../assets/images/SlideThree.png';
import SlideFour from '../../assets/images/SlideFour.png';
import SlideFive from '../../assets/images/SlideFive.png';

const images = [SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive];

const EventGalley = () => {
    return (
        <section className="relative w-full py-16 z-20">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-20">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-video md:aspect-[4/3] overflow-hidden group"
                        >
                            <img
                                src={img}
                                alt={`Space Gallery ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center max-w-5xl mx-auto px-4"
                >
                    <h2 className="text-white font-lemon font-bold text-md md:text-md lg:text-md tracking-wide leading-relaxed uppercase">
                        "Astronomy compels the soul to look upwards and leads us from this world to another"
                    </h2>
                </motion.div>

            </div>
        </section>
    );
};

export default EventGalley;
