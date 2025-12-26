import React from "react";
import { motion } from "framer-motion";
import { Youtube } from "lucide-react";
import Moon from "../../assets/images/Moon.png";
import PodMic from "../../assets/images/Podmicone.png";
import { BsYoutube } from "react-icons/bs";

const PodHero = () => {
  return (
    <section className="relative w-full pt-32  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between w- gap-1 md:gap-7 mb-12 select-none"
        >
          <span className="text-6xl md:text-8xl lg:text-[10.5rem] font-lemon text-white font-bold tracking-tighter">
            P
          </span>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 md:w-24 md:h-24 lg:w-36 lg:h-36 relative mx-[-1px] md:mx-[-15px]"
          >
            <img
              src={Moon}
              alt="O"
              className="w-full h-full object-cover rounded-full shadow-[0_0_100px_rgba(255,255,255,0.2)] grayscale"
            />
          </motion.div>

          <span className="text-6xl md:text-8xl lg:text-[10.5rem] font-lemon text-white font-bold tracking-2">
            DCASTS
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl aspect-[20/10] bg-[#111] rounded-3xl overflow-hidden shadow-2xl border border-white/5 group"
        >
          <img
            src={PodMic}
            alt="Podcast Microphone"
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
            <p className="text-white/90 text-xs md:text-sm font-medium mb-1 pl-1">Available on</p>
            <div className="flex items-center gap-2 text-white">
              {/* <Youtube className="w-8 h-8 md:w-10 md:h-10 fill-current" /> */}
              <BsYoutube size={35}></BsYoutube>

              <span className="text-2xl md:text-3xl font-bold tracking-tighter condense">YouTube</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PodHero;
