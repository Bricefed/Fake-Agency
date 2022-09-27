import React from "react";
import Link from "./Link";

const SocialNetwork = () => {
  return (
    <div className="social-network">
      <ul className="content">
        <Link name="facebook" />
        <Link name="twitter" />
        <Link name="instagram" />
      </ul>
    </div>
  );
};

export default SocialNetwork;
