import { DivOrigami } from "@/app/AminUtils/Origami/Origami";
import React from "react";
import { FaCheck } from "react-icons/fa";

const priceData = [
      {
            plan: "STANDARD",
            price: "$2,150",
            paymentCondition: "month",
            requests: "One request at a time",
            features: [
                  "Unlimited requests",
                  "~48 hour delivery",
                  "Unlimited brands",
                  "Weekly meetings",
                  "Pause or cancel anytime",
                  "Managed via Slack and Trello",
                  "All services except Webflow",
            ],
            actions: {
                  subscribe: "Subscribe",
                  demo: "Book a demo",
            },
      },
      {
            plan: "PRO",
            price: "$3,150",
            paymentCondition: "month",
            requests: "Double the requests",
            features: [
                  "Unlimited requests",
                  "~48 hour delivery",
                  "Unlimited brands",
                  "Weekly meetings",
                  "Pause or cancel anytime",
                  "Managed via Slack and Trello",
                  "All services and Webflow",
            ],
            actions: {
                  subscribe: "Subscribe",
                  demo: "Book a demo",
            },
      },
];

const Pricing = () => {
      return (
            <div id="pricing" className="py-32">
                  <div>
                        <div className="flex flex-col justify-center items-center gap-8">
                              <div className="border border-buttonPrimary bg-buttonSecondary text-buttonPrimary px-4 py-2 rounded-full">
                                    Pricing
                              </div>
                              <div>
                                    <h1
                                          style={{
                                                lineHeight: "1.3",
                                          }}
                                          className="text-2xl lg:text-4xl  text-center font-extralight"
                                    >
                                          Choose the relevant plan to build,
                                          <br />
                                          grow and fasten your team
                                    </h1>
                              </div>
                        </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.2rem] my-20 px-4 lg:px-0 ">
                        {priceData.map((price, index) => (
                              <div
                                    key={index}
                                    className="bg-secondary shadow-lg px-6 py-4 rounded-2xl border-[1px] border-[#313131]"
                              >
                                    <div className="text-start flex flex-col gap-4 ">
                                          <h1 className="text-base font-extralight">
                                                {price.plan}
                                          </h1>
                                          <p className="text-5xl font-extralight text-buttonPrimary">
                                                {price.price}
                                                <span className="text-lg text-white">
                                                      {" "}
                                                      / {price.paymentCondition}
                                                </span>
                                          </p>
                                          <p className="text-sm text-gray-500 underline">
                                                {price.requests}
                                          </p>
                                    </div>
                                    <div className="mt-4">
                                          <ul className="flex flex-col gap-6">
                                                {price.features.map(
                                                      (feature, index) => (
                                                            <li
                                                                  key={index}
                                                                  className="text-lg text-gray-500 flex items-center gap-2"
                                                            >
                                                                  <FaCheck className="text-green-500" />
                                                                  {feature}
                                                            </li>
                                                      )
                                                )}
                                          </ul>
                                    </div>
                                    <div className="mt-4">
                                          <div className="flex flex-col  justify-center gap-6">
                                                <button className="bg-buttonPrimary text-white hover:bg-buttonSecondary hover:text-buttonPrimary duration-300 border border-buttonPrimary px-4 py-3 rounded-full">
                                                      {price.actions.subscribe}
                                                </button>
                                                <button className="bg-buttonSecondary text-buttonPrimary hover:bg-neutral-700 hover:text-white duration-300 px-4 py-3 rounded-full">
                                                      {price.actions.demo}
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        ))}
                        <div className="flex flex-col md:flex-row lg:flex-col gap-10 md:col-span-2 lg:col-span-1">
                              <div className="min-h-[300px] lg:h-[60%] bg-secondary shadow-lg px-6 py-4 rounded-2xl border-[1px] border-[#313131]">
                                    <div>
                                          <h5 className="text-2xl font-extralight">
                                                Also accepting orders from:
                                          </h5>
                                    </div>
                                    <DivOrigami />
                              </div>
                              <div className="min-h-[150px] lg:h-[40%] bg-secondary shadow-lg px-6 py-5 lg:pt-8 rounded-2xl border-[1px] border-[#313131]">
                                    <div className="flex flex-col gap-4">
                                          <h2 className="text-4xl font-extralight">
                                                Refer & Earn
                                          </h2>
                                          <p>
                                                Refer your friends and earn
                                                <br />
                                                10% commission on their first
                                                order
                                          </p>
                                    </div>
                                    <button className="bg-buttonSecondary text-buttonPrimary hover:bg-neutral-700 hover:text-white duration-300 px-4 py-3 rounded-full w-full mt-10">
                                          Refer a friend
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Pricing;
