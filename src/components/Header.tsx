import { useState } from "react";
import { nav, colors } from "../data/data";
import { Heart, Github, Linkedin } from "../icons/icons";

const Header = () => {
  const root = document.documentElement;
  const [color, setColor] = useState(1);

  const changeColor = () => {
    color === colors.length - 1 ? setColor(0) : setColor(color + 1);
    root.style.setProperty("--color-primary", colors[color]);
  };

  return (
    <div className="py-6 flex items-start justify-between lg:items-center lg:px-4">
      <div
        className="text-primary cursor-pointer text-xl transition-all lg:hover:blur-sm"
        onClick={changeColor}
      >
        <Heart />
      </div>
      <div className="flex gap-y-4 gap-x-14 items-center">
        <nav className="text-primary font-secondary flex gap-x-4 lg:gap-x-14">
          {nav.map((item) => (
            <a
              href={item.path}
              key={item.id}
              className="scroll uppercase underline-offset-4 decoration-2"
            >
              {item.title}
            </a>
          ))}
        </nav>
        <div className="gap-x-4 hidden lg:flex">
          <a
            href="https://github.com/marianoariassoy"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:blur-sm"
            aria-label="Github"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/marianoariassoy"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:blur-sm"
            aria-label="Linkedin"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
