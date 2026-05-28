// sections/Hero.tsx
import HeroGallery from "@/components/HeroGallery";

const Hero = () => {
  return (
    <section
      className="pt-28 sm:pt-32 md:pt-36 lg:pt-40"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto text-center 2xl:container">
        <div className="px-4 py-2 md:py-4 lg:py-6">
          <h1
            id="hero-heading"
            className="font-brand text-brand mb-3 text-[81px] leading-[1.1] sm:mb-4 sm:leading-[1.2] md:text-[90px] lg:text-[117px]"
          >
            Wholesome Food, Zero Guilt
          </h1>
          <p className="font-sub text-subheading mx-auto max-w-xl text-2xl leading-tight">
            Mumbai&apos;s organic cafe serving honest, gluten-free meals in
            Bandra&apos;s leafy lanes
          </p>
        </div>

        <HeroGallery />
      </div>
    </section>
  );
};

export default Hero;
