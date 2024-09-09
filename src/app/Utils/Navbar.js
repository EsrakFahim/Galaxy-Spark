import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import { AiOutlineRight } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
      return (
            <nav className="text-primary-dark relative w-full px-[10rem] py-[50px] mx-auto ">
                  <div className="fixed top-5 left-0 right-0 z-[2] flex justify-center items-center px-5 lg:px-10  ">
                        <div className="w-[1280px] flex justify-between items-center">
                              <Link href="/#home">
                                    <div>
                                          <Image
                                                src={logo}
                                                alt="logo"
                                                width={100}
                                                height={50}
                                                className="cursor-pointer w-20 h-10"
                                          />
                                    </div>
                              </Link>
                              <div>
                                    <button className="border border-buttonPrimary px-8 py-4 rounded-full bg-buttonSecondary hover:bg-buttonPrimary duration-300 text-xs lg:text-base lg:font-medium flex items-center gap-1 hover:gap-3">
                                          Take a schedule
                                          <AiOutlineRight size={20} />
                                    </button>
                              </div>
                        </div>
                  </div>
                  <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-[2] hidden lg:flex justify-center">
                        <ul className="flex items-center gap-10">
                              {[
                                    "Home",
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
                                          <li>
                                                <div className="text-sm">
                                                      {" "}
                                                      {item}{" "}
                                                </div>
                                          </li>
                                    </Link>
                              ))}
                        </ul>
                  </div>
            </nav>
      );
};

export default Navbar;
