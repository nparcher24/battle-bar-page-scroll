import React from "react";
import { motion } from "framer-motion";

export default function CalloutOne(props) {
  var angle = 0.0;
  var endCoordinate = { x: 0.0, y: 0.0, h: 0.0, signX: "+", signY: "+" };

  const svgCircle = {
    begin: { scale: 0 },
    end: {
      scale: props.showTabs ? 1 : 0,
      transition: { duration: 0.3, delay: props.showTabs ? 0 : 0.6 },
    },
  };

  // const svgLine = {
  //   begin: { pathLength: 0 },
  //   end: { pathLength: props.showTabs ? 1 : 0 },
  //   transition: {
  //     duration: 0.3,
  //     delay: 0.4, //props.showTabs ? 0.3 : 0,
  //     ease: "easeInOut",
  //   },
  // };
  // const animatedText = {
  //   begin: { opacity: 0 },
  //   end: { opacity: props.showTabs ? 1 : 0 },
  //   transition: {
  //     duration: 0.3,
  //     delay: props.showTabs ? 0.6 : 0,
  //     ease: "easeInOut",
  //   },
  // };

  if (props.corner === "upLeft") {
    angle = (Math.atan(props.height / props.width) * 180) / Math.PI + 270.0;
    endCoordinate = { x: 20.5, y: 3, h: 0.5, signX: "+", signY: "-" };
  } else if (props.corner === "upRight") {
    angle = 90.0 - (Math.atan(props.height / props.width) * 180) / Math.PI;
    endCoordinate = {
      x: props.width - 20.5,
      y: 3,
      h: props.width - 0.5,
      signX: "-",
      signY: "-",
    };
  } else if (props.corner === "downLeft") {
    angle = 270 - (Math.atan(props.height / props.width) * 180) / Math.PI;
    endCoordinate = {
      x: 20.5,
      y: props.height - 3,
      h: 0.5,
      signX: "+",
      signY: "+",
    };
  } else {
    angle = (Math.atan(props.height / props.width) * 180) / Math.PI + 90.0;
    endCoordinate = {
      x: props.width - 20.5,
      y: props.height - 3,
      h: props.width - 0.5,
      signX: "-",
      signY: "+",
    };
  }
  // console.log({
  //   left: `calc(${props.left} + ${
  //     props.radius * Math.sin((angle * Math.PI) / 180.0)
  //   }px)`,
  //   top: `calc(${props.top} - ${
  //     props.radius * Math.cos((angle * Math.PI) / 180.0)
  //   }px)`,
  //   transform: "translate(-100%, -50%)",
  // });

  return (
    <div>
      <motion.h1
        // variants={animatedText}
        initial={{ opacity: 0 }}
        animate={{ opacity: props.showTabs ? 1 : 0 }}
        transition={{
          duration: 0.3,
          delay: props.showTabs ? 0.4 : 0,
          ease: "easeInOut",
        }}
        className="bg-black p-2 text-md text-white stroke-current stroke-1 absolute z-50 break-normal  border-2 rounded-lg"
        style={{
          borderColor: props.foregroundColor,
          color: props.foregroundColor,
          width: props.textWidth,
          // right: `calc(${props.right} ${endCoordinate.signX} ${
          //   props.width / 2
          // }px)`,
          right:
            endCoordinate.signX === "+"
              ? props.right + props.width / 2
              : props.right - props.width / 2,
          top: `calc(${props.top} ${endCoordinate.signY} ${
            props.height / 2
          }px)`,
          transform: `translate(${
            endCoordinate.signX === "-" ? "100%" : "0"
          }, -50%)`,
        }}
      >
        {props.text}
      </motion.h1>
      <motion.svg
        style={{
          width: props.width,
          height: props.height,
          right: props.right,
          top: props.top,
          transform: "translate(50%, -50%)",
        }}
        className="absolute z-50"
        viewBox={`0 0 ${props.width} ${props.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          variants={svgCircle}
          initial="begin"
          animate="end"
          cx={props.width / 2}
          cy={props.height / 2}
          r={props.radius / 3}
          fill={props.foregroundColor}
          // stroke={props.foregroundColor}
          // strokeWidth="4"
        />

        <motion.circle
          variants={svgCircle}
          initial="begin"
          animate="end"
          cx={props.width / 2}
          cy={props.height / 2}
          r={props.radius / 2}
          stroke={props.foregroundColor}
          strokeWidth={props.strokeWidth / 2}
        />
        <motion.circle
          variants={svgCircle}
          initial="begin"
          animate="end"
          cx={props.width / 2}
          cy={props.height / 2}
          r={props.radius}
          stroke={props.foregroundColor}
          strokeWidth={props.strokeWidth}
        />
        <motion.path
          // variants={svgLine}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: props.showTabs ? 1 : 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: props.showTabs ? 0.3 : 0.3,
            ease: "easeInOut",
          }}
          //   d="M150 122.5L20.5 3H0.5"
          d={`M${
            props.width / 2 + props.radius * Math.sin((angle * Math.PI) / 180.0)
          } ${
            props.height / 2 -
            props.radius * Math.cos((angle * Math.PI) / 180.0)
          } L${endCoordinate.x} ${endCoordinate.y}H${endCoordinate.h}`}
          stroke={props.foregroundColor}
          strokeWidth={props.strokeWidth}
        />
      </motion.svg>
    </div>
  );
}
