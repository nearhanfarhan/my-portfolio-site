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
            Software Developer
         </motion.p>
         <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm max-w-xl mb-6 font-bold"
         >
            I'm a Full-Stack Developer based in London, who graduated from the Northcoders web development bootcamp in October 2023. 
            <br />
            I'm currently looking for work opportunities where I can make an impact. 
            <br />
            My interests include travel, food, music and sports.
         </motion.p>
      </div>
   )
}

export default Intro;
