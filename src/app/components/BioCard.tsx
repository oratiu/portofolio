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
    <Card isBlurred className="max-w-[400px] sm:max-w-[800px]">
      <CardHeader className="flex gap-3">
        <h2 className="text-xl underline">Bio</h2>
      </CardHeader>
      <Divider />
      <CardBody>
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
      <CardFooter className="flex flex-col gap-2 overflow-auto">
        <div className="flex flex-col text-center">
          <p className="flex flex-row gap-2 text-center self-center">I ❤️</p>
          <Spacer x={12} />
          <span className="flex flex-row gap-2 text-center items-center justify-center align-middle">
            <p>Tech 💻</p>
            <p>Coffee ☕️</p>
            <p>Reading 📚</p>
            <p>Fitness 🏋️</p>
            <p>Health 🫀</p>
            <p>Nutrition 🥦</p>
            <p>Movies 🎬</p>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BioCard;
