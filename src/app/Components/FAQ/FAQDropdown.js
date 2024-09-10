"use client";

import React, { useState } from "react";

const FAQDropdown = ({ title, answer }) => {
      const [accordionOpen, setAccordionOpen] = useState(false);

      return (
            <div className="py-4 px-8 rounded-lg my-4 border border-neutral-500 bg-secondary flex flex-col items-start gap-4">
                  <button
                        onClick={() => setAccordionOpen(!accordionOpen)}
                        className="w-full"
                  >
                        <div className="flex justify-between items-center w-full">
                              <span className="text-lg">{title}</span>
                              {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                              <svg
                                    className="fill-indigo-500 shrink-0 ml-8"
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                              >
                                    <rect
                                          y="7"
                                          width="16"
                                          height="2"
                                          rx="1"
                                          className={`transform origin-center transition duration-200 ease-out ${
                                                accordionOpen && "!rotate-180"
                                          }`}
                                    />
                                    <rect
                                          y="7"
                                          width="16"
                                          height="2"
                                          rx="1"
                                          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                                accordionOpen && "!rotate-180"
                                          }`}
                                    />
                              </svg>
                        </div>
                        <div
                              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-400 text-base  ${
                                    accordionOpen
                                          ? "grid-rows-[1fr] opacity-100"
                                          : "grid-rows-[0fr] opacity-0"
                              }`}
                        >
                              <div className="overflow-hidden ">{answer}</div>
                        </div>
                  </button>
            </div>
      );
};

export default FAQDropdown;
