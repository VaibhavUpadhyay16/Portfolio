import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { skills } from '../data/portfolio';
import * as Icons from 'react-icons/fa';
import image from './image.jpeg'
const About = () => {
  useScrollReveal('.reveal');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
   <section
  id="about"
  className="py-20 bg-[#0F172B] overflow-hidden" 
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center mb-16 reveal fade-in"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}  
    >
      <h2 className="text-5xl font-bold text-white mb-4">
        About Me
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        "Think, Implement, Push the Code"
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        className="reveal fade-in"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-2 border-gray-700 shadow-xl">
          <img 
            src={image} 
            alt="Vaibhav Upadhyay" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        className="reveal fade-in"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-3xl font-semibold mb-6 text-gray-100"
          variants={itemVariants}
        >
          Hi, I'm Vaibhav!
        </motion.h3>

        <motion.p
          className="text-gray-300 mb-6 leading-relaxed"
          variants={itemVariants}
        >
          I’m a final-year Computer Science undergraduate passionate about full-stack web development and building practical, user-focused software. I work comfortably with React, Node.js, Express, Flask, MongoDB, MySQL, and modern JavaScript/TypeScript.
        </motion.p>

        <motion.p
          className="text-gray-300 mb-6 leading-relaxed"
          variants={itemVariants}
        >
          As a Frontend Development Intern at EDUNET (July–Aug 2024), I contributed to a live EdTech platform — implementing course listings, article sections, course creation features, admin/user authentication, and responsive UI components.
        </motion.p>

        <motion.p
          className="text-gray-300 mb-8 leading-relaxed"
          variants={itemVariants}
        >
          My projects include an AI-powered career mentor platform (React + Node + LLM integration), a memory-efficient Elasticsearch deduplication CLI tool (Python + Docker), and clean full-stack templates (React + Flask/TypeScript/Tailwind). I enjoy writing maintainable backend logic, solving DSA problems, and shipping features that solve real problems.
        </motion.p>

        <motion.h4
          className="text-xl font-semibold mb-6 text-gray-200"
          variants={itemVariants}
        >
          Technical Skills
        </motion.h4>

        <motion.div
          className="grid grid-cols-4 md:grid-cols-6 gap-4"
          variants={containerVariants}
        >
          {skills.map((skill, index) => {
            const IconComponent = Icons[skill.icon];
            return (
              <motion.div
                key={index}
                className="skill-icon flex flex-col items-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}   
              >
                <IconComponent className={`text-3xl mb-2 ${skill.color || 'text-blue-400'}`} />
                <p className="text-sm font-medium text-gray-300">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default About;
