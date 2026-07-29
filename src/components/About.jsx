import { motion } from "framer-motion";

import {
  FaBrain,
  FaCode,
  FaPython,
  FaLightbulb,
} from "react-icons/fa";

import profile from "../data/profile";
import projects from "../data/projects";
import publications from "../data/publication";
import certificates from "../data/certificates";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-blue-400 font-semibold tracking-widest uppercase">

            About Me

          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">

            Passionate About

            <span className="text-blue-500">
              {" "}Artificial Intelligence
            </span>

          </h2>

        </motion.div>

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-white">

              Hi, I'm {profile.fullName}

            </h3>

            <p className="mt-6 text-slate-400 leading-8">

              {profile.shortBio}

            </p>

            <p className="mt-6 text-slate-400 leading-8">

              I enjoy designing intelligent applications,
              building AI-powered web solutions, solving
              real-world problems, and continuously learning
              emerging technologies in Artificial Intelligence,
              Machine Learning, and Generative AI.

            </p>

            {/* Feature Cards */}

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">

                <FaBrain className="text-3xl text-blue-500" />

                <h4 className="mt-4 font-semibold text-white">

                  Generative AI

                </h4>

                <p className="mt-2 text-sm text-slate-400">

                  Building AI-powered applications using
                  Large Language Models.

                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">

                <FaPython className="text-3xl text-blue-500" />

                <h4 className="mt-4 font-semibold text-white">

                  Python

                </h4>

                <p className="mt-2 text-sm text-slate-400">

                  Developing scalable AI and automation
                  solutions.

                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">

                <FaCode className="text-3xl text-blue-500" />

                <h4 className="mt-4 font-semibold text-white">

                  Web Development

                </h4>

                <p className="mt-2 text-sm text-slate-400">

                  Creating modern responsive websites using
                  AI-assisted development.

                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">

                <FaLightbulb className="text-3xl text-blue-500" />

                <h4 className="mt-4 font-semibold text-white">

                  Problem Solving

                </h4>

                <p className="mt-2 text-sm text-slate-400">

                  Passionate about solving real-world
                  challenges through technology.

                </p>

              </div>

            </div>

          </motion.div>
          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center transition hover:border-blue-500">

                <h3 className="text-4xl font-bold text-blue-500">
                  {projects.length}
                </h3>

                <p className="mt-3 text-slate-400">
                  Projects Completed
                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center transition hover:border-blue-500">

                <h3 className="text-4xl font-bold text-blue-500">
                  {publications.length}
                </h3>

                <p className="mt-3 text-slate-400">
                  Research Publications
                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center transition hover:border-blue-500">

                <h3 className="text-4xl font-bold text-blue-500">
                  {certificates.length}
                </h3>

                <p className="mt-3 text-slate-400">
                  Certifications
                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 transition hover:border-blue-500">

                <h3 className="text-2xl font-bold text-blue-500">
                  Currently Learning
                </h3>

                <ul className="mt-5 space-y-3 text-slate-400">

                  <li>• Generative AI</li>

                  <li>• Prompt Engineering</li>

                  <li>• Large Language Models</li>

                  <li>• AI Application Development</li>

                </ul>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
export default About;