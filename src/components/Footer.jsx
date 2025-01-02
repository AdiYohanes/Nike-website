import React, { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Daftar Navigation Links
  const navLinks = ["About Us", "License", "Contribute", "Contact Us"];

  useEffect(() => {
    // Animasi untuk logo footer
    gsap.fromTo(
      ".footer-logo",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-logo",
          start: "top bottom",
          end: "top center",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animasi stagger untuk navigation links
    gsap.fromTo(
      ".nav-link, .copyright",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".footer-logo",
          start: "top bottom",
          end: "top center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <footer className="w-full bg-white p-8">
      {/* Container Utama */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        {/* Logo Footer */}
        <div className="footer-logo w-20 m-10">
          <img src="/assets/nike.svg" alt="Nike Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex flex-wrap items-center gap-y-2 gap-x-8">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-link">
              <a
                href="#"
                className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-xl"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Icon Close
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Icon Hamburger
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center gap-y-4 mt-4 md:hidden">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-link">
              <a
                href="#"
                className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Copyright */}
      <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4 copyright">
        Create By © 2025&nbsp;
        <a
          href="https://material-tailwind.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-slate-700"
        >
          Adi Yohanes
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
