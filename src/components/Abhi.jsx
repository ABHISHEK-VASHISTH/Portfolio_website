import { ABHI_INTRO } from "../constants";
import profilepic from "../assets/abhiprofilepic.svg";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

function Abhi() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 mt-8 lg:mt-4">
      <div className="flex flex-wrap items-center">

        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-4xl sm:text-5xl lg:text-8xl font-thin tracking-tight whitespace-nowrap text-center lg:text-left"
            >
              Abhishek Vashisth
            </motion.h1>
            <motion.span
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl sm:text-2xl lg:text-4xl tracking-tight text-transparent text-center lg:text-left"
            >
              Learner || Programmer || Developer
            </motion.span>
            <motion.p
              variants={container(2.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
            >
              {ABHI_INTRO}
            </motion.p>
          </div>
        </div>

        <motion.div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-10">
          <motion.img
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={profilepic}
            alt="Abhishek Vashisth"
            className="w-3/4 sm:w-1/2 lg:w-full"
            loading="lazy" 
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Abhi;
