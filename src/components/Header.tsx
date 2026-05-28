"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const controlHeader = () => {
      if (menuOpen) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY, menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Menu slides in from top
  const menuVariants: Variants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  // All nav items slide in together from top after menu slides in
  const navContentVariants: Variants = {
    closed: {
      opacity: 0,
      y: -50,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  // Brand slides in after menu
  const brandVariants: Variants = {
    closed: {
      opacity: 0,
      y: -50,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const navItems = ["HOME", "MENU", "ABOUT", "CONTACT"];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 right-0 left-0 z-999 bg-transparent px-[5%] py-4 leading-tight transition-transform duration-300 ease-in-out md:px-11 ${isVisible || menuOpen ? "translate-y-0" : "-translate-y-full"} `}
        role="banner"
      >
        <nav
          className="mx-auto flex items-center justify-between 2xl:container"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-brand relative aspect-square w-10 text-3xl leading-0 font-bold md:w-12 lg:w-14"
            aria-label="The Village Shop - Home"
          >
            <Image src={"/logo-1.png"} alt="Logo" fill />
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="menu-button text-brand text-lg leading-tight font-medium tracking-tight transition-opacity hover:opacity-70"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </nav>
      </header>

      {/* FULL PAGE MENU */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[900] bg-white"
          >
            <div className="flex h-full flex-row pt-20 sm:pt-24 md:pt-15">
              {/* LEFT NAV */}
              <div className="flex w-full items-center px-6 py-4 sm:px-8 sm:py-6 md:w-1/2 md:px-12 md:py-0 lg:px-16 xl:px-24">
                <motion.ul
                  variants={navContentVariants}
                  initial="closed"
                  animate="open"
                  className="text-brand space-y-3 text-2xl font-semibold tracking-wide sm:space-y-4 sm:text-[28px] md:space-y-5 md:text-[32px]"
                >
                  {navItems.map((item) => {
                    const href =
                      item === "HOME" ? "/" : `/${item.toLowerCase()}`;

                    return (
                      <li key={item}>
                        <Link
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          className={`tracking-tight decoration-1 underline-offset-6 transition-opacity hover:opacity-70 ${isActive(href) ? "underline" : ""} `}
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  })}
                </motion.ul>
              </div>

              {/* RIGHT BRAND - Hidden below md */}
              <motion.div
                variants={brandVariants}
                initial="closed"
                animate="open"
                className="hidden w-3/1 w-full items-center justify-center md:flex lg:justify-start lg:pl-12 xl:pl-20"
              >
                <span className="font-brand text-brand text-6xl font-extrabold lg:text-7xl xl:text-8xl">
                  The Village Shop
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
