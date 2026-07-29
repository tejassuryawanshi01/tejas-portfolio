import { motion } from "framer-motion";
import {
  FaHeart,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaDownload,
} from "react-icons/fa";

import profile from "../data/profile";
import navigation from "../data/navigation";
import socials from "../data/socials";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-bold text-white">

              {profile.fullName}

            </h2>

            <p className="mt-3 font-medium text-blue-400">

              {profile.role}

            </p>

            <p className="mt-6 max-w-md leading-8 text-slate-400">

              {profile.shortBio}

            </p>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40"
            >

              <FaDownload />

              Download Resume

            </a>

            {/* Social Icons */}

            <div className="mt-8 flex flex-wrap gap-4">

              {socials.map((item) => {

                const Icon = item.icon;

                return (

                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                  >

                    <Icon size={18} />

                  </a>

                );

              })}

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .1 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-bold text-white">

              Quick Links

            </h3>

            <ul className="mt-8 space-y-4">

              {navigation.map((item) => (

                <li key={item.id}>

                  <a
                    href={`#${item.id}`}
                    className="inline-flex items-center text-slate-400 transition-all duration-300 hover:translate-x-2 hover:text-blue-400"
                  >

                    {item.label}

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .2 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-bold text-white">

              Contact

            </h3>

            <div className="mt-8 space-y-5">

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-400"
              >

                <FaEnvelope className="text-blue-400" />

                <span>{profile.email}</span>

              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-slate-300">

                <FaMapMarkerAlt className="text-blue-400" />

                <span>{profile.location}</span>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row"
        >

          <div className="text-center md:text-left">

            <p className="text-sm text-slate-400">
              © {year}{" "}
              <span className="font-semibold text-white">
                {profile.fullName}
              </span>
              . All Rights Reserved.
            </p>

            <p className="mt-2 flex items-center justify-center gap-2 text-sm text-slate-500 md:justify-start">

              Built with

              <FaHeart className="text-red-500" />

              React • Vite • Tailwind CSS

            </p>

          </div>
        </motion.div>

      </div>

    </footer>
  );
}

export default Footer;