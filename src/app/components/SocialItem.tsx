import React from "react";

type SocialItemProps = {
  href: string;
  icon: React.ReactElement;
  label: string;
};

const SocialItem = ({ href, icon, label }: SocialItemProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center min-w-unit-18"
    >
      <div className="flex flex-col items-center text-center">
        {React.cloneElement(icon, {
          className: "hover:fill-accent w-12 h-12 fill-primary",
        })}
        <p>{label}</p>
      </div>
    </a>
  );
};

export default SocialItem;
