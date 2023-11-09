import React from "react";
import SkillTimelineItem from "./SkillTimelineItem";

const Skills = () => {
  return (
    <div className="m-15 max-w-[1220px]">
      <div className="relative wrap overflow-hidden h-full">
        <div className="border-2-2 absolute border-primary h-full border sm:left-1/2"></div>
        <SkillTimelineItem
          index="1"
          title="Frontend"
          paragraphs={[
            "I have been mainly using React for the past 6 years.",
            "I am also familiar with other modern frameworks such as Vue, Angular and Next",
            "Styling wise I have been using CSS, SASS, LESS and TailwindCSS for plain CSS and I have also used CSS-in-JS solutions such as Styled Components and Emotion",
          ]}
        />
        <SkillTimelineItem
          index="2"
          title="Backend"
          paragraphs={[
            "My journey actually started on the backend, using Laravel and Symforny for PHP and Express for Node",
            "I also got to use Java for a bit but my experience is limited",
            "In recent times I've been using Node",
          ]}
          left
        />
        <SkillTimelineItem
          index="3"
          title="Testing"
          paragraphs={[
            "Unit testing is one of those things that just click, in my opionion, and I have been using Jest for the past 3 years",
            "Once a dev realizes how important unit testing is, it becomes a must have in their arsenal",
          ]}
        />
        <SkillTimelineItem
          index="4"
          title="Mobile"
          paragraphs={[
            "When it comes to mobile development I am familiar with React Native, and I am actually building a really cool project with it",
            "If we are talking about styling and mobile friendliness of web apps, a good practice is doing it mobile first and I have been doing that since my first responsive project",
          ]}
          left
        />
      </div>
    </div>
  );
};

export default Skills;
