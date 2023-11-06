import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Spacer y={12} />
      <div className="bg-teal-600 p-3 rounded-medium shadow-lg">
        <h1 className="text-xl px-3">
          Hello there, I am <span className="text-yellow-200"> Octavian</span> a
          full stack software engineer based in{" "}
          <span className="text-yellow-200">Cluj-Napoca</span>
        </h1>
      </div>
      <Spacer y={12} />
      <div className="rounded-medium max-w-[800px]">
        <p>
          I have been working as a developer since{" "}
          <span className="bold underline">2015</span>
        </p>
        <p>
          In this period I have been able to get my hands on multiple
          programming languages, frameworks and tools.
        </p>
        <p>
          I have also worked on big enterprise solutions and on small startup
          projects.
        </p>
        <p></p>
      </div>
      <Spacer y={12} />
      <Card className="overflow px-3 sm:max-w-[800px]">
        <CardHeader className="flex gap-3">
          <h2 className="text-xl underline">Bio</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col">
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
        <CardFooter className="flex flex-row gap-2">
          <p>My passions: </p>
          <p>Coffee ☕️</p>/<p>Reading 📚</p>/<p>Fitness 🏋️</p>/<p>Health 🫀</p>
          /<p>Nutrition 🥦</p>/<p>Tech 💻</p>
        </CardFooter>
      </Card>
      <div className="p-5 rounded-medium gap-3 ">
        <p>
          I have been working as a developer since{" "}
          <span className="text-yellow-300 bg">2015</span>
        </p>
        <p>
          In this period I have been able to get my hands on multiple
          programming languages, frameworks and tools.
        </p>
        <p>
          I have also worked on big enterprise solutions and on small startup
          projects.
        </p>
        <p></p>
      </div>
      <div className="p-5 rounded-medium gap-3 ">
        <p>
          I have been working as a developer since{" "}
          <span className="text-yellow-300 bg">2015</span>
        </p>
        <p>
          In this period I have been able to get my hands on multiple
          programming languages, frameworks and tools.
        </p>
        <p>
          I have also worked on big enterprise solutions and on small startup
          projects.
        </p>
        <p></p>
      </div>
      <div className="p-5 rounded-medium gap-3 ">
        <p>
          I have been working as a developer since{" "}
          <span className="text-yellow-300 bg">2015</span>
        </p>
        <p>
          In this period I have been able to get my hands on multiple
          programming languages, frameworks and tools.
        </p>
        <p>
          I have also worked on big enterprise solutions and on small startup
          projects.
        </p>
        <p></p>
      </div>
      <div className="p-5 rounded-medium gap-3 ">
        <p>
          I have been working as a developer since{" "}
          <span className="text-yellow-300 bg">2015</span>
        </p>
        <p>
          In this period I have been able to get my hands on multiple
          programming languages, frameworks and tools.
        </p>
        <p>
          I have also worked on big enterprise solutions and on small startup
          projects.
        </p>
        <p></p>
      </div>
      <div className="p-5 rounded-medium gap-3 ">
        <p>
          I have been working as a developer since{" "}
          <span className="text-yellow-300 bg">2015</span>
        </p>
        <p>
          In this period I have been able to get my hands on multiple
          programming languages, frameworks and tools.
        </p>
        <p>
          I have also worked on big enterprise solutions and on small startup
          projects.
        </p>
        <p></p>
      </div>
    </main>
  );
}
