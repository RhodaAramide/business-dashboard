import Image from "next/image";
import { motion } from "framer-motion";

export const HeaderBanner = () => {
  return (
    <div className="relative h-[245px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bannerBg.png')" }}
      ></div>
      {/* Overlay with Background Color */}
      <div className="absolute inset-0 bg-banner opacity-95 rounded-md"></div>
      {/* Content */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center md:items-start text-white px-2 md:px-6 relative z-10 h-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[22px] md:text-[36px] lg:text-[42.47px] leading-[1.2] uppercase font-black text-center md:text-left py-4 md:pb-8 self-end md:self-end"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Keep up with your business needs
        </motion.h1>
        <motion.div
          className="w-48 h-48 md:w-[295px] md:h-[295px] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Image
            src="/images/banner.png"
            alt="Hero"
            width={295}
            height={295}
            className="w-auto h-auto object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
