import Hero from "@/sections/Hero";
import OurMenu from "@/sections/OurMenu";
import TheVibe from "@/sections/TheVibe";
import LocationAndHours from "@/sections/LocationAndHours";

const page = () => {
  return (
    <main>
      <Hero />
      <LocationAndHours />
      <TheVibe />
      <OurMenu />
    </main>
  );
};

export default page;
