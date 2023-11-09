import { Spacer } from "@nextui-org/react";
import React from "react";
import TimelineItem from "../components/TimelineItem";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-between p-3">
      <Spacer y={12} />
      <div className="max-w-[800px]">
        <ol className="border-l border-primary pr-3 -mt-12">
          <TimelineItem
            date="09/2015 - 12/2016"
            title="Makronetz"
            paragraphs={[
              "Completed my internship here and got successfully hired.",
              "Proposed a relational database design for an Online Gradebook app as junior developer within the first months of working and later on I got to implement that design as a REST-ful API",
            ]}
          />
          <TimelineItem
            date="03/2017 - 09/2017"
            title="Starcoders"
            paragraphs={[
              "Worked on implementing Pixel Perfect designs",
              "My experience here allowed me to gain more knowledge about designs and working on products that are mobile and desktop friendly.",
            ]}
          />
          <TimelineItem
            date="09/2017 - 05/2022"
            title="Microfocus"
            paragraphs={[
              "Operations Orchestration - automates simple tasks, i.e auto saving, and complex tasks, i.e disaster recovery planning .",
              "Developed features requested by multiple valuable clients and helped with client retainment rate.",
              "Fixed defects that helped retain 2 contracts with clients that were looking to end their contract.",
              "Rewrote parts of the application and managed to improve performance in key areas by more than 100%.",
              "Got a podium finish at multiple internal innovation events and got to implement some of my own ideas that brought value to the product stack. Some ideas later being the focus of a number of PIs.",
              " Helped with internal processes such as the internship programme and I've also played a buddy role to multiple interns and junior developers that got to be successful.",
            ]}
          />
          <TimelineItem
            date=" 05/2022 - 11/2023"
            title="YLD"
            paragraphs={[
              "Research sharing platform for Parkinson's researchers",
              "Implemented multiple functionalities end-to-end focusing on high quality, well tested and readable code.",
              "Focused on end user experience by working closely with the design team.",
              "Refactored the most complex module on the frontend part of the app, increasing it's reusability and performance.",
            ]}
          />
          <TimelineItem
            date=" 11/2023 - Present"
            title="Available for hire"
            paragraphs={[
              "Working on a iOS app that helps people with their fitness goals.",
              "Learning NEXT.js and tailwindcss",
              "Getting deeper into React Native by building an awesome iOS app.",
            ]}
          />
        </ol>
        <Spacer y={12} />
      </div>
    </div>
  );
};

export default Experience;
