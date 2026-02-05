import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { projects } from '../data/portfolio'; 
import * as Icons from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const IconComponent = Icons[project.icon] || Icons.FaCode; 

  return (
    <motion.div
      className="bg-gray-800/70 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-gray-600 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      
      <div className="h-48 bg-gray-900 flex items-center justify-center">
        <IconComponent className="text-6xl text-blue-500 opacity-80" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-100">{project.title}</h3>
        <p className="text-gray-400 mb-5 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-center py-2.5 rounded-lg font-medium transition-colors duration-200"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-600 hover:border-gray-500 hover:bg-gray-700 text-gray-300 text-center py-2.5 rounded-lg font-medium transition-all duration-200"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  useScrollReveal('.reveal');

  return (
    <section id="projects" className="py-20 bg-[#0F172C] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Full-stack applications, AI tools, and backend utilities I've built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id || project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;