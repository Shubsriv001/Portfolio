import React, { useState } from 'react';
import { timelineData } from '../../data/portfolioData';
import TimelineItem from '../ui/TimelineItem';

const Timeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'experience' | 'education'>('all');
  
  const filteredItems = timelineData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-full bg-gray-100 dark:bg-gray-700">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'all' 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'experience'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
                onClick={() => setActiveFilter('experience')}
              >
                Experience
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'education'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
                onClick={() => setActiveFilter('education')}
              >
                Education
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-500 z-0"></div>
            
            <div className="space-y-12 relative z-10">
              {filteredItems.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;