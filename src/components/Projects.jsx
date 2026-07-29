import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import projects from "../data/projects";

import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = useMemo(() => {
    return [
      {
        label: "All",
        value: "All",
        count: projects.length,
      },

      {
        label: "GenAI",
        value: "GenAI",
        count: projects.filter(
          (project) => project.filter === "GenAI"
        ).length,
      },

      {
        label: "AI",
        value: "AI",
        count: projects.filter(
          (project) => project.filter === "AI"
        ).length,
      },

      {
        label: "ML",
        value: "ML",
        count: projects.filter(
          (project) => project.filter === "ML"
        ).length,
      },

      {
        label: "Web",
        value: "Web",
        count: projects.filter(
          (project) => project.filter === "Web"
        ).length,
      },
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" ||
        project.filter === activeFilter;

      const matchesSearch =
        project.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        project.category
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        project.technologies.some((tech) =>
          tech
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-blue-400">
            Portfolio
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Featured
            <span className="text-blue-500">
              {" "}Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            A collection of Artificial Intelligence,
            Machine Learning,
            Generative AI,
            and modern web development projects.
          </p>

          <ProjectFilters
            filters={filters}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredProjects.map((project, index) => (

            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onView={setSelectedProject}
            />

          ))}

        </div>

        {filteredProjects.length === 0 && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 rounded-3xl border border-slate-700 bg-slate-800 py-16 text-center"
          >

            <h3 className="text-2xl font-bold text-white">

              No Projects Found

            </h3>

            <p className="mt-4 text-slate-400">

              No projects match your current filter or search.

            </p>

          </motion.div>

        )}

      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>

  );
}

export default Projects;