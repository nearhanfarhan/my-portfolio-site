import React, { useState } from "react";
import CaseStudyModal from "./CaseStudyModal";

function WorkPortfolioItem({ title, imgUrl, stack, summary, problem, approach, impact }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden cursor-pointer hover:border-violet-500 dark:hover:border-violet-400 transition-colors duration-150"
      >
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-48 md:h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
            <span className="text-stone-400 dark:text-stone-500 text-sm">No preview</span>
          </div>
        )}
        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white mb-2 md:mb-3">
            {stack.map((item) => (
              <span
                key={item}
                className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
              >
                {item}
              </span>
            ))}
          </p>
          <p className="text-xs md:text-sm dark:text-white mb-2 md:mb-3">{summary}</p>
        </div>
      </div>

      <CaseStudyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={title}
        stack={stack}
        problem={problem}
        approach={approach}
        impact={impact}
      />
    </>
  );
}

export default WorkPortfolioItem;
