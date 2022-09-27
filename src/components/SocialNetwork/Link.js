import React from "react";

const Link = ({ name }) => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");

    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `
          translate(${e.offsetX - 20}px, ${e.offsetY - 13}px)
        `;
      });

      link.addEventListener("mouseleave", () => (link.style.transform = ""));
    });
  };

  return (
    <a
      href={`https://www.${name}.com`}
      target="_black"
      className="hover"
      onMouseOver={anim}
    >
      <li className={`fab fa-${name}`}></li>
    </a>
  );
};

export default Link;
