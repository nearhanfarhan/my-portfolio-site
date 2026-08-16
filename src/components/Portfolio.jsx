import React from 'react';
import portfolio from '../data/portfolio';
import workProjects from '../data/workProjects';
import PortfolioItem from './PortfolioItem';
import WorkPortfolioItem from './WorkPortfolioItem';
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="flex flex-col gap-10"
    >
      <div>
        <h2 className="text-4xl md:text-4xl dark:text-white mb-1 md:mb-3 font-bold flex justify-center items-center">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((project) => (
            <PortfolioItem
              key={project.title}
              images={project.images}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              links={project.links}
              description={project.description}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-4xl md:text-4xl dark:text-white mb-1 md:mb-3 font-bold flex justify-center items-center">
          Professional Work
        </h2>
        <p className="text-sm dark:text-stone-400 text-stone-500 text-center mb-4">
          A selection of tools and systems built for a micromobility operator in London.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workProjects.map((project) => (
            <WorkPortfolioItem
              key={project.title}
              title={project.title}
              imgUrl={project.imgUrl}
              stack={project.stack}
              summary={project.summary}
              problem={project.problem}
              approach={project.approach}
              impact={project.impact}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Portfolio;
