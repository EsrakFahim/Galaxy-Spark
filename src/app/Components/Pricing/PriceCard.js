import Card3D from "@/app/AminUtils/Card3D/Card3D";
import React from "react";
import { FaCheck } from "react-icons/fa";

const PriceCard = ({price}) => {
      return (
            <Card3D>
                  <div className="price-card w-full bg-secondary shadow-lg px-6 py-4 rounded-2xl border-[1px] border-[#313131]">
                        <div className="text-start flex flex-col gap-4 ">
                              <h1 className="text-base font-extralight">
                                    {price.plan}
                              </h1>
                              <p className="flex items-end gap-1 text-5xl font-extralight text-buttonPrimary">
                                    {price.price}
                                    <span className="text-lg text-white font-extralight">
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
                                    {price.features.map((feature, index) => (
                                          <li
                                                key={index}
                                                className="text-lg text-gray-500 flex items-center gap-2"
                                          >
                                                <FaCheck className="text-green-500" />
                                                {feature}
                                          </li>
                                    ))}
                              </ul>
                        </div>
                        <div className="mt-4">
                              <div className="flex flex-col  justify-center gap-6">
                                    <button className="bg-buttonPrimary text-secondary hover:bg-buttonSecondary hover:text-buttonPrimary duration-300 border border-buttonPrimary px-4 py-3 rounded-full ">
                                          {price.actions.subscribe}
                                    </button>
                                    <button className="bg-buttonSecondary text-buttonPrimary hover:bg-neutral-700 hover:text-white duration-300 px-4 py-3 rounded-full">
                                          {price.actions.demo}
                                    </button>
                              </div>
                        </div>
                  </div>
            </Card3D>
      );
};

export default PriceCard;
