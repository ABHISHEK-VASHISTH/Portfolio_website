import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        <span className="bg-gradient-to-r from-purple-900 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          P
        </span>
        rojects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 lg:pl-4"
            >
              <h6 className="mb-2 font-semibold flex justify-center lg:justify-start">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-500 rounded transition-transform transform hover:scale-110 hover:text-purple-500"
                >
                  {project.title}
                </a>
              </h6>
              <p className="mb-4 text-neutral-400 flex justify-center text-center lg:text-left lg:justify-start">
                {project.description}
              </p>
              <div className="flex justify-center lg:justify-start flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
