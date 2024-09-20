import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";


const iconVariants = (direction, duration, delay) => ({
  initial: { y: direction === "up" ? -10 : 10 },
  animate: {
    y: direction === "up" ? [10, -10] : [-10, 10],
    transition: {
      duration: duration,
      delay: delay,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Skills() {
  return (
    <div className="border-b border-natural-800 pb-24 my-20 text-center text-4xl">
      <motion.h2
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y:-50}}
        transition={{duration: 1}}
        >
          <span className="bg-gradient-to-r from-purple-900 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          S
        </span>
        kills
      </motion.h2>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-50}}
      transition={{duration:1}}
      className="flex flex-wrap items-center justify-center gap-4 p-10">
        <motion.div
          variants={iconVariants("up", 2.5, 0.1)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://isocpp.org/">
          <TbBrandCpp className="text-7xl text-red-900" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants("down", 2.8, 0.3)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.python.org/">
          <FaPython className="text-7xl text-cyan-900" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants("up", 2.4, 0.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <IoLogoJavascript className="text-7xl text-yellow-400" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants("down", 2.6, 0.7)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://html5.org/">
          <FaHtml5 className="text-7xl text-orange-400" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants("up", 2.7, 0.2)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.w3.org/Style/CSS/Overview.en.html">
          <FaCss3Alt className="text-7xl text-blue-800" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants("down", 2.3, 0.4)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.mysql.com/">
          <SiMysql className="text-7xl text-white-400" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants("up", 2.9, 0.6)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://react.dev/">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants("down", 2.2, 0.8)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://tailwindcss.com/">
          <RiTailwindCssFill className="text-7xl text-blue-400" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants("up", 2.7, 0.9)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
          >
          <a href="https://www.mongodb.com/">
          <SiMongodb className="text-7xl" style={{ color: "#47A248" }} /> 
           </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
