import React from 'react';
import { TimelineItem as TimelineItemType } from '../../types';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
      data-aos={isEven ? 'fade-left' : 'fade-right'}
      data-aos-duration="1000"
      data-aos-delay={index * 100}
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <motion.div 
          className={`relative p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg group ${
            isEven ? 'md:ml-8' : 'md:mr-8'
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 animate-border-flow" />
          </div>

          <div className={`absolute top-6 ${
            isEven ? '-right-4 md:block hidden' : '-left-4 md:block hidden'
          } w-4 h-4 transform rotate-45 bg-white dark:bg-gray-900 z-10`}></div>

          <div className="relative z-10">
            <div className="mb-2">
              <span 
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                  item.type === 'experience' 
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
                    : 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                }`}
              >
                {item.type === 'experience' ? 'Experience' : 'Education'}
              </span>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">{item.organization}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
            {item.tags && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full border-4 border-white dark:border-gray-800 z-10 flex items-center justify-center text-white">
        {item.type === 'experience' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
      </div>
      <div className="md:w-1/2 hidden md:block"></div>
    </div>
  );
};

export default TimelineItem;