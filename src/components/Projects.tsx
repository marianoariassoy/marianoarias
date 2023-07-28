import { projects } from "../data/data";
import Article from "./Article";
const Projects = () => {
  return (
    <section className="mb-32" id="projects">
      <h3 className="lg:px-32 text-primary text-3xl mb-16 lg:mb-28 font-secondary font-bold">
        Last Projects.
      </h3>

      <div className="grid lg:grid-cols-3 gap-x-16 gap-y-10 lg:gap-y-24">
        {projects.map((project) => (
          <Article key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
