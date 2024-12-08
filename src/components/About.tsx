import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Interactive Image Section */}
          <motion.div
            className="relative w-3/4 md:w-1/2 mx-auto aspect-square rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:translate-y-[-10px]"
            variants={fadeInUp}
          >
            <img
              src="/hemanth.png"
              alt="Hemanth Kumar"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p
              className="text-lg text-gray-700 flex items-center space-x-2"
              variants={fadeInUp}
            >
              <span role="img" aria-label="wave">
                👋
              </span>
              <span>
                Hi, I'm{" "}
                <strong className="text-blue-600">Hemanth Kumar M</strong>, a
                passionate and enthusiastic Full Stack Developer.
              </span>
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 flex items-center space-x-2"
              variants={fadeInUp}
            >
              <span role="img" aria-label="tools">
                🛠️
              </span>
              <span>
                As a fresher, I bring a strong foundation in modern web
                technologies and a thirst for continuous learning.
              </span>
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 flex items-center space-x-2"
              variants={fadeInUp}
            >
              <span role="img" aria-label="rocket">
                🚀
              </span>
              <span>
                I'm eager to contribute to projects that solve real-world
                problems and help businesses grow.
              </span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
