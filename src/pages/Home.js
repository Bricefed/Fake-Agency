import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork/SocialNetwork";
import Header from "../components/Home/Header";
import Buttons from "../components/Buttons";

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigation />
        <SocialNetwork />
        <Header />
        <Buttons right={"/project-1"} />
      </div>
    </div>
  );
};

export default Home;
