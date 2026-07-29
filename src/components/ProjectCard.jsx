import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaStar,
    FaEye,
} from "react-icons/fa";

function ProjectCard({
    project,
    index,
    onView,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-700 bg-slate-800 transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.25)]"
        >
            {/* Image */}

            <div className="relative overflow-hidden">

                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                {project.featured && (

                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 text-xs font-semibold text-black">

                        <FaStar />

                        Featured

                    </div>

                )}

                <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">

                    {project.category}

                </div>

            </div>

            {/* Content */}

            <div className="flex flex-1 flex-col p-6">

                <div className="flex items-center justify-between gap-3">

                    <h3 className="text-xl font-bold text-white">

                        {project.title}

                    </h3>

                    <span className="rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-3 py-1 text-xs text-white whitespace-nowrap">

                        {project.status}

                    </span>

                </div>

                <p className="mt-5 flex-1 text-sm leading-7 text-slate-400">

                    {project.description}

                </p>

                {/* Tech */}

                <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.slice(0, 5).map((tech) => (

                        <span
                            key={tech}
                            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
                        >
                            {tech}
                        </span>

                    ))}

                    {project.technologies.length > 5 && (

                        <span className="rounded-full bg-slate-700 px-3 py-1 text-xs text-white">

                            +{project.technologies.length - 5}

                        </span>

                    )}

                </div>

                {/* Buttons */}

                <div className="mt-8 grid grid-cols-3 gap-3">

                    <button
                        onClick={() => onView(project)}
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:border-blue-500"
                    >

                        <FaEye />

                        View

                    </button>

                    {project.github ? (

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                        >

                            <FaGithub />

                            GitHub

                        </a>

                    ) : (

                        <div />

                    )}

                    {project.live ? (

                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:border-blue-500"
                        >

                            <FaExternalLinkAlt />

                            Live

                        </a>

                    ) : (

                        <div />

                    )}

                </div>

            </div>

        </motion.div>
    );
}

export default ProjectCard;