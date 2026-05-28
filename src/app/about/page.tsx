"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutPage = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect - adjust values for intensity
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section className="font-sub">
      <div className="mx-auto flex min-h-[82vh] flex-col items-center justify-center px-4 py-15 pt-30 text-center md:px-11 md:py-20">
        <div className="text-subheading mb-2.75 leading-tight font-semibold md:mt-10.5">
          ABOUT US
        </div>
        <h1 className="font-brand text-brand mb-3.75 text-[51px] leading-[1.2] md:w-[66%] md:text-[79px]">
          Welcome to TVS, <br /> Slow Down in Pali Hill.
        </h1>
        <p className="text-subheading text-2xl leading-tight md:w-[66%]">
          At TVS, we turn 100% organic ingredients into delicious, zero-guilt
          comfort food in a relaxed, pet-friendly space.
        </p>
      </div>

      {/* Parallax Image Container - Responsive height */}
      <div
        ref={containerRef}
        className="relative h-[50vh] overflow-hidden sm:h-[70vh] md:min-h-[95vh]"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 -top-[15%] h-[130%]"
        >
          <Image
            src="/hero-img1.avif"
            alt="Coffee shop"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Story Section */}
      <div className="mx-auto grid grid-cols-1 gap-8 px-[5%] py-12 md:grid-cols-[2.5fr_1fr] md:py-20 2xl:container">
        <div>
          <div className="text-subheading text-md mb-2.75 leading-tight font-semibold">
            OUR STORY
          </div>
          <h2 className="font-brand text-brand mb-3.75 text-[3.2rem] leading-[1.1]">
            Honest Ingredients. Zero Compromise.{" "}
          </h2>
          <p className="text-body text-[22px] leading-[1.2] lg:pr-17">
            We don’t just serve healthy food; we redefine it. At The Village
            Shop, we believe you shouldn't have to choose between a delicious
            meal and your well-being. Every dish on our menu is a celebration of
            pure, organic ingredients, meticulously prepared without
            preservatives or hidden sugars. Whether you are looking for
            gluten-free comfort food, vegan-friendly treats, or just a quiet,
            pet-friendly corner to escape the city’s hustle, welcome to your
            safe haven.
          </p>
        </div>

        {/* Cups image - Right aligned */}
        <div className="flex items-start justify-end">
          <div className="relative h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48">
            <Image src="/organic.jpg" alt="cups" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
