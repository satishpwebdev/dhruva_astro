import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full relative z-20 py-8 md:py-12 border-t border-white/5 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

                    <div className="flex items-center gap-3 order-3 md:order-1 hover:text-white/80 transition-colors cursor-pointer group">
                        <MessageCircle size={20} className="text-white group-hover:scale-110 transition-transform" />
                        <span className="text-white font-medium tracking-wide">Let's chat</span>
                    </div>

                    <nav className="order-1 md:order-2 mb-12">
                        <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white">
                            {['Home', 'Experts', 'About us', 'Podcasts', 'Contacts'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors text-sm md:text-base font-medium tracking-wide"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right: Email */}
                    <div className="flex items-center gap-3 order-2 md:order-3 hover:text-white/80 transition-colors cursor-pointer group">
                        <Mail size={20} className="text-white group-hover:scale-110 transition-transform" />
                        <span className="text-white font-medium tracking-wide">info@logoipsum.com</span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
