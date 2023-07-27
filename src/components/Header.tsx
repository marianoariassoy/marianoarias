import { useState } from "react";
import { nav, colors } from "../data/data";
import { Heart } from "../icons/icons";

const Header = () => {
  const root = document.documentElement;
  const [color, setColor] = useState(1);

  const changeColor = () => {
    color === colors.length - 1 ? setColor(0) : setColor(color + 1);
    root.style.setProperty("--color-primary", colors[color]);
  };

  return (
    <div className="py-6 flex items-center justify-between lg:px-4">
      <div className="text-primary cursor-pointer text-xl" onClick={changeColor}>
        <Heart />
      </div>
      <div className="">
        <nav className="text-primary font-secondary flex gap-x-4 lg:gap-x-16">
          {nav.map((item) => (
            <a href={item.path} key={item.id} className="scroll uppercase underline-offset-4 decoration-2 decoration-wavy ">
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
