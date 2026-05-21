"use client";

import { motion } from "motion/react";
import type { Transition, Variants } from "motion/react";

interface AtSignProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  duration: 0.5,
  opacity: { delay: 0.15 },
};

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: 0.1 * custom,
    },
  }),
};

const AtSign = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: AtSignProps) => {
  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "2px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="4"
          variants={variants}
          custom={0}
        />
        <motion.path
          d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
          variants={variants}
          custom={1}
        />
      </svg>
    </div>
  );
};

export { AtSign };
