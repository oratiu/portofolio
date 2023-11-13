import { Button, Image, Link, Spacer } from "@nextui-org/react";
import BioCard from "./components/BioCard";
import Skills from "./components/Skills";
import GithubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import InstagramIcon from "./icons/InstagramIcon";
import Title from "./components/atoms/Title";
import LinkIcon from "./icons/LinkIcon";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between m-6">
      <Spacer y={12} />
      <div className="bg-secondary p-3 rounded-medium shadow-lg animate-bounceShort">
        <h1 className="text-md sm:text-md px-3 sm:animate-typing sm:overflow-hidden sm:whitespace-nowrap sm:border-r-4 sm:border-r-white sm:pr-5">
          Hello there, I am{" "}
          <span className="bold uppercase text-primary"> Octavian</span> a full
          stack software engineer based in 📍{" "}
          <span className="bold uppercase">Cluj-Napoca</span>
        </h1>
      </div>
      <Spacer y={6} />
      <Image width={150} src="me.png" alt="placeholder" />
      <Spacer y={6} />
      <div className="flex flex-col bg-secondary rounded-xl p-3 shadow-xl gap-3">
        <h1 className="text-left text-xl underline">Socials</h1>
        <div className="flex flex-row gap-6  ">
          <a
            href="https://github.com/oratiu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 items-center max-w-8"
          >
            <GithubIcon className="hover:fill-accent w-12 h-12 fill-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/octavian-ratiu-2912805b/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 items-center max-w-8"
          >
            <LinkedInIcon className="hover:fill-accent w-12 h-12 fill-primary" />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 items-center max-w-8"
          >
            <InstagramIcon className="hover:fill-accent w-12 h-12 fill-primary" />
          </a>
        </div>
      </div>
      <Spacer y={6} />

      <div className="rounded-medium max-w-[620px] text-justify flex flex-col gap-3">
        <h1 className="text-left text-xl underline">About me</h1>
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
      <div className="m-15 max-w-[620px]">
        <BioCard />
      </div>
      <Spacer y={12} />
      {/* timeline start */}
      <div className="flex flex-col justify-center align-middle text-center">
        <Title title="My Skills" />
        <Spacer y={6} />
        <Skills />
      </div>
      {/* timeline end */}
      <Spacer y={12} />
      <div className="rounded-medium gap-3 max-w-[400px] sm:max-w-[500px] text-justify flex flex-col justify-center ">
        <Title title="Open source contributions" />
        <div className="bg-secondary p-4 rounded-lg shadow-xl hover:bg-secondary/60">
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
            The monorepo for the backend, frontend, and infrastructure of the
            ASAP hub.
          </p>
          <div className="flex text-xs text-foreground/80">
            <div className="flex items-center">
              <span>TypeScript</span>
            </div>
          </div>
        </div>
        {/* <Spacer y={3} /> */}
        <div>
          My main open source contribution lies within the health and research
          sector, where I have been working on a platform that helps researchers
          and scientists collaborate on their projects.
        </div>
      </div>
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
