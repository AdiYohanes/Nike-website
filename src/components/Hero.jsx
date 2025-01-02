import React, { useEffect } from "react";
import "../index.css";
import gsap from "gsap";

const Hero = () => {
  const images = [
    {
      src: "/assets/hero1.jpg",
      alt: "hero1",
    },
    {
      src: "/assets/hero2.jpg",
      alt: "hero2",
    },
    {
      src: "/assets/hero3.jpg",
      alt: "hero3",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".hero-image",
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".nike-text",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className=" bg-gray-100 py-16 min-h-screen flex items-center justify-center mt-20">
      <div className="mx-auto max-w-screen-2xl px-4 w-full">
        <div className="relative rounded-lg shadow-xl bg-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {images.slice(0, 3).map((image, index) => (
              <a
                href="#"
                key={index}
                className="hero-image group relative flex h-[400px] sm:h-[600px] lg:h-[800px] xl:h-[1000px] items-end overflow-hidden rounded-lg bg-gray-100 shadow-xl w-full"
              >
                <img
                  src={image.src}
                  loading="lazy"
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center transition duration-300 group-hover:scale-150"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              </a>
            ))}
          </div>

          {/* Centered div with red border */}
          <div className="absolute flex items-center justify-center w-auto h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="text-white text-[150px] md:text-[300px] font-extrabold leading-tight tracking-wider transform-gpu text-shadow nike-text">
              NIKE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
