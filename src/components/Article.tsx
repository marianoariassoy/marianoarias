import { Rocket } from "../icons/icons";

const Article = ({ project }) => {
  return (
    <article>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-lg overflow-hidden mb-4 block"
      >
        <div className="absolute w-full h-full opacity-0 hover:opacity-100 hover:backdrop-blur-md z-10 cursor-pointer transition-all text-primary flex items-center justify-center text-xl pt-8 hover:p-0">
          <Rocket />
        </div>
        <img
          width="330"
          height="190"
          src={project.image}
          alt={project.title}
          className="w-full object-center object-cover aspect-video opacity-80"
        />
      </a>
      <div>
        <h4 className="text-xl mb-4 underline-main">{project.title}</h4>
        <p className="mb-2 opacity-60">{project.description}</p>

        <div className="text-primary font-bold text-sm">
          <div className="flex gap-x-2 mb-2">
            <span>Frontend</span>
            {project.frontend.map((item) => (
              <span key={item} className="underline">
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-x-2">
            {project.backend.length > 0 && <span>Backend</span>}
            {project.backend.map((item) => (
              <span key={item} className="underline">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
