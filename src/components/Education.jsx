import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

import education from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="font-semibold uppercase tracking-[4px] text-blue-400">
            Qualification
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            My
            <span className="text-blue-500"> Education</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            My academic journey in Computer Science,
            building a strong foundation in software
            development, Artificial Intelligence and
            modern technologies.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-slate-700 md:block" />

          <div className="space-y-10">

            {education.map((item, index) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative rounded-3xl border border-slate-700 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.18)] md:ml-16"
              >

                <div className="absolute -left-12 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-blue-600 md:flex">

                  <FaGraduationCap className="text-white" />

                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <h3 className="text-2xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <span className="rounded-full bg-emerald-600 px-4 py-1 text-sm font-medium text-white">
                    {item.status}
                  </span>

                </div>

                <p className="mt-3 text-lg font-medium text-blue-400">
                  {item.field}
                </p>

                <p className="mt-3 text-slate-300">
                  {item.institute}
                </p>

                <div className="mt-5 flex items-center gap-2 text-slate-400">

                  <FaCalendarAlt />

                  <span>{item.duration}</span>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;