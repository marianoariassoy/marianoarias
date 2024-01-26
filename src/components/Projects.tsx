import { projects } from "../data/data";
import Article from "./Article";
import { useState } from "react";

const Projects = () => {
  const [show, setShow] = useState(6);
  const amount = 3;

  const showMore = () => {
    setShow(show + amount);
  };

  return (
    <section className="mb-32" id="projects">
      <h3 className="lg:px-32 text-primary text-3xl mb-16 lg:mb-28 font-secondary font-bold">
        Projects.
      </h3>

      <div className="grid lg:grid-cols-3 gap-x-16 gap-y-10 lg:gap-y-24">
        {projects.slice(0, show).map((project) => (
          <Article key={project.id} project={project} />
        ))}
      </div>

      {projects.length > show && (
        <div className="text-center">
          <button className="font-bold mt-20 underline-2" onClick={showMore}>
            More Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
