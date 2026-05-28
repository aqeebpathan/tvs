"use client";
import { useState } from "react";

import MenuCard from "@/components/MenuCard";
import { menuData } from "@/data/menuData";

function OurMenu() {
  const [activeTab, setActiveTab] = useState(menuData[0].tab);
  const [isFading, setIsFading] = useState(false);

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsFading(false);
    }, 200);
  };

  return (
    <section className="font-sub px-4 py-20">
      <div className="mx-auto max-w-7xl px-0 sm:px-4 lg:px-10">
        {/* Heading */}
        <h1 className="font-brand text-brand mb-3.75 text-center text-[2rem] leading-tight">
          Our Menu
        </h1>

        {/* Sticky Tabs */}
        <div className="sticky top-8 z-50 -mx-4 bg-transparent px-4 py-4 sm:top-0 sm:-mx-4 sm:px-4 lg:-mx-10 lg:px-10">
          <div className="mb-0 flex justify-center bg-transparent">
            <div className="z-999 flex rounded-full bg-[#f6f6f6] p-1.25">
              {menuData.map((tab) => (
                <button
                  key={tab.tab}
                  onClick={() => handleTabChange(tab.tab)}
                  className={`text-subheading cursor-pointer rounded-full px-5.5 py-2.5 text-lg transition-all lg:leading-tight ${
                    activeTab === tab.tab
                      ? "text-brand bg-white"
                      : "hover:opacity-70"
                  }`}
                >
                  {tab.tab.charAt(0).toUpperCase() + tab.tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Spacer to maintain original spacing */}
        <div className="h-10.5"></div>

        {/* Animated Content */}
        <div
          className={`transition-opacity duration-150 ease-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {menuData
            .filter((t) => t.tab === activeTab)
            .map((tab) => (
              <div key={tab.tab} className="space-y-14">
                {tab.categories.map((category) => (
                  <div
                    key={category.name}
                    className="mx-auto max-w-xl rounded-2xl lg:max-w-none"
                  >
                    <h2 className="text-brand text-md mb-3 leading-tight font-semibold">
                      {category.name.toUpperCase()}
                    </h2>

                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
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
}

export default OurMenu;
