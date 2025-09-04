import React, { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div 
        className={`relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md text-white/80 hover:bg-white/20 transition-colors z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="relative h-64 sm:h-80">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 20rem)' }}>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{project.details}</p>
          
          <div className="flex flex-wrap gap-4">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-colors"
              >
                <Github size={18} />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;