"use client";
import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const HeroGallery = () => {
  const controls = useAnimation();

  const images = [
    {
      id: "02964f37-0d73-ef22-95c2-51a41a34902f",
      className: "hero-image-wrapper transform-01",
      rotate: -7.7,
      centerOffset: 150,
      src: "/hero-2.avif",
      width: 1200,
      height: 800,
    },
    {
      id: "2bbe9178-f480-b6e0-1288-5e5d75d80bc5",
      className: "hero-image-wrapper transform-02",
      rotate: 9.53,
      centerOffset: 0,
      src: "/hero.avif",
      width: 1200,
      height: 800,
    },
    {
      id: "0792926a-6ea5-0935-37dc-5324c0533e61",
      className: "hero-image-wrapper transform-03",
      rotate: -7.7,
      centerOffset: -150,
      src: "/hero-3.avif",
      width: 1200,
      height: 800,
    },
  ];

  useEffect(() => {
    const runAnimation = async () => {
      await controls.start("center");
      await controls.start("spread");
    };
    runAnimation();
  }, [controls]);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex-h hero-gallery my-16 sm:my-20 md:my-24 lg:my-30"
        style={{ opacity: 1 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            data-w-id={image.id}
            className={image.className}
            initial={{
              opacity: 0,
              y: 150,
              x: image.centerOffset,
              rotate: 0,
              scale: 0.9,
            }}
            animate={controls}
            variants={{
              center: {
                opacity: 1,
                y: 0,
                x: image.centerOffset,
                rotate: image.rotate,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: index * 0.1,
                },
              },
              spread: {
                x: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: index * 0.05,
                },
              },
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt=""
              className="image-cover"
              priority={true}
              quality={85}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroGallery;
