import Link from "next/link";

const ContactPage = () => {
  return (
    <section className="font-sub">
      <div className="mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-30 text-center md:px-11">
        <div className="text-subheading mb-2.75 leading-tight font-semibold">
          CONTACT
        </div>

        <h1 className="font-brand text-brand mb-6 text-[42px] leading-[1.1] md:w-[66%] md:text-[79px]">
          Let&apos;s build your cafe&apos;s online presence.
        </h1>

        <p className="text-subheading mb-10 text-xl leading-tight md:w-[50%] md:text-2xl">
          This is a demo website for cafes. Want something like this for your
          coffee shop? Let&apos;s chat.
        </p>

        <Link
          href="mailto:hi@aqeeb.dev"
          className="text-brand inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#e4f2e0] bg-[#e4f2e0] px-6 py-3 text-lg font-medium tracking-tight transition-all duration-200 hover:gap-3 hover:bg-transparent"
        >
          hi@aqeeb.dev
        </Link>
      </div>
    </section>
  );
};

export default ContactPage;
