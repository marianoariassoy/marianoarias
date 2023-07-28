import { projects } from "../data/data";
import Article from "./Article";

const Projects = () => {
  return (
    <section className="mb-32" id="projects">
      <h3 className="lg:px-32 text-primary text-3xl mb-16 lg:mb-28 font-secondary font-bold">
        Last Projects.
      </h3>

      <div className="grid lg:grid-cols-3 gap-x-16 gap-y-10 lg:gap-y-24">
        {projects.slice(0, 6).map((project) => (
          <Article key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center">
        <button className="font-bold mt-20 underline-2">Show more</button>
      </div>
    </section>
  );
};

export default Projects;
