import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 0.8 }}
    >
      <div className="flex flex-col mb-10 mx-auto">
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/c8d75ba2-30e5-485a-9005-236e9eeee011"
            method="POST"
            className="flex flex-col w-full md:w-7/12"
          >
            <h2 className="text-3xl md:text-3xl dark:text-white mb-1 md:mb-3 font-bold flex justify-center items-center my-4">
              Contact
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
              required
            />
            <button
              type="submit"
              className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-orange-500 drop-shadow-md hover:stroke-white"
            >
              Get in touch
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
