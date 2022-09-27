import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="home-main">
      <div className="main-content">
        <motion.h1
          drag
          dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
        >
          FAKE AGENCY
        </motion.h1>
      </div>
    </div>
  );
};

export default Header;
