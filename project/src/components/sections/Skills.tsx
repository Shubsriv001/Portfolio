import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Player } from '@lottiefiles/react-lottie-player';
import { skillsData } from '../../data/portfolioData';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skillsData.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="h-40 flex items-center justify-center mb-6">
                  <Player
                    autoplay
                    loop
                    src={category.animation}
                    style={{ height: '120px', width: '120px' }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/10 to-blue-500/10 dark:from-purple-600/20 dark:to-blue-500/20 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-purple-200 dark:border-purple-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;