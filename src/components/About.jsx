import aboutpic from "../assets/about.svg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        About{" "}
        <span className="bg-gradient-to-r from-purple-900 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          Me
        </span>
      </motion.h2>
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
        >
          <img className="my-10 rounded-3xl" src={aboutpic} alt="about" />
        </motion.div>
        <div className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center lg:justify-start">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1 }}
            className="text-lg xl:text-1xl my-2 max-w-xl lg:max-w-none py-6 lg:text-center text-center"
          >
            {ABOUT_TEXT}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default About;
