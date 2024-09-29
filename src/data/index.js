import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "CyberSecurity Researcher",
    company_name: "Cross The Border Threat Screening and Supply Chain Defence",
    date: "May 2023 - May 2023",
    details: [
      "Enhanced incident resolution effectiveness <span style='color: white;'>by applying sophisticated threat detection and response strategies</span> to tackle security incidents involving critical infrastructure for maritime vessels",
      "Conducted forensic analysis on <span style='color: white;'>OT/SCADA systems to uncover security breaches</span> leveraging network packet analysis and digital forensics tools to fortify system security. Leading to a data visualization solution..",
      "Managed and optimized firewalls and security tools in a simulated environment, closely aligning with industry standards and requirements such as.<span style='color: white;'>NIST cybersecurity framework</span>.",
      "Automated various security tasks using Python scripts, enhancing <span style='color: white;'>system efficiencies and response times</span>.",
    ],
  },

];

const portfolio = [
  {
    name: "ATproto Web Client",
    description:
      "Developed a microblogging web client emphasizing security with robust data server compliance, utilizing agile methodologies and Jira for project management.",
    image: oscs,
  },
  {
    name: "Zero-Trust Architecture Implementation",
    description:
      "Implemented a Zero-Trust architecture for a web-based application, enhancing endpoint and network security through innovative use of Cloudflare, Talescale, and OKTA for a scalable enterprise network.",
    image: devnotes,
  },
  {
    name: "IoT Robotic Security",
    description:
      "Network analysis, performance testing, and reverse engineering techniques to idenitify vulnerablities of the device. Leading to the a kill chain like Mirai Botnet.",
    image: algorithms,
  },
];

export { experiences, portfolio };

