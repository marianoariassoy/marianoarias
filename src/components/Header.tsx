import { nav } from "../data/data";
import { Heart } from "../icons/icons";

const Header = () => {
  return (
    <div className="py-6 flex items-center justify-between">
      <div className="text-primary cursor-pointer text-xl hover:text-white">
        <Heart />
      </div>
      <div className="hidden lg:block">
        <nav className="text-primary font-secondary flex gap-x-16">
          {nav.map((item) => (
            <a href={item.path} key={item.id} className="scroll uppercase underline-offset-4 hover:underline decoration-2">
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
