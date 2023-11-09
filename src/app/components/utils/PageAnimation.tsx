import React from "react";

const PageAnimation = () => {
  return (
    <div
      className="fixed h-screen w-screen flex items-center justify-center z-50 opacity-100 animation-fadeOut"
      style={{ backgroundColor: "#343131", opacity: 1 }}
    >
      <h2 className="text-white text-3xl italic">
        Code is like <span className="underline text-primary">humor</span>
        . <br />
        When you have to explain it, it’s{" "}
        <span className="underline text-primary">bad</span>.
      </h2>
    </div>
  );
};

export default PageAnimation;
