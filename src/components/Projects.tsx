import { projects } from "../data/data";
import { Rocket } from "../icons/icons";
const Projects = () => {
  return (
    <section className="mb-32" id="projects">
      <h3 className="lg:px-32 text-primary text-3xl mb-16 lg:mb-28 font-secondary font-bold">Featured Projects.</h3>

      <div className="grid lg:grid-cols-3 gap-x-16 gap-y-10">
        {projects.map((project) => (
          <article key={project.id}>
            <div className="relative rounded-lg overflow-hidden mb-4">
              <div className="absolute w-full h-full opacity-0 hover:opacity-100 hover:backdrop-blur-md z-10 cursor-pointer transition-all text-primary flex items-center justify-center text-xl pt-8 hover:p-0">
                <Rocket />
              </div>
              <img src={project.image} alt="Project" className="w-full object-center object-cover aspect-video opacity-75" />
            </div>

            <div>
              <h4 className="text-xl mb-4 underline-main">{project.title}</h4>
              <p className="mb-2 opacity-60">{project.description}</p>

              <div className="text-primary font-bold text-sm">
                <div className="flex gap-x-4 mb-2">
                  <span>Frontend</span>
                  {project.frontend.map((item) => (
                    <span key={item} className="underline">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex gap-x-4 text-primary font-bold">
                  <span>Backend</span>
                  {project.backend.map((item) => (
                    <span key={item} className="underline">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
