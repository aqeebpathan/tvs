import Image from "next/image";

const LocationAndHours = () => {
  return (
    <section
      className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-3">
          {/* Location */}
          <address className="order-1 flex flex-col items-center gap-5.5 text-center not-italic sm:gap-3 md:order-1">
            <h2
              id="location-heading"
              className="text-brand text-[15px] leading-tight font-semibold"
            >
              FIND US
            </h2>
            <p className="text-subheading text-lg leading-tight">
              123 Demo St, New York, NY <br />
              <a
                href="tel:+15555555555"
                className="hover:text-brand transition-colors"
              >
                (555) 555-5555
              </a>
              <br />
              <a
                href="mailto:email@example.com"
                className="hover:text-brand transition-colors"
              >
                email@example.com
              </a>
            </p>
          </address>

          {/* Image (between location & hours on mobile) */}
          <div className="relative order-2 h-36 w-36 justify-self-center sm:h-48 sm:w-48 md:order-2 md:h-56 md:w-56 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
            <Image
              src="/organic.jpg"
              alt="Decorative coffee cups illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Hours */}
          <div className="order-3 flex flex-col items-center gap-5.5 text-center md:order-3">
            <h2 className="text-brand text-[15px] leading-tight font-semibold">
              OUR HOURS
            </h2>
            <p className="text-subheading text-lg leading-tight">
              Mon: CLOSED <br />
              Tue to Fri: 11 AM – 10 PM <br />
              Sat to Sun: 12 PM – 7 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAndHours;
