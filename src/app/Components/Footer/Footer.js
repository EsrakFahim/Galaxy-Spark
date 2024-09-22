import Image from "next/image";
import React from "react";
import footerBG from "../../../assets/hero-bg.png";

const Footer = () => {
      return (
            <div className="relative   min-h-[40vh]">
                  <div className="w-full object-cover  lg:object-contain  h-full lg:h-[43rem] mx-auto absolute top-0 lg:-bottom-5  left-0 right-0 -z-10 rotate-180">
                        <Image
                              src={footerBG}
                              alt="footerBG"
                              width={1920}
                              height={1280}
                              className="w-full h-full lg:object-contain "
                        />
                  </div>
            </div>
      );
};

export default Footer;
