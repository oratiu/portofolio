"use client";
import { Link, Spacer } from "@nextui-org/react";
import React from "react";
import GithubIcon from "../icons/GithubIcon";
import LinkIcon from "../icons/LinkIcon";
import Title from "./atoms/Title";
import { Variants, motion } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    transform: "rotate(180deg)",
  },
  onscreen: {
    transform: "rotate(0deg)",
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
    },
  },
};
const OpenSourceContributions = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
      className="rounded-medium gap-3 max-w-[400px] sm:max-w-[500px] text-justify flex flex-col justify-center "
    >
      <Title title="Open source contributions" />
      <div className="bg-secondary p-4 rounded-lg shadow-xl hover:bg-secondary/60 border-1 border-primary">
        <div className="flex flex-row justify-between">
          <div className="text-primary hover:text-accent flex flex-row gap-3">
            <GithubIcon className="w-8 h-8 fill-accent" />
            <Link
              href="https://github.com/yldio/asap-hub"
              target="_blank"
              isExternal
              showAnchorIcon
              className="text-sm text-primary hover:text-accent font-semibold"
              anchorIcon={
                <LinkIcon className="w-5 h-5 fill-primary stroke-primary ml-1" />
              }
            >
              yldio/asap-hub
            </Link>
          </div>
          <p className="text-xs text-foreground/40 rounded align-bottom justify-self-end">
            Public
          </p>
        </div>
        <Spacer y={3} />
        <p className="text-sm text-gray-300 mb-3">
          The monorepo for the backend, frontend, and infrastructure of the ASAP
          hub.
        </p>
        <div className="flex text-xs text-foreground/80">
          <div className="flex items-center">
            <span>TypeScript</span>
          </div>
        </div>
      </div>
      <Spacer y={3} />
      <div>
        My main open source contribution lies within the health and research
        sector, where I have been working on a platform that helps researchers
        and scientists collaborate on their projects.
      </div>
    </motion.div>
  );
};

export default OpenSourceContributions;
