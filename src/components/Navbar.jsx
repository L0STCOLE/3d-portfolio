import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("span.hash-span[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`w-full flex items-center fixed z-40 px-6 py-5 sm:px-12 transition-colors duration-300 ${
        scrolled ? "bg-primary border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center mx-auto max-w-6xl">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
        >
          <p className="font-mono text-white text-[16px] sm:text-[18px] cursor-pointer">
            <span className="text-quaternary">$</span> colin@barber
          </p>
        </Link>

        <ul className="list-none hidden sm:flex items-center gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.id)}
                className={`font-mono text-sm uppercase tracking-wide pb-1 border-b transition-colors ${
                  active === nav.id
                    ? "text-quaternary border-quaternary"
                    : "text-secondary border-transparent hover:text-white"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-16 right-0 mx-4 my-2 min-w-[180px] z-30 bg-tertiary border border-border`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.id);
                    }}
                    className={`font-mono text-sm uppercase tracking-wide ${
                      active === nav.id ? "text-quaternary" : "text-secondary"
                    }`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
