import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation/Navigation";
import Logo from "../components/Navigation/Logo";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <Buttons left={"/"} right={"/project-2"} />
      </div>
    </main>
  );
};

export default Project1;
