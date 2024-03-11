import {
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Card,
  Spacer,
} from "@nextui-org/react";
import React from "react";

const BioCard = () => {
  return (
    <Card
      isBlurred
      className="max-w-sm sm:max-w-[800px] bg-secondary shadow-xl border-1 border-primary"
      isHoverable
    >
      <CardHeader className="flex gap-3 bg-secondary p-3">
        <h2 className="text-xl underline text-primary">Bio</h2>
      </CardHeader>
      <Divider />
      <CardBody className="bg-secondary p-3">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-10">
            <p>1994</p>
            <p>Born in Cluj-Napoca, Romania </p>
          </div>
          <div className="flex flex-row gap-10">
            <p>2016</p>
            <p>
              Graduated as a Bachelor of Computer Science from Babes-Bolyai
              University
            </p>
          </div>
          <div className="flex flex-row gap-10">
            <p>2018</p>
            <p>
              Graduated with a Masters degree in Distributed Systems from
              Babes-Bolyai University
            </p>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex flex-col gap-2 overflow-auto bg-secondary">
        <p className="flex flex-row gap-2 text-center self-center">I ❤️</p>
        <div className="flex flex-row gap-2 text-center max-w-xs sm:max-w-max">
          <p>Tech 💻</p>
          <p>Coffee ☕️</p>
          <p>Reading 📚</p>
          <p>Fitness 🏋️</p>
          <p>Health 🫀</p>
          <p>Nutrition 🥦</p>
          <p>Movies 🎬</p>
          <p>Dogs 🦮</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BioCard;
