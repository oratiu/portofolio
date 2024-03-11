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
          Greetings! I&apos;m{" "}
          <span className="bold uppercase text-accent"> Octavian</span> a
          full-stack software engineer based in the vibrant city of{" "}
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
          As a software engineer with a career spanning since{" "}
          <span className="bold">2015</span>, I have had the privilege of
          working remotely since <span className="bold">2019</span>. This
          experience has allowed me to collaborate with diverse teams and
          contribute to projects on a global scale.{" "}
        </p>
        <p>
          Throughout my professional journey, I have acquired extensive
          knowledge and hands-on experience in various programming languages,
          frameworks, and tools. This versatility has enabled me to become
          proficient in multiple areas of software development, making me a
          well-rounded and adaptable engineer.
        </p>
        <p>
          My expertise encompasses working on large-scale enterprise solutions
          as well as fast-paced startup projects. I thrive in challenging
          environments that push me to innovate, problem-solve, and deliver
          high-quality software solutions.
        </p>
        <p>
          Currently, I am dedicated to expanding my skill set and staying at the
          forefront of the ever-evolving software engineering landscape. I am
          actively seeking new opportunities that will allow me to grow both
          professionally and personally, as I strive to become a true artisan in
          my field. If you are looking for a committed, versatile, and
          results-driven software engineer, I would be thrilled to discuss how
          my skills and experience can contribute to your organization&apos;s
          success.
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
          <Button
            color="primary"
            className="hover:border-accent hover:text-accent"
            variant="bordered"
            href="/experience"
          >
            Get my resume
          </Button>
        </a>
      </div>
      <Spacer y={6} />
    </main>
  );
}
