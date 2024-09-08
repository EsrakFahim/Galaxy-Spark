import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const PortfolioNav = ({ items, setActiveTab }) => {
      return (
            <div className="py-20">
                  <SlideTabs items={items} setActiveTab={setActiveTab} />
            </div>
      );
};

const SlideTabs = ({ items, setActiveTab }) => {
      const [position, setPosition] = useState({
            left: 0,
            width: 0,
            opacity: 0,
      });

      return (
            <ul
                  onMouseLeave={() => {
                        setPosition((pv) => ({
                              ...pv,
                              opacity: 0,
                        }));
                  }}
                  className="relative mx-auto flex w-fit rounded-full border-2 border-white p-1"
            >
                  {items.map((item, index) => (
                        <Tab
                              key={index}
                              setPosition={setPosition}
                              onClick={() => setActiveTab(item.category)} // Ensure this is properly passed
                        >
                              {item.category}
                        </Tab>
                  ))}

                  <Cursor position={position} />
            </ul>
      );
};

const Tab = ({ children, setPosition, onClick }) => {
      const ref = useRef(null);

      return (
            <li
                  ref={ref}
                  onMouseEnter={() => {
                        if (!ref?.current) return;

                        const { width } = ref.current.getBoundingClientRect();

                        setPosition({
                              left: ref.current.offsetLeft,
                              width,
                              opacity: 1,
                        });
                  }}
                  onClick={onClick} // Adding the onClick event here
                  className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs  uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
            >
                  {children}
            </li>
      );
};

const Cursor = ({ position }) => {
      return (
            <motion.li
                  animate={{
                        ...position,
                  }}
                  className="absolute z-0 h-7 rounded-full bg-white md:h-12"
            />
      );
};
