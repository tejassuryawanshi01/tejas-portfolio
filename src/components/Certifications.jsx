import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaBuilding,
  FaCalendarAlt,
  FaIdBadge,
  FaEye,
} from "react-icons/fa";

import certificates from "../data/certificates";
import organizationLogos from "../data/logos";

import CertificateModal from "./CertificateModal";
import CertificateFilters from "./CertificateFilters";

const badgeStyles = {
  Certification:
    "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-blue-500/30",

  Internship:
    "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-emerald-500/30",

  Workshop:
    "bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-purple-500/30",

  "Open Source":
    "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-orange-500/30",
};

function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filters = useMemo(() => {
    return [
      {
        label: "All",
        value: "All",
        count: certificates.length,
      },

      {
        label: "Certification",
        value: "Certification",
        count: certificates.filter(
          (item) => item.type === "Certification"
        ).length,
      },

      {
        label: "Internship",
        value: "Internship",
        count: certificates.filter(
          (item) => item.type === "Internship"
        ).length,
      },

      {
        label: "Workshop",
        value: "Workshop",
        count: certificates.filter(
          (item) => item.type === "Workshop"
        ).length,
      },

      {
        label: "Open Source",
        value: "Open Source",
        count: certificates.filter(
          (item) => item.type === "Open Source"
        ).length,
      },
    ];
  }, []);

  const filteredCertificates = useMemo(() => {
    return certificates.filter((item) => {
      if (activeFilter === "All") return true;

      return item.type === activeFilter;
    });
  }, [activeFilter]);

  return (
    <>
      <section
        id="certifications"
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
              Achievements
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              My
              <span className="text-blue-500">
                {" "}Certifications
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-slate-400">
              Professional certifications,
              internships,
              workshops and open source
              achievements demonstrating
              continuous learning.
            </p>

            <CertificateFilters
              filters={filters}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />

          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {filteredCertificates.map((certificate, index) => (

              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,.25)]"
              >
                {/* Certificate Preview */}

                <div className="relative overflow-hidden">

                  <img
                    src={certificate.preview}
                    alt={certificate.title}
                    loading="lazy"
                    className="h-64 w-full bg-white object-contain p-2 transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  <div className="absolute right-4 top-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold shadow ${badgeStyles[certificate.type]
                        }`}
                    >
                      {certificate.type}
                    </span>

                  </div>

                </div>

                {/* Card Body */}

                <div className="flex flex-1 flex-col p-6">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-md">

                      {organizationLogos[certificate.organization] ? (

                        <img
                          src={organizationLogos[certificate.organization]}
                          alt={certificate.organization}
                          className="h-full w-full object-contain"
                        />

                      ) : (

                        <FaCertificate className="text-2xl text-blue-600" />

                      )}

                    </div>

                    <div>

                      <h3 className="text-xl font-bold leading-7 text-white">

                        {certificate.title}

                      </h3>

                      <p className="mt-1 text-sm text-slate-400">

                        {certificate.organization}

                      </p>

                    </div>

                  </div>

                  {/* Details */}

                  <div className="mt-6 flex-1 space-y-4">

                    <div className="flex items-center gap-3">

                      <FaCalendarAlt className="text-blue-400" />

                      <span className="text-slate-300">

                        {certificate.issued}

                      </span>

                    </div>

                    <div className="flex items-start gap-3">

                      <FaIdBadge className="mt-1 text-blue-400" />

                      <span className="break-all text-sm text-slate-400">

                        {certificate.credentialId}

                      </span>

                    </div>

                    {certificate.organizer && (

                      <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">

                        <div className="flex items-center gap-2">

                          <FaBuilding className="text-blue-400" />

                          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">

                            Organizer

                          </span>

                        </div>

                        <p className="mt-3 text-sm leading-6 text-slate-300">

                          {certificate.organizer}

                        </p>

                      </div>

                    )}

                  </div>

                  {/* Buttons */}

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <button
                      onClick={() =>
                        setSelectedCertificate(certificate)
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800"
                    >

                      <FaEye />

                      View

                    </button>

                    {certificate.verify && (

                      <a
                        href={certificate.verify}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40"
                      >

                        <FaExternalLinkAlt />

                        Verify

                      </a>

                    )}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        <CertificateModal
          isOpen={selectedCertificate !== null}
          certificate={selectedCertificate}
          onClose={() =>
            setSelectedCertificate(null)
          }
        />

      </section>

    </>
  );
}

export default Certifications;