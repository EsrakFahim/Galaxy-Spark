import Link from "next/link";
import React from "react";

const page = () => {
      return (
            <div id="home">
                  <div className="flex flex-col items-center my-[10rem] lg:mx-10 gap-5">
                        <h1
                              style={{
                                    letterSpacing: "-1.5%",
                              }}
                              className="text-[9vw] lg:text-[4.5rem] text-center font-extralight leading-[1.1]"
                        >
                              Get a Full-Service <br /> Creative Team for One{" "}
                              <br />
                              Simple Monthly Rate
                        </h1>
                        <p className="text-sm mx-7 text-center my-5">
                              Next-gen web design, visuals, and content that
                              make your brand unforgettable.
                        </p>
                        <div className="flex items-center gap-12">
                              <Link href="/#pricing">
                                    <button className="border border-buttonPrimary px-6 py-3 rounded-full bg-buttonPrimary hover:bg-buttonSecondary duration-300 text-xs lg:text-base lg:font-medium flex items-center gap-3">
                                          See Plans & Pricing
                                    </button>
                              </Link>
                              <div className="border border-buttonPrimary px-6 py-3 rounded-full bg-buttonSecondary text-xs lg:text-base lg:font-medium flex items-center gap-3">
                                    <span className="w-2 h-2 bg-buttonPrimary rounded-full animate-glow" />
                                    4 Spot left
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default page;
