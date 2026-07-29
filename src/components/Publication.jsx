import { motion } from "framer-motion";
import {
  FaAward,
  FaExternalLinkAlt,
  FaFilePdf,
  FaBookOpen,
} from "react-icons/fa";

import publications from "../data/publication";

function Publication() {
  return (
    <section
      id="publication"
      className="bg-slate-950 px-6 py-28 scroll-mt-24"
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
            Research
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Research
            <span className="text-blue-500"> Publications</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            Published research work demonstrating the
            application of Artificial Intelligence,
            Machine Learning, Natural Language Processing,
            and Computer Vision in the healthcare domain.
          </p>

        </motion.div>

        {/* Publication Cards */}

        <div className="mt-16 space-y-8">

          {publications.map((publication, index) => (

            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-xl transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.25)]"
            >

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">

                    <FaBookOpen className="text-3xl text-white" />

                  </div>

                  <div>

                    <div className="flex items-center gap-2">

                      <FaAward className="text-yellow-400" />

                      <span className="text-sm font-medium text-yellow-400">
                        International Journal Publication
                      </span>

                    </div>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {publication.title}
                    </h3>

                  </div>

                </div>

                <div className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3 text-center">

                  <p className="text-xs uppercase tracking-wider text-blue-100">
                    Published
                  </p>

                  <h4 className="text-2xl font-bold text-white">
                    {publication.year}
                  </h4>

                </div>

              </div>

              <p className="mt-8 leading-8 text-slate-400">
                {publication.description}
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">

                  <h4 className="mb-3 text-lg font-semibold text-blue-400">
                    Journal
                  </h4>

                  <p className="leading-7 text-slate-400">
                    {publication.journal}
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">

                  <h4 className="mb-3 text-lg font-semibold text-blue-400">
                    Research Area
                  </h4>

                  <p className="leading-7 text-slate-400">
                    {publication.area}
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">

                  <h4 className="mb-3 text-lg font-semibold text-blue-400">
                    DOI
                  </h4>

                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className="break-all text-blue-400 hover:text-blue-300"
                  >
                    {publication.doi}
                  </a>

                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">

                  <h4 className="mb-3 text-lg font-semibold text-blue-400">
                    Publication Year
                  </h4>

                  <p className="text-slate-400">
                    {publication.year}
                  </p>

                </div>

              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                {publication.pdf && (

                  <a
                    href={publication.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                  >

                    <FaFilePdf />

                    View Research Paper

                  </a>

                )}

                {publication.doi && (

                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800"
                  >

                    <FaExternalLinkAlt />

                    View DOI

                  </a>

                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Publication;