import { motion } from "framer-motion";
import React from "react";

import { skills } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Skills = () => {
  return (
    <div className="px-6 md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Skills</h2>
      </motion.div>

      <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ category, items }) => (
          <div key={category} className="border border-border bg-tertiary p-6">
            <h3 className="font-mono text-quaternary text-sm uppercase tracking-wide">
              {category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs text-secondary border border-border px-2 py-1 hover:border-quaternary hover:text-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
