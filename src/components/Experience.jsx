import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, onClick, isActive, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border-l-2 pl-5 py-4 transition-colors ${
        isActive || isMobile ? "border-quaternary" : "border-border"
      }`}
    >
      <h3
        className={`font-mono text-base sm:text-lg font-bold transition-colors ${
          isActive || isMobile ? "text-quaternary" : "text-secondary"
        }`}
      >
        {experience.title}
      </h3>
      <p
        className={`mt-1 text-sm sm:text-base transition-colors ${
          isActive || isMobile ? "text-white" : "text-secondary"
        }`}
      >
        {experience.company_name}
      </p>
      <p className="mt-1 font-mono text-xs text-secondary">{experience.date}</p>
    </div>
  );
};

const ExperienceDetails = ({ experience }) => {
  return (
    <ul className="border border-border bg-tertiary p-6 lg:p-8 space-y-4 list-none">
      {experience.details.map((detail, index) => (
        <li
          key={`experience-detail-${index}`}
          className="text-secondary text-sm sm:text-base leading-relaxed pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-quaternary before:font-mono"
        >
          {detail}
        </li>
      ))}
    </ul>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-6 md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Experience</h2>
      </motion.div>

      <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-[minmax(0,340px)_1fr] gap-8 items-start">
        <div className="flex flex-col gap-1">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => setSelectedJob(experience)}
              isActive={selectedJob === experience}
              isMobile={isMobile}
            />
          ))}
        </div>

        <ExperienceDetails experience={selectedJob} />
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
