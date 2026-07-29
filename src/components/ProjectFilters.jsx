function ProjectFilters({
  filters,
  activeFilter,
  setActiveFilter,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      {/* Filters */}

      <div className="flex flex-wrap justify-center gap-3">

        {filters.map((filter) => (

          <button
            key={filter.label}
            onClick={() => setActiveFilter(filter.value)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              activeFilter === filter.value
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "border border-slate-700 bg-slate-800 text-slate-300 hover:border-blue-500"
            }`}
          >

            {filter.label}

            <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">

              {filter.count}

            </span>

          </button>

        ))}

      </div>

      {/* Search */}

      <div className="relative w-full lg:w-80">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m1.35-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />

        </svg>

        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none transition-all duration-300 focus:border-blue-500"
        />

      </div>

    </div>
  );
}

export default ProjectFilters;