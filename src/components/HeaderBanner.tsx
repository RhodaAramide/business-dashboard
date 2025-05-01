import Image from "next/image";

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
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start  text-white px-2 md:px-6 relative z-10 h-full">
        <h1 className="text-[24px] md:text-[36px] lg:text-[42.47px] leading-[1.2] uppercase font-black text-center md:text-left py-4 md:pb-8 self-end md:self-end">
          Keep up with your business needs
        </h1>
        <div className="w-48 h-48 md:w-72 md:h-72">
          <Image
            src="/images/banner.png"
            alt="Hero"
            width={294}
            height={294}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};
