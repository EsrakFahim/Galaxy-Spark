import React, { useRef } from "react";
import {
      motion,
      useMotionTemplate,
      useMotionValue,
      useSpring,
} from "framer-motion";
import { FaCheck } from "react-icons/fa";

const PriceCard = ({ price }) => {
      return (
            <div className="w-full h-full flex justify-center items-center">
                  <TiltCard price={price} />
            </div>
      );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ price }) => {
      const ref = useRef(null);

      const x = useMotionValue(0);
      const y = useMotionValue(0);

      const xSpring = useSpring(x);
      const ySpring = useSpring(y);

      const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

      const handleMouseMove = (e) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const width = rect.width;
            const height = rect.height;

            // Calculate rotation values for the tilt effect
            const rX =
                  ((mouseY / height) * ROTATION_RANGE - HALF_ROTATION_RANGE) *
                  -1;
            const rY = (mouseX / width) * ROTATION_RANGE - HALF_ROTATION_RANGE;

            x.set(rX);
            y.set(rY);

            // Update CSS variables --x and --y based on mouse position
            ref.current.style.setProperty("--x", mouseX);
            ref.current.style.setProperty("--y", mouseY);
      };

      const handleMouseLeave = () => {
            x.set(0);
            y.set(0);

            // Reset the CSS variables
            if (ref.current) {
                  ref.current.style.setProperty("--x", 0);
                  ref.current.style.setProperty("--y", 0);
            }
      };

      return (
            <motion.div
                  ref={ref}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                        transformStyle: "preserve-3d",
                        transform,
                  }}
                  className="  relative w-full max-w-[500px] rounded-xl bg-gradient-to-br from-secondary-light to-secondary-light"
            >
                  <div
                        style={{
                              transform: "translateZ(75px)",
                              transformStyle: "preserve-3d",
                        }}
                        className="inset-4 w-full rounded-xl bg-secondary shadow-lg"
                  >
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
                  </div>
            </motion.div>
      );
};

export default PriceCard;
