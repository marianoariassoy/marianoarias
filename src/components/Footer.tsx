import { useEffect } from "react";
import { links } from "../data/data";
import scroll from "../utils/scroll";

const Footer = () => {
  useEffect(() => {
    scroll();
  }, []);

  return (
    <section className="lg:px-32" id="contact">
      <h3 className="text-primary text-3xl mb-16 font-secondary font-bold text-center">Contact.</h3>
      <div className="text-primary text-xl grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 ">
        {links.map((link) => (
          <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.title}
          </a>
        ))}
      </div>
      <div className="text-center pb-12 font-bold">
        <a href="#hero" className="scroll text-white">
          Back to top
        </a>
      </div>
      <div className="text-center pb-12 text-sm">© 2023 Mariano Arias. All rights reserved</div>
    </section>
  );
};

export default Footer;