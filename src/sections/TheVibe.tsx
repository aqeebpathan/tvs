const TheVibe = () => {
  return (
    <section
      className="px-4 py-16 sm:px-6 sm:py-24 md:pr-[5%] md:pl-[5%] lg:px-12 lg:py-35"
      aria-labelledby="vibe-heading"
    >
      <div className="mx-auto flex flex-col items-center justify-center gap-3 md:gap-5.5 2xl:container">
        <span className="font-sub text-subheading text-md font-semibold">
          THE VIBES
        </span>
        <h2
          id="vibe-heading"
          className="font-brand text-brand max-w-4xl px-2 text-center text-[51px] leading-[1.1] sm:leading-[1.1]"
        >
          Unhurried charm, slow jazz, and a sunlit sanctuary built for quiet
          mornings and long talks.
        </h2>
      </div>
    </section>
  );
};

export default TheVibe;
