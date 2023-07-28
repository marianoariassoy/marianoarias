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
        className="text-primary cursor-pointer text-xl transition-all hover:blur-sm"
        onClick={changeColor}
      >
        <Heart />
      </div>
      <div className="flex flex-col gap-y-4 items-end gap-x-16 lg:flex-row lg:items-center">
        <nav className="text-primary font-secondary flex gap-x-4 lg:gap-x-16">
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
        <div className="flex gap-x-4">
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
