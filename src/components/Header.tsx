import { nav } from "../data/data";

const Header = () => {
  return (
    <div className="m-auto max-w-6xl px-8 py-6 flex items-center justify-between bg-black/50 backdrop-blur-md">
      <div>
        <div className="bg-primary h-4 w-4 rounded-full cursor-pointer hover:bg-white"> </div>
      </div>
      <div>
        <nav className="text-primary font-secondary flex gap-x-16">
          {nav.map((item) => (
            <button key={item.id} className="uppercase underline-offset-4 hover:underline decoration-2">
              {item.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
