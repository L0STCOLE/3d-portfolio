import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { projects } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, stack, image }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className="border border-border bg-tertiary"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-quaternary" />
        <span className="ml-2 font-mono text-xs text-secondary truncate">
          ~/projects/{name.toLowerCase().replace(/\s+/g, "-")}
        </span>
      </div>

      <div className="w-full">
        <img src={image} alt={name} className="w-full h-56 object-cover opacity-90" />
      </div>

      <div className="p-6">
        <h3 className="text-white font-bold text-xl sm:text-2xl">{name}</h3>
        <p className="mt-3 text-secondary text-sm sm:text-base leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-quaternary border border-quaternary/40 px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="px-6 md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Projects</h2>
      </motion.div>

      <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
