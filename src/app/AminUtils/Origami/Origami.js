"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
      SiUpwork,
      SiGithub,
      SiFreelancer,
      SiMeta,
      SiTwitch,
} from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export const DivOrigami = () => {
      return (
            <section className=" lg:flex h-full flex-col items-center justify-center gap-12  px-4  md:flex-row">
                  <LogoRolodex
                        items={[
                              <LogoItem
                                    key={1}
                                    className="bg-green-300 text-neutral-100"
                              >
                                    <Link
                                          className="w-full h-full "
                                          href="https://fiiverr.com"
                                          target="_blank"
                                    >
                                          <TbBrandFiverr />
                                    </Link>
                              </LogoItem>,
                              <LogoItem
                                    key={3}
                                    className="bg-neutral-100 text-blue-500"
                              >
                                    <Link 
                                    className="w-full h-full"
                                    href='https://freelancer.com'
                                    target="_blank"
                                    >
                                          <SiFreelancer />
                                    </Link>
                              </LogoItem>,
                              <LogoItem
                                    key={2}
                                    className="bg-green-500 text-neutral-100"
                              >
                                    <Link 
                                    className="w-full h-full"
                                    href='https://upwork.com'
                                    target="_blank"
                                    >
                                          <SiUpwork />
                                    </Link>
                              </LogoItem>,
                              <LogoItem key={4} className="bg-white text-black">
                                    <Link 
                                    className="w-full h-full"
                                    href='https://github.com'
                                    target="_blank"
                                    >
                                          <SiGithub />
                                    </Link>
                              </LogoItem>,
                              <LogoItem
                                    key={5}
                                    className="bg-blue-500 text-neutral-100"
                              >
                                    <Link 
                                    className="w-full h-full"
                                    href='https://linkedin.com'
                                    target="_blank"
                                    >
                                          <FaLinkedinIn />
                                    </Link>
                              </LogoItem>,
                        ]}
                  />
            </section>
      );
};

const DELAY_IN_MS = 7000;
const TRANSITION_DURATION_IN_SECS = 5;

const LogoRolodex = ({ items }) => {
      const intervalRef = useRef(null);
      const [index, setIndex] = useState(0);

      useEffect(() => {
            intervalRef.current = setInterval(() => {
                  setIndex((pv) => pv + 1);
            }, DELAY_IN_MS);

            return () => {
                  clearInterval(intervalRef.current || undefined);
            };
      }, []);

      return (
            <div
                  style={{
                        transform: "rotateY(-20deg)",
                        transformStyle: "preserve-3d",
                  }}
                  className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
            >
                  <AnimatePresence mode="sync">
                        <motion.div
                              style={{
                                    y: "-50%",
                                    x: "-50%",
                                    clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                                    zIndex: -index,
                                    backfaceVisibility: "hidden",
                              }}
                              key={index}
                              transition={{
                                    duration: TRANSITION_DURATION_IN_SECS,
                                    ease: "easeInOut",
                              }}
                              initial={{ rotateX: "0deg" }}
                              animate={{ rotateX: "0deg" }}
                              exit={{ rotateX: "-180deg" }}
                              className="absolute left-1/2 top-1/2"
                        >
                              {items[index % items.length]}
                        </motion.div>
                        <motion.div
                              style={{
                                    y: "-50%",
                                    x: "-50%",
                                    clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                                    zIndex: index,
                                    backfaceVisibility: "hidden",
                              }}
                              key={(index + 1) * 2}
                              initial={{ rotateX: "180deg" }}
                              animate={{ rotateX: "0deg" }}
                              exit={{ rotateX: "0deg" }}
                              transition={{
                                    duration: TRANSITION_DURATION_IN_SECS,
                                    ease: "easeInOut",
                              }}
                              className="absolute left-1/2 top-1/2"
                        >
                              {items[index % items.length]}
                        </motion.div>
                  </AnimatePresence>

                  <hr
                        style={{
                              transform: "translateZ(1px)",
                        }}
                        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
                  />
            </div>
      );
};

const LogoItem = ({ children, className }) => {
      return (
            <div
                  className={twMerge(
                        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
                        className
                  )}
            >
                  {children}
            </div>
      );
};
