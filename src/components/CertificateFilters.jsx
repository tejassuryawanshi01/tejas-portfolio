function CertificateFilters({
  filters,
  activeFilter,
  setActiveFilter,
}) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-3">

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
  );
}

export default CertificateFilters;