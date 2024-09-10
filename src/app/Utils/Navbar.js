"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { AiOutlineRight } from "react-icons/ai";
import "./Navbar.css";
import Magnetic from "../AminUtils/Magnetic/Magnetic";

const Navbar = () => {
      const [isScrolled, setIsScrolled] = useState(false);

      // Detect scrolling to trigger class change
      useEffect(() => {
            const handleScroll = () => {
                  if (window.scrollY > 50) {
                        setIsScrolled(true);
                  } else {
                        setIsScrolled(false);
                  }
            };

            window.addEventListener("scroll", handleScroll);
            return () => {
                  window.removeEventListener("scroll", handleScroll);
            };
      }, []);

      return (
            <nav className="text-primary-dark relative w-full px-[10rem] py-[50px] mx-auto ">
                  <div
                        className={`fixed top-0 left-0 right-0 z-[2] flex justify-center items-center py-5  lg:px-10 duration-300 ${
                              isScrolled
                                    ? "bg-customBg z-[50] rounded-custom shadow-custom backdrop-blur" // Custom background when scrolled
                                    : "bg-transparent z-[2]" // Initial background
                        }`}
                  >
                        <div className="w-screen flex justify-between items-center px-5 lg:px-40">
                              <Link href="/#home">
                                    <div>
                                          <Image
                                                src={logo} // Update with your logo path
                                                alt="logo"
                                                width={100}
                                                height={50}
                                                className="cursor-pointer w-20 h-10"
                                          />
                                    </div>
                              </Link>
                              <div>
                                    <button className="border border-buttonPrimary px-8 py-4 rounded-full bg-buttonSecondary hover:bg-buttonPrimary duration-300 text-xs lg:text-base lg:font-medium flex items-center gap-1 hover:gap-3">
                                          Book an appointment 
                                          <AiOutlineRight size={20} />
                                    </button>
                              </div>
                        </div>
                  </div>
                  <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-[2] hidden lg:flex justify-center">
                        <ul className="flex items-center gap-10">
                              {[
                                    "About",
                                    "Portfolio",
                                    "Services",
                                    "Pricing",
                                    "Contact",
                              ].map((item, index) => (
                                    <Link
                                          key={index}
                                          className="hover:text-neutral-500 duration-300 nav-items-anim"
                                          href={`/#${item.toLocaleLowerCase()}`}
                                    >
                                          <Magnetic>
                                                <li>
                                                      <div className="text-sm">
                                                            {" "}
                                                            {item}{" "}
                                                      </div>
                                                </li>
                                          </Magnetic>
                                    </Link>
                              ))}
                        </ul>
                  </div>
            </nav>
      );
};

export default Navbar;
