import React, { useState } from 'react';
import { projectsData } from '../../data/portfolioData';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import { Project } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Category = 'All' | 'Web App' | 'Android App' | 'Cross Platform' | 'Website';
type Status = 'All' | 'completed' | 'on-going';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [activeStatus, setActiveStatus] = useState<Status>('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories: Category[] = ['All', 'Web App', 'Android App', 'Cross Platform', 'Website'];
  const statuses: Status[] = ['All', 'completed', 'on-going'];

  const filteredProjects = projectsData.filter(project => 
    (activeCategory === 'All' || project.category === activeCategory) &&
    (activeStatus === 'All' || project.status === activeStatus)
  );

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore some of my recent projects. Click on any project to see more details.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 p-1 rounded-full bg-gray-100 dark:bg-gray-800">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="inline-flex flex-wrap justify-center gap-2 p-1 rounded-full bg-gray-100 dark:bg-gray-800">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setActiveStatus(status)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeStatus === status
                      ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {status === 'on-going' ? 'Ongoing' : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            ref={ref}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                  animate={inView ? { 
                    opacity: 1, 
                    scale: 1, 
                    filter: 'blur(0px)',
                    transition: { 
                      delay: index * 0.1,
                      duration: 0.5
                    }
                  } : {}}
                  exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => openModal(project)}
                    index={index}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Projects;