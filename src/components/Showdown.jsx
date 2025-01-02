import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Showdown = () => {
  useEffect(() => {
    gsap.fromTo(
      "#background-image",
      { scale: 1.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#background-image",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".showdown-text",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".showdown-text",
          start: "top 80%",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".button-shop",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".button-shop",
          start: "top 90%",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      <img
        id="background-image"
        src="/assets/jordan-red.jpg"
        alt="Jordan Red"
        className="absolute inset-0 w-full h-full object-cover transform scale-110 transition-transform duration-700 ease-in-out hover:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-3 h-3 bg-red-600 rounded-full animate-pulse delay-1000 opacity-75"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-red-500 rounded-full animate-pulse delay-1500 opacity-80"></div>
        <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-red-700 rounded-full animate-pulse delay-500 opacity-90"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-600 rounded-full animate-pulse delay-2000 opacity-70"></div>
        <div className="absolute bottom-1/4 left-3/4 w-5 h-5 bg-yellow-400 rounded-full animate-pulse delay-2500 opacity-85"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white drop-shadow-lg showdown-text">
          Air Jordan Collection
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white showdown-text">
          Embrace the Future of Footwear
        </p>
        <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition duration-300 shadow-md button-shop">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Showdown;
