import React from "react";
import { motion } from "framer-motion";

export default function CalloutThree(props) {
  const svgCircle = {
    begin: { scale: 0 },
    end: {
      scale: props.showTabs ? 1 : 0,
      transition: { duration: 0.2, delay: props.showTabs ? 0 : 0.3 },
    },
  };

  const svgLine = {
    begin: { pathLength: 0 },
    end: { pathLength: props.showTabs ? 1 : 0 },
    transition: {
      duration: 0.3,
      delay: props.showTabs ? 0.3 : 0,
      ease: "easeInOut",
    },
  };

  return (
    <div>
      <motion.svg
        // width="197"
        // height="168"
        className="absolute w-24 h-24 mx-auto my-auto z-50 bottom-1/10 right-3/5 md:bottom-1/5 md:right-1/3"
        viewBox="0 0 113 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          variants={svgCircle}
          initial="begin"
          animate="end"
          cx="28"
          cy="27.5"
          r="10"
          fill="#1BD32E"
          // stroke="#1BD32E"
          // strokeWidth="4"
        />
        <motion.circle
          variants={svgCircle}
          initial="begin"
          animate="end"
          cx="28"
          cy="27.5"
          r="25.5"
          stroke="#1BD32E"
          strokeWidth="4"
        />
        <motion.circle
          variants={svgCircle}
          initial="begin"
          animate="end"
          cx="28"
          cy="27.5"
          r="17.6379"
          stroke="#1BD32E"
          strokeWidth="2.27586"
        />
        <motion.path
          variants={svgLine}
          initial="begin"
          animate="end"
          transition="transition"
          d="M50 42L93.5 72.5H113"
          stroke="#1BD32E"
          strokeWidth="5"
        />
      </motion.svg>
    </div>
  );
}
