import React from 'react';
import { motion } from 'framer-motion';
import { useTypingText } from '../hooks/useAnimations'; 
const Hero = () => {
  const displayText = useTypingText([
    'Full-Stack Developer',
    'AI Enthusiast',
    'Backend Builder',
    'Problem Solver',
    'GenAI Explorer',
  ], 80, 2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0F172A] relative flex flex-col justify-center items-center text-white px-4" 
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-white" 
          variants={itemVariants}
        >
          Building Clean & Scalable Web Experiences
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl mb-8 h-10 font-medium"
          variants={itemVariants}
        >
          <span className="text-blue-300">{displayText}</span> 
        </motion.div>

        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Final-year B.Tech CSE student passionate about full-stack development, AI integration, and shipping reliable applications. Ex-EDUNET Frontend Intern • Building tools with React, Node, Python, Docker & LLMs.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center flex-wrap"
          variants={itemVariants}
        >
          <a
            href="https://drive.google.com/file/d/1r1Bq4uRHqHqE2twbQRQSuRifXU57sryQ/view?usp=sharing" 
            download
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-300 border border-blue-500/50"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-gray-400 hover:border-gray-300 hover:text-gray-200 font-semibold rounded-lg transition-all duration-300"
          >
            Get in Touch
          </a>

          <div className="px-6 py-3 bg-green-700/80 border border-green-600/50 text-green-100 font-medium rounded-lg">
            Open to Opportunities
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;