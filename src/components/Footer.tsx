import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="font-sub px-4 md:px-6 lg:px-12">
      <div className="mx-auto pt-10 pb-10 md:pt-20 2xl:container">
        <div className="pb-15 md:pb-40">
          {/* Instagram Header - Stacked on mobile */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-brand text-md font-semibold">
              CHECK US OUT ON INSTAGRAM
            </h2>
            <Link
              href="/"
              className="text-brand inline-flex w-fit items-center justify-center gap-1.75 rounded-full border-[1.5px] border-[#e4f2e0] bg-[#e4f2e0] px-3.5 py-1.5 text-[15px] font-medium tracking-tight transition-all duration-200 hover:gap-2.75 hover:bg-transparent"
            >
              <span>@thevillageshop</span>
              <Image src="/assets/arrow.svg" width={4} height={6} alt="visit" />
            </Link>
          </div>

          {/* Instagram Images - 2 cols (4 images) on mobile, 5 cols on desktop */}
          <div className="mt-8 grid grid-cols-2 gap-2 md:mt-20 md:grid-cols-5 md:gap-4">
            {instagramImages.map((img, idx) => (
              <div
                key={idx}
                className={`relative aspect-square w-full ${
                  idx === 4 ? "hidden md:block" : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`Instagram ${idx}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info - Stacked on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          <div className="space-y-3">
            <h4 className="text-brand font-semibold">HOURS</h4>
            <div>
              <p className="text-subheading text-lg leading-tight">
                Tue to Fri: 11 AM – 10 PM
              </p>
              <p className="text-subheading text-lg leading-tight">
                Sat to Sun: 12 PM – 7 PM
              </p>
            </div>
          </div>

          <div className="space-y-3 sm:text-center md:text-center">
            <h4 className="text-brand font-semibold">CONTACT</h4>
            <div>
              <Link
                className="text-subheading block text-lg leading-tight"
                href="/"
              >
                hello@thevillageshop.in
              </Link>
              <p className="text-subheading text-lg leading-tight">
                (123) 456-7890
              </p>
            </div>
          </div>

          <div className="space-y-3 sm:text-right md:text-right">
            <h4 className="text-brand font-semibold">LOCATION</h4>
            <p className="text-subheading text-lg leading-tight">
              107 Way Drive, Laurent <br /> Estate, Fictionville
            </p>
          </div>
        </div>

        {/* Bottom Copyright - Stacked on mobile */}
        <div className="md:text-md text-subheading mt-8 flex flex-col gap-2 border-t border-gray-200 py-4 pt-6 text-sm md:flex-row md:justify-between">
          <p>Demo website / Images for illustrative purposes only</p>
          <p>
            The Village Shop 2026 - Developed by{" "}
            <Link
              href="https://aqeeb.dev"
              className="underline underline-offset-4"
            >
              aqeeb.dev
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

const instagramImages = [
  "/assets/insta1.avif",
  "/assets/insta2.avif",
  "/assets/insta3.avif",
  "/assets/insta4.avif",
  "/assets/insta5.avif",
];

export default Footer;
