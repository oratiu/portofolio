import React from "react";

type timelineItemProps = {
  index: string;
  title: string;
  paragraphs: string[];
  left?: boolean;
};

const SkillTimelineItem = ({
  index,
  title,
  paragraphs,
  left = false,
}: timelineItemProps) => {
  return (
    <div
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
      <div className="bg-secondary rounded-2xl shadow-xl sm:w-5/12 px-6 py-6 sm:order-none">
        <h3 className="mb-3 font-bold text-primary text-xl underline text-left">
          {title}
        </h3>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-3 text-foreground text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillTimelineItem;
