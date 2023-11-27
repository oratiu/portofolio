"use client";
import { Variants, motion } from "framer-motion";
import React from "react";

type timelineItemProps = {
  index: string;
  title: string;
  paragraphs: string[];
  left?: boolean;
};

const cardVariants: Variants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
    },
  },
};

const SkillTimelineItem = ({
  index,
  title,
  paragraphs,
  left = false,
}: timelineItemProps) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className={`mb-8 flex sm:justify-between items-center animate-appearance-in ${
        left ? "sm:flex-row-reverse " : "sm:flex-row"
      } `}
    >
      <div className="w-0 sm:w-5/12 sm:order-none sm:block hidden"></div>
      <div className="z-20 flex items-center bg-accent shadow-xl w-8 h-8 rounded-full text-left sm:order-none border-solid border-2 border-primary mr-3 sm:mr-0 ">
        <h1 className="mx-auto font-semibold text-lg text-secondary text-center w-4">
          {index}
        </h1>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={cardVariants}
        className="bg-secondary rounded-2xl shadow-xl sm:w-5/12 px-6 py-6 sm:order-none"
      >
        <h3 className="mb-3 font-bold text-primary text-xl underline text-left">
          {title}
        </h3>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-3 text-foreground text-justify">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillTimelineItem;
