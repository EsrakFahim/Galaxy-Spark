import React from "react";
import HeroSection from "@/app/Components/HeroSection/page";
import PortfolioSection from "@/app/Components/PortfolioSection/Page";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Sercvices";
import Pricing from "./Components/Pricing/Pricing";
import { TextParallaxContentExample } from "./Components/Test";
import CurveLine from "./AminUtils/CurveLine/CurveLine";

const page = () => {
      return (
            <div className="">
                  <HeroSection />
                  <AboutUs/>
                  <PortfolioSection />
                  <Services/>
                  <CurveLine/>
                  <Pricing/>
                  <TextParallaxContentExample/>
            </div>
      );
};

export default page;
