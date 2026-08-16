import React, { useState } from "react";

function PortfolioItem({ title, imgUrl, images, stack, links, description }) {
  const imgs = images && images.length ? images : imgUrl ? [imgUrl] : [];
  const [idx, setIdx] = useState(0);

  const advance = () => setIdx((i) => (i + 1) % imgs.length);

  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
      {imgs.length > 0 ? (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={imgs[idx]}
            alt="portfolio"
            onClick={imgs.length > 1 ? advance : undefined}
            className={`w-full h-48 object-cover object-top transition-opacity duration-200 ${imgs.length > 1 ? "cursor-pointer" : ""}`}
          />
          {imgs.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
              {imgs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-150 ${i === idx ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          )}
        </div>
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
        <p className="text-xs md:text-sm dark:text-white mb-2 md:mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white mb-2 md:mb-3">
          {links.map((link) => (
            <a
              key={link.url}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.type}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
