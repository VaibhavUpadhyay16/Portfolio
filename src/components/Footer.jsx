import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <motion.h3
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Vaibhav Upadhyay
          </motion.h3>

          <p className="text-lg">
            Final-year CSE Student • Full-Stack & GenAI Enthusiast
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm">
            <a
              href="tel:+918218953686"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <FaPhone className="text-blue-400" /> +91 8218953686
            </a>
            <a
              href="mailto:vaibhavupadhyay116@gmail.com"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <FaEnvelope className="text-blue-400" /> vaibhavupadhyay116@gmail.com
            </a>
          </div>

          <motion.div
            className="flex justify-center gap-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="https://www.linkedin.com/in/vaibhav-upadhyay-78436b221/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/VaibhavUpadhyay16"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-3xl" />
            </a>
          </motion.div>

          <div className="pt-6 border-t border-gray-800 mt-8">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Vaibhav Upadhyay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;