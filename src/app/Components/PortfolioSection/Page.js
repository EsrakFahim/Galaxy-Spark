"use client";

import React, { useState, useEffect } from "react";
import { PortfolioNav } from "./PortfolioNav";
import { motion } from "framer-motion";
import Image from "next/image";

const Page = () => {
      const [projects, setProjects] = useState([]);
      const [sortedProjects, setSortedProjects] = useState([]);
      const [activeTab, setActiveTab] = useState("Web Development");

      useEffect(() => {
            fetch("data.json")
                  .then((res) => res.json())
                  .then((data) => {
                        setProjects(data);
                  })
                  .catch((err) => {
                        console.log(err);
                  });
      }, []);

      useEffect(() => {
            if (Array.isArray(projects) && projects.length > 0) {
                  sortProjectsByCategory(projects);
            }
      }, [projects]);

      const sortProjectsByCategory = (projects) => {
            // Check if projects array is valid before proceeding
            if (!projects || projects.length === 0) return;

            // Group the projects by category
            const groupedProjects = projects.reduce((acc, project) => {
                  const { category } = project;
                  if (!acc[category]) {
                        acc[category] = [];
                  }
                  acc[category].push(project);
                  return acc;
            }, {});

            // Convert the grouped object into an array of categories
            const sortedArray = Object.entries(groupedProjects).map(
                  ([category, projects]) => ({
                        category,
                        projects,
                  })
            );

            // Set the grouped and sorted projects in the state
            setSortedProjects(sortedArray);
      };

      return (
            <div id="portfolio" className="my-[10rem] lg:my-[20rem] lg:pt-28">
                  <div>
                        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-end">
                              <div className="flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-start">
                                    <p className="bg-buttonSecondary border border-buttonPrimary text-buttonPrimary px-4 py-2 rounded-full">
                                          Portfolio
                                    </p>
                                    <h2
                                          style={{
                                                lineHeight: "1.3",
                                          }}
                                          className=" text-4xl lg:text-5xl font-extralight"
                                    >
                                          Delivering Excellence <br /> to Our
                                          Clients
                                    </h2>
                              </div>
                              <div className="w-full md:max-w-[50%] lg:max-w-[30%] text-neutral-500 text-center lg:text-start ">
                                    <p>
                                          Our portfolio showcases innovative
                                          solutions, exceeding expectations, and
                                          delivering impactful results for our
                                          clients.
                                    </p>
                              </div>
                        </div>
                  </div>
                  <div className="flex justify-center">
                        <PortfolioNav
                              items={sortedProjects}
                              setActiveTab={setActiveTab}
                              activeTab={activeTab}
                        />
                  </div>
                  <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        layout
                        duration={1}
                        className=""
                  >
                        {/* You can now render projects based on the activeTab */}
                        {sortedProjects
                              .filter(
                                    (project) => project.category === activeTab
                              )
                              .map((filteredProject, index) => (
                                    <div key={index}>
                                          <motion.div
                                                animate={{
                                                      opacity: 1,
                                                      scale: 1,
                                                }}
                                                initial={{
                                                      opacity: 0,
                                                      scale: 0.7,
                                                }}
                                                transition={{ duration: 1 }}
                                                layout
                                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 lg:px-5 gap-10"
                                          >
                                                {filteredProject.projects.map(
                                                      (project) => (
                                                            <motion.div
                                                                  key={
                                                                        project.id
                                                                  }
                                                                  initial={{
                                                                        opacity: 0,
                                                                        scale: 0.7,
                                                                  }}
                                                                  animate={{
                                                                        opacity: 1,
                                                                        scale: 1,
                                                                  }}
                                                                  layout
                                                                  transition={{
                                                                        duration: 0.5,
                                                                  }}
                                                                  whileHover={{
                                                                        scale: 0.95,
                                                                  }} // Use framer-motion's whileHover to scale
                                                                  className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer flex items-end p-10"
                                                                  style={{
                                                                        boxShadow:
                                                                              "0 0 10px 5px rgba( 39, 39, 39,  0.7)",
                                                                  }}
                                                            >
                                                                  <Image
                                                                        src={
                                                                              project.projectImage
                                                                        }
                                                                        alt={
                                                                              project.projectName
                                                                        }
                                                                        width={
                                                                              400
                                                                        }
                                                                        height={
                                                                              400
                                                                        }
                                                                        placeholder="blur"
                                                                        blurDataURL={`${project.projectImage}?w=10&blur=20`}
                                                                        className="w-full h-full absolute top-0 right-0 left-0 inset-0 object-cover object-center rounded-3xl -z-[1]"
                                                                  />
                                                                  <div>
                                                                        <h4 className="text-[1.25rem] font-extralight leading-[-1.2%]">
                                                                              {
                                                                                    project.projectName
                                                                              }
                                                                        </h4>
                                                                  </div>
                                                            </motion.div>
                                                      )
                                                )}
                                          </motion.div>
                                    </div>
                              ))}
                  </motion.div>
            </div>
      );
};

export default Page;
