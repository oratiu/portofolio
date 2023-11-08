import { Image, Spacer } from "@nextui-org/react";
import BioCard from "./components/BioCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between m-6">
      <Spacer y={12} />
      <div className="bg-gray-300/20 p-3 rounded-medium shadow-lg animate-bounceShort">
        <h1 className="text-md sm:text-md px-3 sm:animate-typing sm:overflow-hidden sm:whitespace-nowrap sm:border-r-4 sm:border-r-white sm:pr-5">
          Hello there, I am{" "}
          <span className="bold underline uppercase text-primary">
            {" "}
            Octavian
          </span>{" "}
          a full stack software engineer based in 📍{" "}
          <span className="bold underline uppercase">Cluj-Napoca</span>
        </h1>
      </div>
      <Spacer y={6} />
      <Image width={200} src="placeholder.png" alt="placeholder" />
      <Spacer y={6} />
      <div className="rounded-medium max-w-[620px] text-justify flex flex-col gap-3">
        <p>
          I have been working as a software engineer since{" "}
          <span className="bold underline">2015</span> and I started being fully
          remote since 2019.
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
      <div className="rounded-medium gap-3 max-w-[620px] text-justify">
        Skills
      </div>
      <div className="rounded-medium gap-3 max-w-[620px] text-justify">
        Contact
      </div>
    </main>
  );
}
