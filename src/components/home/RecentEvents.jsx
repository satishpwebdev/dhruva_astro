import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Galaxy from '../../assets/images/galaxy.png'

const RecentEvents = () => {
    return (
        <section className="py-2 relative w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-lemon text-white mb-8 tracking-wider">
                    RECENT EVENTS
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-[16/9] md:aspect-[1.8/0.8] rounded-none overflow-hidden group"
                >
                    <img
                        src={Galaxy}
                        alt="Cosmic Nebula"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-end p-4 md:p-12">
                        <div className="bg-white/30 backdrop-blur-md p-4 md:p-12 w-[60%] md:w-1/2 lg:w-5/12 text-white shadow-2xl">
                            <span className="text-[10px] md:text-sm font-medium tracking-wide block mb-1 md:mb-2">18/06/2023</span>
                            <h3 className="text-sm md:text-4xl font-lemon mb-2 md:mb-6 leading-tight">
                                TALK ON COSMIC NEBULA
                            </h3>
                            <p className="text-gray-200 text-[8px] md:text-base mb-3 md:mb-8 leading-relaxed line-clamp-3 md:line-clamp-none">
                                Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.
                            </p>
                            <button className="bg-white text-black px-3 py-1 md:px-8 md:py-3 font-bold text-[8px] md:text-sm hover:bg-black hover:text-white transition-colors">
                                Read More
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RecentEvents;
