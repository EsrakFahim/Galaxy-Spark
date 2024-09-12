import React, { useRef } from "react";
import {
      motion,
      useMotionTemplate,
      useMotionValue,
      useSpring,
} from "framer-motion";
import { FaCheck } from "react-icons/fa";

const Card3D = ({ children }) => {
      return (
            <div className="w-full h-full flex justify-center items-center">
                  <TiltCard>{children}</TiltCard>
            </div>
      );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ children }) => {
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
                        {
                              // Content
                              children
                        }
                  </div>
            </motion.div>
      );
};

export default Card3D;
