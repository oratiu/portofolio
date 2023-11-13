import React from "react";

type titleTypes = {
  title: string;
};

const Title = ({ title }: titleTypes) => {
  return (
    <h2 className="text-xl underline text-left sm:text-center">{title}</h2>
  );
};

export default Title;
