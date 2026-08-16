import { motion } from "framer-motion";
import skills from "../data/skills";

export const Skills = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="text-4xl md:text-4xl dark:text-white mb-1 md:mb-3 font-bold flex justify-center items-center"
      >
        Technical skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex justify-center items-center mb-5">
          <ul className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {skills.map((skill) => (
              <motion.li
                key={skill.name}
                className="relative group overflow-visible flex items-center justify-center"
                whileHover={{ scale: [null, 1.4, 1.3] }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={skill.iconUrl}
                  alt={skill.name}
                  className="w-16 h-16 group-hover:opacity-50"
                />
                <p className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center text-xs group-hover:opacity-100 bg-black/80 px-2 py-1 rounded-md transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {skill.name}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};
