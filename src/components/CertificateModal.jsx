import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaSearchPlus,
  FaSearchMinus,
  FaUndo,
} from "react-icons/fa";

function CertificateModal({
  isOpen,
  onClose,
  certificate,
}) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!isOpen) return;

    setZoom(1);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: .95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: .95,
              y: 30,
            }}
            transition={{
              duration: .25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl"
          >

            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">

              <div>

                <h2 className="text-2xl font-bold text-white">

                  {certificate.title}

                </h2>

                <p className="mt-1 text-slate-400">

                  {certificate.organization}

                </p>

              </div>

              <div className="flex items-center gap-3">

                <button
                  onClick={() =>
                    setZoom((z) =>
                      Math.max(0.5, z - 0.25)
                    )
                  }
                  className="rounded-xl border border-slate-700 p-3 text-white transition hover:border-blue-500"
                >

                  <FaSearchMinus />

                </button>

                <button
                  onClick={() =>
                    setZoom((z) =>
                      Math.min(3, z + 0.25)
                    )
                  }
                  className="rounded-xl border border-slate-700 p-3 text-white transition hover:border-blue-500"
                >

                  <FaSearchPlus />

                </button>

                <button
                  onClick={() => setZoom(1)}
                  className="rounded-xl border border-slate-700 p-3 text-white transition hover:border-blue-500"
                >

                  <FaUndo />

                </button>

                <button
                  onClick={onClose}
                  className="rounded-xl border border-slate-700 p-3 text-slate-300 transition hover:border-red-500 hover:text-red-400"
                >

                  <FaTimes />

                </button>

              </div>

            </div>

            {/* Image */}
            <div className="flex flex-1 items-center justify-center overflow-auto bg-slate-950 p-6">

              <img
                src={certificate.preview}
                alt={certificate.title}
                style={{
                  transform: `scale(${zoom})`,
                  transition: "transform .25s ease",
                }}
                className="max-h-full max-w-full rounded-xl bg-white object-contain shadow-2xl"
              />

            </div>

            {/* Footer */}

            <div className="flex flex-col gap-4 border-t border-slate-700 p-6 sm:flex-row sm:justify-end">

              {certificate.verify && (

                <a
                  href={certificate.verify}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1"
                >

                  <FaExternalLinkAlt />

                  Verify Credential

                </a>

              )}

              <button
                onClick={onClose}
                className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-medium text-white transition hover:border-blue-500 hover:bg-slate-700"
              >

                Close

              </button>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default CertificateModal;