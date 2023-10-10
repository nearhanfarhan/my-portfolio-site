import React from "react";

function PortfolioItem({ title, imgUrl, stack, links, description }) {
  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-48 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
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
        <p className="text-xs md:text-sm dark:text-white mb-2 md:mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white mb-2 md:mb-3">
          {links.map((link) => (
            <button>
              <a
                className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md "
                key={link.url}
                type="button"
                href={link.url}
                target="_blank"
              >
                {link.type}
              </a>
            </button>
          ))}
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;

// <a
// href={link}
// target="_blank"
// rel="noopener noreferrer"
// className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
// >
