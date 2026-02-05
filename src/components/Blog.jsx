import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';

const Blog = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 reveal"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 gradient-text">Blog & Insights</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Designing My Dev Path: How I'm Using AI & Full Stack to Shape My Career
          </p>
        </motion.div>

        <motion.div
          className="reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h3 className="text-3xl font-semibold mb-6 text-white">My Developer Journey</h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
         Start with the first line of Code in 2021 and then Code become part of life or life become part of code.
            </p>

            <motion.div
              className="grid md:grid-cols-2 gap-8 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <motion.div
                className="bg-gray-900/50 rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-xl font-semibold text-blue-400 mb-3">🚀 Project Deep Dives</h4>
                <p className="text-gray-300 text-sm">
                  Breaking down real projects - from AI Career Mentor to Live Chat applications,
                  sharing the challenges and solutions.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-900/50 rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-xl font-semibold text-green-400 mb-3">🎯 Learning Insights</h4>
                <p className="text-gray-300 text-sm">
                  My journey from HTML to AI integration, sharing what worked and what didn't in my
                  development path.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 mb-6 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-semibold text-white mb-3">📚 Featured: "Design Your 2nd Brain"</h4>
              <p className="text-gray-100 mb-3">
                My latest book for creators and developers navigating the AI age - build your
                digital thinking system.
              </p>
              <a
                href="https://amzn.in/d/2zxYyKr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-hover magnetic"
              >
                Get the Book
              </a>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-semibold text-white mb-3">🤖 AI Career Mentor Tool</h4>
              <p className="text-gray-100 mb-3">
                Get lifetime access to my AI-powered career guidance tool - deploy your own smart
                career assistant.
              </p>
              <a
                href="https://activewave2.gumroad.com/l/aiesra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-hover magnetic"
              >
                Get Access
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
