import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const PortfolioNav = ({ items, setActiveTab, activeTab }) => {
      return (
            <div className="py-20">
                  <SlideTabs
                        items={items}
                        setActiveTab={setActiveTab}
                        activeTab={activeTab}
                  />
            </div>
      );
};

const SlideTabs = ({ items, setActiveTab, activeTab }) => {
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
                              onClick={() => setActiveTab(item.category)}
                              category={item.category}
                              activeTab={activeTab} // Pass activeTab here
                        >
                              {item.category}
                        </Tab>
                  ))}

                  <Cursor position={position} />
            </ul>
      );
};

const Tab = ({ children, setPosition, onClick, activeTab, category }) => {
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
                  onClick={onClick}
                  className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase mix-blend-difference md:px-5 md:py-3 md:text-base ${
                        activeTab === category
                              ? "text-buttonPrimary"
                              : "text-white"
                  } duration-300`}
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
