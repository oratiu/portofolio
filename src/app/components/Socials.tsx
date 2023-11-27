import React from "react";
import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import InstagramIcon from "../icons/InstagramIcon";
import SocialItem from "./SocialItem";

const Socials = () => {
  return (
    <div className="flex flex-col bg-secondary rounded-xl p-3 shadow-xl gap-3">
      <h1 className="text-left text-xl underline">Socials</h1>
      <div className="flex flex-row gap-9">
        <SocialItem
          icon={<GithubIcon />}
          label="Github"
          href="https://github.com/oratiu"
        />
        <SocialItem
          icon={<LinkedInIcon />}
          label="LinkedIn"
          href="https://www.linkedin.com/in/octavian-ratiu-2912805b/?locale=en_US"
        />
        <SocialItem
          icon={<InstagramIcon />}
          label="Insta"
          href="https://google.com"
        />
      </div>
    </div>
  );
};

export default Socials;
