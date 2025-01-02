import gsap from "gsap";
import React, { useEffect, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const jordanMenu = ["Find a Store", "Help", "Join Us", "Sign In"];
  const nikeMenu = ["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#jordan-logo",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      0
    );

    tl.fromTo(
      "#nike-logo",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      0
    );

    tl.fromTo(
      ".jordan-menu-item, .nike-menu-item",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
      },
      0
    );
    tl.fromTo(
      "#svg-search, #cart, #like",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
      },
      0
    );
  }, []);

  return (
    <div className="flex flex-col fixed top-0 left-0 right-0 z-50">
      {/* Navbar Air Jordan */}
      <div className="bg-gray-100 pl-8 pt-2 pb-2 pr-20">
        <div className="flex justify-between pr-4 pl-4">
          <div id="jordan-logo" className="w-5">
            <img src="/assets/jordan.svg" alt="Jordan Logo" />
          </div>
          <div className="hidden md:flex">
            <ul className="flex space-x-2">
              {jordanMenu.map((item, index) => (
                <li key={item} className="text-sm font-semibold tracking-wide">
                  <a
                    href="#"
                    className="jordan-menu-item text-sm font-semibold tracking-wide"
                  >
                    {item}
                  </a>
                  {index < jordanMenu.length - 1 && (
                    <span className="mx-2">|</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none absolute right-11 top-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-gray-100 md:hidden">
          <ul className="flex flex-col space-y-2 pl-8 pr-8 pb-2">
            {jordanMenu.map((item) => (
              <li key={item} className="text-sm font-semibold tracking-wide">
                <a href="#" className="jordan-menu-item">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Navbar Nike */}
      <div className="justify-between flex items-center bg-white px-10 py-3">
        {/* Logo */}
        <div id="nike-logo" className="w-14">
          <img src="/assets/nike.svg" alt="Nike Logo" />
        </div>

        {/* Menu */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {nikeMenu.map((item) => (
              <li
                key={item}
                className="nike-menu-item text-sm font-semibold tracking-wide hover:underline cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <span className="uppercase font-semibold text-2xl">nike</span>
        </div>

        {/* Search, Like, and Cart */}
        <div className="flex items-center gap-6">
          <div
            className="flex items-center gap-2 cursor-pointer"
            id="svg-search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="p-2 border rounded-full hidden md:block"
            />
          </div>
          <div className="hidden md:flex items-center gap-6 ">
            <img
              className="w-6 h-6 cursor-pointer"
              src="/assets/like.svg"
              alt="Like"
              id="like"
            />
            <img
              className="w-6 h-6 cursor-pointer"
              src="/assets/cart.svg"
              alt="Cart"
              id="cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
