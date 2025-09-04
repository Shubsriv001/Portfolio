import React from 'react';
import { ExternalLink, Github, Clock } from 'lucide-react';
import { Project } from '../../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  return (
    <div 
      className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={index * 100}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              {project.status === 'in-progress' && (
                <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500/80 backdrop-blur-sm rounded-full text-xs text-white">
                  <Clock size={12} />
                  In Progress
                </span>
              )}
            </div>
            <div className="flex gap-2">
              {project.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs text-white">
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs text-white">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        {project.status === 'in-progress' && project.progress && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600 dark:text-gray-400">Progress</span>
              <span className="text-purple-600 dark:text-purple-400">{project.progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        )}
        <div className="flex justify-between items-center">
          <button
            className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            View Details
          </button>
          <div className="flex gap-2">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-800 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label="View Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-800 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label="View Code"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;