import React from 'react';
import { motion } from 'framer-motion';
import Galaxy from '../../assets/images/galaxy.png';
import Astronaut from '../../assets/images/Astronaut.png';
import SlideOne from '../../assets/images/SlideOne.png';
import SlideThree from '../../assets/images/SlideThree.png';

const episodes = [
    {
        id: '01',
        title: 'SPACEBUZZ EP. 1',
        tags: '#SPACE #ASTRONOMY',
        image: Galaxy
    },
    {
        id: '02',
        title: 'SPACEBUZZ EP. 2',
        tags: '#COSMOS #ASTRONOMY',
        image: SlideOne
    },
    {
        id: '03',
        title: 'SPACEBUZZ EP. 3',
        tags: '#ASTRONAUT #ASTRONOMY',
        image: Astronaut
    },
    {
        id: '04',
        title: 'SPACEBUZZ EP. 4',
        tags: '#SPACE #ASTRONOMY',
        image: SlideThree
    }
];

const PodSectionTwo = () => {
    return (
        <section className="relative w-full py-6 px-4 md:px-4">
            <div className="max-w-9xl mx-auto md:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-24">
                    {episodes.map((episode, index) => (
                        <div key={episode.id} className="relative group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex items-center gap-6 md:gap-10 pb-12 border-b border-b-2 ${(index == 0 || index == 1) ? "border-white" : "border-white/20"}`}
                            >
                                <span className="text-4xl md:text-5xl font-bold text-white tracking-widest leading-none">
                                    {episode.id}.
                                </span>

                                <div className="flex items-center gap-6">
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 bg-white/5">
                                        <img
                                            src={episode.image}
                                            alt={episode.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide uppercase">
                                            {episode.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-300 font-medium tracking-wider uppercase">
                                            {episode.tags}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-20 lg:mt-24 text-center px-2"
            >
                <p className="text-sm md:text-sm lg:text-lg font-lemon font-bold text-white tracking-widest uppercase leading-relaxed max-w-9xl mx-auto">
                    "Astronomy compels the soul to look upwards and leads us from this world to another"
                </p>
            </motion.div>
        </section>
    );
};

export default PodSectionTwo;
