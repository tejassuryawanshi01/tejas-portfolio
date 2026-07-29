import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaRobot,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import profile from "../data/profile";
import socials from "../data/socials";
import projects from "../data/projects";
import publications from "../data/publication";
import certificates from "../data/certificates";

function Hero() {
  const projectCount = projects.length;
  const publicationCount = publications.length;
  const certificateCount = certificates.length;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 scroll-mt-24"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_45%)]" />

      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      {/* Main Content */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-20">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2 backdrop-blur">

              <FaRobot className="text-blue-400" />

              <span className="text-sm text-slate-300">
                {profile.availability}
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">

              Hello, I'm

              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">

                {profile.firstName} {profile.lastName}

              </span>

            </h1>

            {/* Typing */}

            <div className="mt-6 min-h-[56px] text-2xl font-semibold text-slate-300 md:text-3xl">

              <TypeAnimation
                sequence={profile.typingRoles.flatMap((role) => [role, 2000])}
                speed={50}
                repeat={Infinity}
              />

            </div>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">

              {profile.tagline}

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href={profile.heroButtons.primary.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >

                {profile.heroButtons.primary.text}

                <FaArrowRight />

              </a>

              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-900"
              >

                <FaDownload />

                Download Resume

              </a>

            </div>

            {/* Social Icons */}

            <div className="mt-10 flex items-center gap-4 flex-wrap">

              {socials.map((item) => {

                const Icon = item.icon;

                return (

                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
                  >

                    <Icon size={20} />

                  </a>

                );

              })}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >

            <div className="relative">

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-blue-500 blur-[110px]"
              />

              <div className="absolute -inset-4 rounded-full border border-blue-500/20" />

              <motion.img
                src={profile.profileImage}
                alt={profile.fullName}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-72 w-72 rounded-full border-4 border-blue-500 object-cover shadow-[0_0_60px_rgba(59,130,246,0.35)] sm:h-80 sm:w-80 md:h-[430px] md:w-[430px] lg:h-[470px] lg:w-[470px]"
              />

            </div>

          </motion.div>

        </div>

      </div>
      {/* Stats */}

      <div className="relative mx-auto mt-12 hidden max-w-5xl px-6 lg:block">

        <div className="grid grid-cols-3 gap-5">

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7 text-center backdrop-blur transition-all duration-300 hover:border-blue-500"
          >

            <h3 className="text-3xl font-bold text-blue-400">
              {projectCount}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Projects
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7 text-center backdrop-blur transition-all duration-300 hover:border-blue-500"
          >

            <h3 className="text-3xl font-bold text-blue-400">
              {publicationCount}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Publications
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7 text-center backdrop-blur transition-all duration-300 hover:border-blue-500"
          >

            <h3 className="text-3xl font-bold text-blue-400">
              {certificateCount}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Certifications
            </p>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 xl:block"
      >

        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-600">

          <div className="mt-2 h-2 w-2 rounded-full bg-blue-400" />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;