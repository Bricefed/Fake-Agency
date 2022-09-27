import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork/SocialNetwork";
import Header from "../components/Home/Header";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    initial: { opacity: 0, y: -500 },
    animate: { opacity: 1, transition: { delay: 0.5, duration: 0.5 }, y: 0 },
    exit: { opacity: 0, transition: { duration: 0.5 }, x: -200 },
  };

  return (
    <div>
      <Mouse />
      <motion.div
        className="home"
        key="home"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Navigation />
        <SocialNetwork />
        <Header />
        <Buttons right={"/project-1"} />
      </motion.div>
    </div>
  );
};

export default Home;
