import React from "react";
import "./Services.scss";

const row1 = [
      "Web development",
      "Graphic design",
      "Video editing",
      "Ui/Ux design",
      "Lofi animation",
      "Digital marketing",
      "SEO optimization",
];

const row2 = [
      "Web development",
      "Graphic design",
      "Video editing",
      "Ui/Ux design",
      "Lofi animation",
      "Digital marketing",
      "SEO optimization",
];
function Services() {
      return (
            <div id="services" className="app-container">
                  <div className="wrapper">
                        <div className="text-center">
                              <span className="border border-buttonPrimary bg-buttonSecondary text-buttonPrimary px-3 py-2 rounded-full ">
                                    Our Services
                              </span>
                              <h2 className="text-2xl lg:text-4xl font-bold my-8">
                                    We provide a wide range of services to help{" "}
                                    <br />
                                    you grow your business.
                              </h2>
                        </div>
                        <div className="note text-center">
                              We provide a wide range of services to help you
                              grow your business.
                        </div>
                        <div className="marquee">
                              <div className="marquee-group">
                                    {row1.map((el, index) => (
                                          <div
                                                key={index}
                                                className="services-groupe "
                                          >
                                                <div className=" bg-secondary border border-neutral-600 px-3 py-2 rounded-full hover:bg-neutral-600 duration-300">
                                                      {el}
                                                </div>
                                          </div>
                                    ))}
                              </div>
                              <div className="marquee-group">
                                    {row1.map((el, index) => (
                                          <div
                                                key={index}
                                                className="services-groupe"
                                          >
                                                <div className=" bg-secondary border border-neutral-600 px-3 py-2 rounded-full hover:bg-neutral-600 duration-300">
                                                      {el}
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                        <div className="marquee">
                              <div className="marquee-group-reverse">
                                    {row2.map((el, index) => (
                                          <div
                                                key={index}
                                                className="services-groupe"
                                          >
                                                <div className="bg-secondary border border-neutral-600 px-3 py-2 rounded-full hover:bg-neutral-600 duration-300">
                                                      {el}
                                                </div>
                                          </div>
                                    ))}
                              </div>
                              <div className="marquee-group-reverse">
                                    {row2.map((el, index) => (
                                          <div
                                                key={index}
                                                className="services-groupe"
                                          >
                                                <div className="bg-secondary border border-neutral-600 px-3 py-2 rounded-full hover:bg-neutral-600 duration-300">
                                                      {el}
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Services;
