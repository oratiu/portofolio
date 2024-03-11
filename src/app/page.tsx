import { Button, Image, Link, Spacer } from "@nextui-org/react";
import BioCard from "./components/BioCard";
import Skills from "./components/Skills";
import Title from "./components/atoms/Title";
import Socials from "./components/Socials";
import OpenSourceContributions from "./components/OpenSourceContributions";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between m-6">
      <Spacer y={12} />
      <div className="bg-secondary p-3 rounded-medium shadow-lg">
        <h1 className="text-md sm:text-md px-3 sm:animate-typing sm:overflow-hidden sm:whitespace-nowrap sm:border-r-4 sm:border-r-white sm:pr-5">
          Hello there, I am{" "}
          <span className="bold uppercase text-accent"> Octavian</span> a full
          stack software engineer based in {" "}
          <span className="bold uppercase">Cluj-Napoca 📍</span>
        </h1>
      </div>
      <Spacer y={6} />
      <Image width={150} src="me.png" alt="placeholder" />
      <Spacer y={6} />
      <Socials />
      <Spacer y={6} />

      <div className="rounded-medium max-w-[620px] text-justify flex flex-col gap-3">
        <h1 className="text-left text-xl underline text-accent">About me</h1>
        <p>
          I have been working as a software engineer since{" "}
          <span className="bold">2015</span> and I started being fully remote
          since <span className="bold">2019</span>.
        </p>
        <p>
          In this period I have been able to get my hands on multiple
          programming languages, frameworks and tools, thus being able to become
          proficient in multiple areas.
        </p>
        <p>
          My experience ranges from working on big enterprise solutions to small
          startup projects.
        </p>
        <p>
          I am now on a path of aquiring more knowledge and experience in the
          field of software engineering and I am looking for new opportunities
          to grow, I want to become a true artisan of my craft.
        </p>
      </div>
      <Spacer y={12} />
      <div className="max-w-[620px]">
        <BioCard />
      </div>
      <Spacer y={12} />
      <div className="flex flex-col justify-center align-middle text-center">
        <Title title="My Skills" />
        <Spacer y={6} />
        <Skills />
      </div>
      <Spacer y={12} />
      <OpenSourceContributions />
      <Spacer y={12} />
      <div className="rounded-medium gap-3 max-w-[620px] text-justify">
        <a href="./mycv.pdf">
          <Button color="primary" variant="bordered" href="/experience">
            Get my resume
          </Button>
        </a>
      </div>
      <Spacer y={6} />
    </main>
  );
}
