import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const links = [
  {
    label: "Email",
    value: "barber.colin33@gmail.com",
    href: "mailto:barber.colin33@gmail.com",
    icon: (
      <path
        d="M2 4h20v16H2V4zm0 0l10 8 10-8"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/colin-barber",
    href: "https://www.linkedin.com/in/colin-barber-92364119a/",
    icon: (
      <path
        d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "GitHub",
    value: "github.com/L0STCOLE",
    href: "https://github.com/L0STCOLE",
    icon: (
      <path
        d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.75c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .28.18.61.69.5A10.27 10.27 0 0022 12.25C22 6.58 17.52 2 12 2z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
    download: true,
    icon: (
      <path
        d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const Contact = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className="px-6 md:px-20 lg:px-40">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 60 },
          show: {
            opacity: 1,
            y: 0,
            transition: { type: "tween", duration: 0.8, delay: 0.1 },
          },
        }}
      >
        <h2 className={styles.sectionText}>Contact</h2>

        <p className="mt-6 max-w-xl text-secondary text-sm sm:text-base leading-relaxed">
          Open to opportunities in systems, security, and embedded engineering.
          Reach out — Austin, TX.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-4 border border-border bg-tertiary px-5 py-4 hover:border-quaternary transition-colors group"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-secondary group-hover:text-quaternary transition-colors shrink-0"
              >
                {link.icon}
              </svg>
              <div className="min-w-0">
                <p className="font-mono text-sm text-white">{link.label}</p>
                <p className="text-xs text-secondary truncate">{link.value}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
