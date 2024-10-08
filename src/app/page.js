import React from "react";
import HeroSection from "@/app/Components/HeroSection/page";
import PortfolioSection from "@/app/Components/PortfolioSection/Page";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Sercvices";
import Pricing from "./Components/Pricing/Pricing";
import { TextParallaxContentExample } from "./Components/Test";
import CurveLine from "./AminUtils/CurveLine/CurveLine";
import { motion } from "framer-motion";
import FAQ from "./Components/FAQ/FAQ";
import Feedback from "./Components/Feedback/Feedback";

const page = () => {
      return (
            <div className="w-full">
                  <HeroSection />
                  <AboutUs />
                  <PortfolioSection />
                  <Services />
                  <div className="hidden lg:block">
                        <CurveLine />
                  </div>
                  <Pricing />
                  <TextParallaxContentExample />
                  <FAQ />
                  <Feedback />
            </div>
      );
};

export default page;
