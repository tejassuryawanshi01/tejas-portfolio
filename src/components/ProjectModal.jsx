import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useEffect } from "react";

function ProjectModal({
  isOpen,
  onClose,
  project,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl"
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-white transition hover:bg-red-500"
            >
              <FaTimes />
            </button>

            {/* Image */}

            <img
              src={project.image}
              alt={project.title}
              className="h-80 w-full object-cover"
            />

            <div className="p-8">

              <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-full bg-blue-600 px-4 py-1 text-sm text-white">

                  {project.category}

                </span>

                <span className="rounded-full bg-emerald-600 px-4 py-1 text-sm text-white">

                  {project.status}

                </span>

              </div>

              <h2 className="mt-5 text-4xl font-bold text-white">

                {project.title}

              </h2>

              <p className="mt-6 leading-8 text-slate-300">

                {project.description}

              </p>

              {/* Technologies */}

              <div className="mt-8">

                <h3 className="mb-4 text-xl font-semibold text-white">

                  Technologies Used

                </h3>

                <div className="flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">

                {project.github && (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                  >
                    <FaGithub />

                    GitHub

                  </a>

                )}

                {project.live && (

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-medium text-white transition hover:border-blue-500"
                  >
                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                )}

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;