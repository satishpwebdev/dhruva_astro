import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';

import SlideOne from '../../assets/images/SlideOne.png';
import SlideTwo from '../../assets/images/SlideTwo.png';
import SlideThree from '../../assets/images/SlideThree.png';
import SlideFour from '../../assets/images/SlideFour.png';
import SlideFive from '../../assets/images/SlideFive.png';

const galleryImages = [
    {
        id: 1,
        url: SlideOne,
        title: "Deep Space"
    },
    {
        id: 2,
        url: SlideTwo,
        title: "Nebula Observation"
    },
    {
        id: 3,
        url: SlideThree,
        title: "Telescope Night"
    },
    {
        id: 4,
        url: SlideFour,
        title: "Mars Rover"
    },
    {
        id: 5,
        url: SlideFive,
        title: "Moon Surface"
    },
];

const GallerySection = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % galleryImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    const getSlideStyles = (index) => {
        if (index === activeIndex) {
            return {
                zIndex: 20,
                opacity: 1,
                scale: 1,
                x: 0,
            };
        } else if (index === (activeIndex - 1 + galleryImages.length) % galleryImages.length) {
            return {
                zIndex: 10,
                opacity: 0.6,
                scale: 0.8,
                x: "-60%",
            };
        } else if (index === (activeIndex + 1) % galleryImages.length) {
            return {
                zIndex: 10,
                opacity: 0.6,
                scale: 0.8,
                x: "60%",
            };
        } else {
            return {
                zIndex: 0,
                opacity: 0,
                scale: 0.5,
                x: 0,
                display: 'none',
            };
        }
    };

    return (
        <section className=" mt-6 md:pt-24 relative w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-lg md:text-2xl font-lemon text-white md:mb-8 tracking-[0.2em] uppercase">
                    WHAT'S IT LIKE WHEN WE HAVE EVENTS
                </h2>

                <div className="relative h-[250px] sm:h-[300px] md:h-[340px] flex items-center justify-center perspective-1000">
                    <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
                        {galleryImages.map((image, index) => {
                            const len = galleryImages.length;
                            let offset = (index - activeIndex + len) % len;
                            if (offset > len / 2) offset -= len;

                            let styles = { zIndex: 0, opacity: 0, scale: 0.5, x: 0, display: 'none' };

                            if (offset === 0) {
                                styles = { zIndex: 30, opacity: 1, scale: 1, x: 0, rotateY: 0, display: 'block' };
                            } else if (offset === 1) {
                                styles = { zIndex: 20, opacity: 0.85, scale: 0.8, x: "40%", rotateY: -15, display: 'block' };
                            } else if (offset === 2 || offset === -3) {
                                styles = { zIndex: 10, opacity: 0.6, scale: 0.65, x: "70%", rotateY: -25, display: 'block' };
                            } else if (offset === -1) {
                                styles = { zIndex: 20, opacity: 0.85, scale: 0.8, x: "-40%", rotateY: 15, display: 'block' };
                            } else if (offset === -2 || offset === 3) {
                                styles = { zIndex: 10, opacity: 0.6, scale: 0.65, x: "-70%", rotateY: 25, display: 'block' };
                            }

                            return (
                                <motion.div
                                    key={image.id}
                                    initial={false}
                                    animate={styles}
                                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                    className="absolute w-[85%] sm:w-[70%] md:w-[50%] aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-black"
                                    onClick={() => {
                                        if (offset === 1) nextSlide();
                                        if (offset === -1) prevSlide();
                                        if (offset === 2 || offset === -3) { nextSlide(); setTimeout(nextSlide, 150); }
                                        if (offset === -2 || offset === 3) { prevSlide(); setTimeout(prevSlide, 150); }
                                    }}
                                >
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {offset !== 0 && <div className="absolute inset-0 bg-black/40 pointer-events-none transition-opacity duration-500" />}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 mt-4">
                    <div className="flex items-center gap-4 text-white/70">
                        <button onClick={prevSlide} className="hover:text-white transition-colors">
                            <ArrowLeft size={21} />
                        </button>

                        <div className="flex items-center gap-2">
                            {galleryImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-[#7B61FF] scale-125' : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>

                        <button onClick={nextSlide} className="hover:text-white transition-colors">
                            <ArrowRight size={21} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
