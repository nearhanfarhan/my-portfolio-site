import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function CaseStudyModal({ isOpen, onClose, title, stack, problem, approach, impact }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-stone-900 border-2 border-stone-900 dark:border-white rounded-md p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl md:text-2xl dark:text-white font-bold">{title}</h3>
              <button
                onClick={onClose}
                className="shrink-0 px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md text-xs dark:text-white cursor-pointer"
              >
                Close
              </button>
            </div>

            <p className="flex flex-wrap gap-2 text-xs md:text-sm dark:text-white">
              {stack.map((item) => (
                <span
                  key={item}
                  className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
                >
                  {item}
                </span>
              ))}
            </p>

            <div className="flex flex-col gap-4 text-xs md:text-sm dark:text-white border-t-2 border-stone-200 dark:border-stone-700 pt-4">
              <div>
                <span className="font-semibold uppercase tracking-wide text-xs">Problem</span>
                <p className="mt-1 leading-relaxed">{problem}</p>
              </div>
              <div>
                <span className="font-semibold uppercase tracking-wide text-xs">Approach</span>
                <p className="mt-1 leading-relaxed">{approach}</p>
              </div>
              <div>
                <span className="font-semibold uppercase tracking-wide text-xs">Impact</span>
                <p className="mt-1 leading-relaxed">{impact}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CaseStudyModal;
