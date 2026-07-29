import { motion } from "framer-motion";
import {
  FaCode,
  FaBrain,
  FaTools,
  FaRobot,
} from "react-icons/fa";

import skillsData from "../data/skills";

const icons = {
  "Programming Languages": <FaCode />,
  "Frontend Development": <FaCode />,
  "AI & Machine Learning": <FaBrain />,
  "Generative AI": <FaRobot />,
  "Developer Tools": <FaTools />,
  "AI Tools": <FaRobot />,
};

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="font-semibold uppercase tracking-[4px] text-blue-400">

            My Expertise

          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">

            Technical

            <span className="text-blue-500">
              {" "}Skills
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">

            Technologies, programming languages,
            AI frameworks, and development tools
            that I use while building modern software
            and AI-powered applications.

          </p>

        </motion.div>

        {/* Skills Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skillsData.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-700 bg-slate-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.18)]"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">

                  {icons[category.title]}

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">

                    {category.title}

                  </h3>

                  <p className="text-sm text-slate-400">

                    {category.skills.length} Skills

                  </p>

                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;