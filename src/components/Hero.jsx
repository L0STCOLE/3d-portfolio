import Position from "./Position";
import { roles, summary } from "../data";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-primary bg-grid overflow-hidden">
      <span className="hash-span" id="hero">
        &nbsp;
      </span>
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-16 lg:px-24 py-32">
        <p className="font-mono text-secondary text-sm sm:text-base mb-4">
          {">"} whoami
        </p>

        <h1 className="font-bold text-white text-[40px] xs:text-[52px] sm:text-[68px] lg:text-[88px] leading-[1.05]">
          Colin Barber
        </h1>

        <div className="mt-4 max-w-md sm:max-w-lg">
          <Position roles={roles} />
        </div>

        <p className="mt-8 max-w-2xl text-secondary text-base sm:text-lg leading-relaxed">
          {summary}
        </p>

        <p className="mt-4 font-mono text-xs sm:text-sm text-secondary tracking-wide">
          Austin, TX
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#experience"
            className="border border-border px-6 py-3 font-mono text-sm uppercase tracking-wide text-white hover:border-quaternary hover:text-quaternary transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="border border-border px-6 py-3 font-mono text-sm uppercase tracking-wide text-white hover:border-quaternary hover:text-quaternary transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="border border-border px-6 py-3 font-mono text-sm uppercase tracking-wide text-white hover:border-quaternary hover:text-quaternary transition-colors"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-quaternary text-primary px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
