import React from "react";

type timelineItemProps = {
  date: string;
  title: string;
  paragraphs: string[];
};

const TimelineItem = ({ date, title, paragraphs }: timelineItemProps) => {
  return (
    <li className="mt-12 mb-12">
      <div className="flex-start flex items-center pt-3">
        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full"></div>
        <p className="text-sm text-foreground text-opacity-50">{date}</p>
      </div>
      <div className="mb-6 ml-4 mt-2">
        <h4 className="mb-1.5 text-xl font-semibold">{title}</h4>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="mb-3 text-foreground text-justify text-opacity-80"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </li>
  );
};

export default TimelineItem;
