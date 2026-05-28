"use client";
import { useEffect, useRef, useState } from "react";

import { menuData } from "@/data/menuData";
import MenuCard from "@/components/MenuCard";

const Page = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");
  const [isTabsVisible, setIsTabsVisible] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const tabsRef = useRef<HTMLDivElement | null>(null);

  const categories = ["Coffee", "Teas", "Pastries"];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Adjusts when section is considered "active"
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Check if tabs should be visible (after hero section)
  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current) {
        const tabsPosition = tabsRef.current.getBoundingClientRect().top;
        setIsTabsVisible(tabsPosition <= 60); // Adjust based on header height
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (category: string) => {
    const element = sectionRefs.current[category.toLowerCase()];
    if (element) {
      const offset = 120; // Account for sticky header + tabs
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="font-sub px-4 md:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl lg:px-10 2xl:container">
        {/* Header */}
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 pt-30 text-center">
          <h1 className="font-brand text-brand mb-3.75 text-[3.2rem] leading-none">
            Our Menu
          </h1>
          <p className="text-subheading text-2xl">
            Gluten-free, vegan-friendly, and completely free of hidden
            nasties.{" "}
          </p>
        </div>

        {/* Sticky Category Tabs */}
        <div
          ref={tabsRef}
          className={`sticky top-0 z-40 bg-transparent bg-[linear-gradient(#fff_85%,#fff0)] pt-15 pb-7.5 transition-shadow duration-300`}
        >
          <div className="flex items-center justify-center gap-8 text-lg leading-tight md:gap-10">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="group relative"
              >
                <span
                  className={`text-subheading hover:text-brand cursor-pointer transition-colors duration-300 ${
                    activeCategory === item.toLowerCase()
                      ? "text-brand font-semibold underline"
                      : ""
                  } `}
                >
                  {item}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* MENU */}
        <div className="mt-20 space-y-24">
          {menuData.map((section) => (
            <div
              key={section.tab}
              id={section.tab.toLowerCase()}
              ref={(el) => {
                sectionRefs.current[section.tab.toLowerCase()] = el;
              }}
              className="scroll-mt-30 space-y-16"
            >
              {/* Section Title */}
              <h2 className="font-brand text-4xl capitalize">{section.tab}</h2>

              {/* Categories */}
              {section.categories.map((category) => (
                <div key={category.name} className="space-y-8">
                  <h3 className="text-sm font-semibold tracking-widest uppercase">
                    {category.name}
                  </h3>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {category.items.map((item) => (
                      <MenuCard
                        key={item.name}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        price={item.price}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
