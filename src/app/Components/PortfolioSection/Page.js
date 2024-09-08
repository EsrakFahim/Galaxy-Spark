"use client";

import React, { useState, useEffect } from "react";
import { PortfolioNav } from "./PortfolioNav";

const ProjectsComponent = () => {
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

      console.log(activeTab);

      return (
            <div id="portfolio" className="my-[20rem]">
                  <div>
                        <div className="flex justify-between items-end">
                              <div className="flex flex-col items-start gap-6">
                                    <p className="bg-buttonSecondary border border-buttonPrimary text-buttonPrimary px-4 py-2 rounded-full">
                                          Portfolio
                                    </p>
                                    <h2
                                          style={{
                                                lineHeight: "1.3",
                                          }}
                                          className="text-5xl font-extralight"
                                    >
                                          Delivering Excellence <br /> to Our
                                          Clients
                                    </h2>
                              </div>
                              <div className="max-w-[30%] text-neutral-500">
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
                        <PortfolioNav items={sortedProjects} setActiveTab={setActiveTab} />
                  </div>
                  <div>

                  </div>
            </div>
      );
};

export default ProjectsComponent;
