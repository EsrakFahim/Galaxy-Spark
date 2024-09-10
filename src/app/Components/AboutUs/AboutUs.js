"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { opacity, slideUp } from "./animation";
import Rounded from "@/app/AminUtils/Rounded/Rounded";
import "./AboutUs.scss";
import CurveLine from "@/app/AminUtils/CurveLine/CurveLine";

const AboutUs = () => {
      const phrase =
            "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
      const description = useRef(null);
      const isInView = useInView(description);
      return (
            <div id="about" ref={description} className="description">
                  <div className="body flex flex-col lg:flex-row  gap-12 ">
                        <p className="">
                              {phrase.split(" ").map((word, index) => {
                                    return (
                                          <span key={index} className="mask">
                                                <motion.span
                                                      variants={slideUp}
                                                      custom={index}
                                                      animate={
                                                            isInView
                                                                  ? "open"
                                                                  : "closed"
                                                      }
                                                      key={index}
                                                >
                                                      {word}
                                                </motion.span>
                                          </span>
                                    );
                              })}
                        </p>
                        <motion.p
                              variants={opacity}
                              animate={isInView ? "open" : "closed"}
                        >
                              The combination of my passion for design, code &
                              interaction positions me in a unique place in the
                              web design world.
                        </motion.p>
                        <div data-scroll data-scroll-speed={0.1}>
                              <Rounded className="button">
                                    <p>About Us</p>
                              </Rounded>
                        </div>
                  </div>
                  <div className="w-full py-10">
                        <CurveLine />
                  </div>
            </div>
      );
};

export default AboutUs;
