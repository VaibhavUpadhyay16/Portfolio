import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { learningJourney } from '../data/portfolio';
import * as Icons from 'react-icons/fa';

const LearningJourney = () => {
  useScrollReveal('.reveal');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="learning" className="py-20 bg-[#0F172A] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 reveal"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learning Journey
          </h2>
          <p className="text-xl text-gray-400">
            My path through education, internships, projects, and continuous growth
          </p>
        </motion.div>

        <div className="relative">
          {/* Subtle vertical line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 md:space-y-16"
          >
            {learningJourney.map((item, index) => {
              const IconComponent = Icons[item.icon];
              const isLeft = index % 2 === 0; 

              return (
                <motion.div
                  key={index}
                  className={`timeline-item relative flex items-start md:items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  variants={itemVariants}
                >
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-gray-800 border-2 border-blue-600/50 flex items-center justify-center z-10">
                    <IconComponent className="text-blue-400 text-xl" />
                  </div>

                  <div
                    className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                      isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    } bg-gray-800/70 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300`}
                  >
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                    {item.date && (
                      <p className="text-sm text-gray-500 mt-2">{item.date}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;