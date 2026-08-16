import React from 'react';
import { motion } from 'framer-motion';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold"
         >
            Farhan Chaudhry
         </motion.h1>
         <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-xl mb-3 font-medium"
         >
            Operations Engineering & Automation
         </motion.p>
         <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm max-w-xl mb-6 dark:text-stone-300"
         >
            I sit at the intersection of operations and engineering, building automations that replace manual work at scale. At Lime I've shipped a real-time Snowflake dispatch system, a scheduling platform for 120+ staff, and an AI-powered photo QA system using the Gemini API.
            <br /><br />
            MEng from Imperial College, operations management experience, and a Northcoders bootcamp in between. Outside work: cricket captain, vinyl collector, occasional DJ, and keen climber.
         </motion.p>
      </div>
   )
}

export default Intro;
