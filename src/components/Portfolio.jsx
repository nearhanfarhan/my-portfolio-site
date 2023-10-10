import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import {motion} from "framer-motion"

function Portfolio() {
   return (
      <>
         <motion.div initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}>
            <h2 className="text-4xl md:text-4xl dark:text-white mb-1 md:mb-3 font-bold flex justify-center items-center">My work</h2>

      <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map(project => (
               <PortfolioItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  links={project.links}
                  description={project.description}
               />
            ))}
         </div>
      </div></motion.div>
      </>
   )
}

export default Portfolio;