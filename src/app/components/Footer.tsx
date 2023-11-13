import React from "react";
import Title from "./atoms/Title";

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:gap-24 pl-12 pr-12 pt-6 pb-6 justify-center">
      <div className="flex flex-col text-center sm:text-left">
        <p className="text-xl underline">Contact</p>
        <a href="tel:+40771579188" className="text-foreground/80">
          +40 771 579 188 📱
        </a>
        <a href="mailto:oratiu@gmail.com" className="text-foreground/80">
          oratiu@gmail.com 📧
        </a>
      </div>
      <div className="flex flex-col justify-center text-center sm:text-left">
        <p className="underline">Socials</p>
        <a
          href="https://www.linkedin.com/in/octavian-ratiu-2912805b/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/80 text-sm"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/oratiu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/80 text-sm"
        >
          GitHub
        </a>
      </div>
      <div className="flex flex-col text-center sm:text-left">
        <p className="text-xl underline">Resources</p>
        <a
          href="./mycv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/80"
        >
          Get my resume 📄
        </a>
      </div>
    </div>
  );
};

export default Footer;
