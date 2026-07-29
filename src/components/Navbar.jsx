import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

import profile from "../data/profile";
import navigation from "../data/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      navigation.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(item.id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold text-white">

            TS

          </div>

          <div>

            <h2 className="text-lg font-bold text-white">

              {profile.firstName}

              <span className="text-blue-400">
                {" "}
                {profile.lastName}
              </span>

            </h2>

            <p className="text-xs text-slate-400">

              {profile.role}

            </p>

          </div>

        </a>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-8 lg:flex">

          {navigation.map((item) => (

            <li key={item.id}>

              <a
                href={`#${item.id}`}
                className={`relative text-sm font-medium transition-all duration-300 ${active === item.id
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-white"
                  }`}
              >
                {item.label}

                {active === item.id && (

                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-500"
                  />

                )}

              </a>

            </li>

          ))}

        </ul>
        {/* Resume Button */}

        <div className="hidden lg:flex">

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <FaDownload />

            Resume

          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white lg:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl lg:hidden"
          >

            <ul className="flex flex-col gap-2 px-6 py-6">

              {navigation.map((item) => (

                <li key={item.id}>

                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-4 py-3 transition ${active === item.id
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                  >
                    {item.label}
                  </a>

                </li>

              ))}

              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700"
              >
                <FaDownload />

                Download Resume

              </a>

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;