import { algorithms, devnotes, maritime_testbed, ng911_nena, oscs } from "../assets";

export const navLinks = [
  { id: "hero", title: "Home" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

export const roles = ["Software Engineer", "Security Researcher"];

export const summary =
  "Systems-focused software engineer with hands-on experience in embedded and robotics platforms, maritime OT/SCADA security research, and cybersecurity risk assessment. Security-minded by training, building software for adversarial conditions from the start.";

const experiences = [
  {
    title: "Computer Science Tutor",
    company_name: "ClubZ Tutoring",
    date: "Jul 2024 - Present",
    details: [
      "Deliver personalized CS and mathematics instruction to 100+ students, designing individualized learning plans from baseline assessments to accelerate progress.",
      "Translate complex topics — data structures, algorithms, and programming fundamentals — into clear, practical exercises tailored to each learner.",
    ],
  },
  {
    title: "Project Manager & Lead Developer",
    company_name: "ATproto Decentralized Web Client",
    date: "Aug 2023 - May 2024",
    details: [
      "Architected and delivered a full-stack microblogging platform built on PostgreSQL, Java, and custom decentralized identity (DID) protocols, implementing end-to-end security and self-sovereign identity management.",
      "Designed and owned the DID generation protocol, enabling users to authenticate without reliance on centralized identity providers — a core security differentiator of the platform.",
      "Applied test-driven development (TDD) to maintain feature alignment with user stories and enforced code quality through structured peer reviews.",
      "Led sprint planning and delivery using Jira and Agile methodologies across a multi-person team, balancing technical execution with project milestone accountability.",
    ],
  },
  {
    title: "Cybersecurity Researcher",
    company_name: "Cross The Border Threat Screening & Supply Chain Defense (DHS Center of Excellence)",
    date: "May 2023 - Jul 2023",
    details: [
      "Built test bed environments replicating NG911 emergency communications infrastructure and maritime vessel OT/SCADA systems, reconstructing them at sufficient fidelity that findings transferred to real-world deployments.",
      "Executed offensive security assessments against those environments to identify exploitable vulnerabilities and map attack paths, surfacing exposed Modbus/DNP3 endpoints.",
      "Contributed findings to published research on incident response improvements for next-generation 911 systems, translating test bed results into recommendations for emergency communications operators.",
      "Developed Python tooling to automate assessment and response workflows, reducing assessment cycle time by 40% and establishing repeatable procedures adopted by the research team.",
      "Built data visualization dashboards surfacing attack patterns across test runs, and documented segmentation and firewall hardening against the NIST Cybersecurity Framework.",
    ],
  },
  {
    title: "Security Researcher",
    company_name: "IStarLabs",
    date: "Aug 2021 - Sep 2022",
    details: [
      "Operated as part of a purple team, designing Zero-Trust network architecture while simultaneously stress-testing it through offensive security techniques to validate real-world resilience.",
      "Integrated Cloudflare, Tailscale, and OKTA to implement identity-aware access controls and enforce least-privilege across an enterprise network.",
      "Conducted network analysis, performance testing, and reverse engineering on IoT robotics platforms, identifying exploitable vulnerabilities and implementing targeted hardening measures.",
      "Developed a proof-of-concept kill chain modeled on the Mirai Botnet to map IoT attack surfaces and validate the effectiveness of implemented security enhancements.",
      "Maintained detailed technical documentation of architecture decisions, threat findings, and remediation steps for internal knowledge transfer.",
    ],
  },
];

const projects = [
  {
    name: "ATproto Web Client",
    description:
      "Full-stack microblogging platform with a custom decentralized identity (DID) protocol for self-sovereign, provider-free authentication. Built with TDD and delivered via Agile sprints across a multi-person team.",
    stack: ["PostgreSQL", "Java", "DID", "Agile / Jira"],
    image: oscs,
  },
  {
    name: "Zero-Trust Enterprise Network",
    description:
      "Purple-team engagement: designed a Zero-Trust architecture using Cloudflare, Tailscale, and OKTA for identity-aware, least-privilege access, then stress-tested it with offensive security techniques to validate real-world resilience.",
    stack: ["Cloudflare", "Tailscale", "OKTA", "Purple Team"],
    image: devnotes,
  },
  {
    name: "IoT Research",
    description:
      "Network analysis, performance testing, and reverse engineering on IoT robotics platforms to identify exploitable vulnerabilities, followed by a proof-of-concept kill chain modeled on the Mirai Botnet to map IoT attack surfaces and validate hardening measures.",
    stack: ["IoT Security", "Reverse Engineering", "Mirai / Botnet"],
    image: algorithms,
  },
  {
    name: "NG911 Cybersecurity Threat Modeling",
    description:
      "DHS Center of Excellence research (CBTS Summer Research Institute): threat-modeled Next Generation 911 infrastructure against the NENA i3 architecture, mapping DoS, malware, MITM, and spoofing attacks to ESInet, BCF, ESRP, and ECRF components, and scoping ECASTT — an automated security testing tool for NG911 test beds.",
    stack: ["NENA i3", "Threat Modeling", "NIST CSF"],
    image: ng911_nena,
  },
  {
    name: "Zero-Trust Maritime OT/SCADA Testbed",
    description:
      "DHS Center of Excellence research (CBTS Summer Research Institute): built a Zero-Trust maritime OT/ICS/SCADA testbed — PLCs, HMIs, and a digital twin — instrumented with OPNsense, Snort IDS/IPS, and Grafana/Loki, and toured USCG Houston-Galveston vessels to ground the risk assessment in real ship systems.",
    stack: ["OT/SCADA", "Zero-Trust", "OPNsense", "Modbus"],
    image: maritime_testbed,
  },
];

const skills = [
  { category: "Languages", items: ["Python", "C", "C++", "C#", "Java", "Go", "Rust", "Solidity", "Ladder Logic"] },
  { category: "Security", items: ["Pentesting", "Purple Team", "Zero-Trust", "IoT Security", "Digital Forensics", "Endpoint Security", "Vulnerability Management", "Reverse Engineering", "NIST Framework"] },
  { category: "Development", items: ["Full-Stack", "Decentralized Apps", "REST APIs", "Data Pipelines", "Git", "Jira", "Confluence"] },
  { category: "Infrastructure", items: ["Docker", "Kubernetes"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "NoSQL", "SQL"] },
];

export { experiences, projects, skills };
