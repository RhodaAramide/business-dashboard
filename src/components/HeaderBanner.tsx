import { px } from "framer-motion";
import Image from "next/image";

export const HeaderBanner = () => {
  return (
     <div className="relative h-64 ">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bannerBg.png')" }}>
      </div>
      {/* Overlay with Background Color */}
      <div className="absolute inset-0 bg-banner opacity-95 rounded-md"></div>
      {/* Content */}
      <div className="flex justify-between text-white px-4 relative z-10">
        <h1 className="text-[42.47px] leading-[43.99px] uppercase font-black self-end pb-12">
          Keep up with your business needs
        </h1>
        <Image src="/images/banner.png" alt="Hero" width={294} height={294} />
      </div>
    </div>
   
  );
};
