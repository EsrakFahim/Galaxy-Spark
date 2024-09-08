import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import { GreaterThan } from "@phosphor-icons/react";
import "./Navbar.css";

const Navbar = () => {
      return (
            <nav className="text-primary-dark relative w-full px-[10rem] py-[50px] mx-auto ">
                  <div className="fixed top-5 left-0 right-0 z-[1] flex justify-center items-center px-5 lg:px-10  ">
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
                                    <button className="border border-buttonPrimary px-8 py-4 rounded-full bg-buttonSecondary hover:bg-buttonPrimary duration-300 text-xs lg:text-base lg:font-medium flex items-center gap-3">
                                          Take a schedule
                                          {/* <GreaterThan size={32} /> */}
                                    </button>
                              </div>
                        </div>
                  </div>
                  <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-[2] hidden lg:flex justify-center">
                        <ul className="flex items-center gap-10">
                              {["Home", "About", "Services", "Contact"].map(
                                    (item, index) => (
                                          <li
                                                key={index}
                                                className=" nav-items-anim"
                                          >
                                                <Link
                                                      href={`/#${item.toLocaleLowerCase()}`}
                                                >
                                                      <div className="hover:text-neutral-500 duration-300 text-sm">
                                                            {" "}
                                                            {item}{" "}
                                                      </div>
                                                </Link>
                                          </li>
                                    )
                              )}
                        </ul>
                  </div>
            </nav>
      );
};

export default Navbar;
