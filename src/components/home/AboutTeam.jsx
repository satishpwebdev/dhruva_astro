import React from 'react';
import { motion } from 'framer-motion';
import Team1 from '../../assets/teams/team1.png';
import Team2 from '../../assets/teams/team2.png';
import Team3 from '../../assets/teams/team3.png';
import Team4 from '../../assets/teams/team4.png';
import Team5 from '../../assets/teams/team5.png';
import Team6 from '../../assets/teams/team6.png';

const teamMembers = Array(18).fill(null).map((_, index) => ({
    id: index,
    name: 'NAME',
    post: 'POST',
    image: [Team1, Team2, Team3, Team4, Team5, Team6][index % 6]
}));

const AboutTeam = () => {
    return (
        <section className="relative w-full py-24 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-white text-center tracking-widest uppercase mb-16 font-lemon"
                >
                    TEAM LEADERS OF OUR CLUB
                </motion.h2>

                <div className="grid grid-cols-3 gap-x-8  md:grid-cols-3 lg:grid-cols-6 md:mx-20  gap-y-6 mb-20">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="flex flex-col items-center  group"
                        >
                            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-3xl overflow-hidden bg-white/5 transition-transform duration-300 group-hover:-translate-y-2">
                                <img
                                    src={member.image}
                                    alt="Team Member"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-white font-bold tracking-widest text-sm md:text-base mb-1">{member.name}</h3>
                                <p className="text-gray-400 text-xs md:text-sm font-bold tracking-widest">{member.post}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="w-full h-px bg-white/20 mb-16"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm md:text-lg font-bold text-white tracking-widest uppercase opacity-80 font-lemon">
                        "ASTRONOMY COMPELS THE SOUL TO LOOK UPWARDS AND LEADS US FROM THIS WORLD TO ANOTHER"
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutTeam;