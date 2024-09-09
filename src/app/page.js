import React from "react";
import HeroSection from "@/app/Components/HeroSection/page";
import PortfolioSection from "@/app/Components/PortfolioSection/Page";
import AboutUs from "./Components/AboutUs/AboutUs";

const page = () => {
      return (
            <div className="">
                  <HeroSection />
                  <AboutUs/>
                  <PortfolioSection />
            </div>
      );
};

export default page;
