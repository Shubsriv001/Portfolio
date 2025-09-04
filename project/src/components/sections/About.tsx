import React from 'react';
import { aboutMeData, skillsData } from '../../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className="space-y-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {aboutMeData.bio}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Location</h3>
                  <p className="text-gray-800 dark:text-gray-200">{aboutMeData.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Email</h3>
                  <p className="text-gray-800 dark:text-gray-200">{aboutMeData.email}</p>
                </div>
              </div>
            </div>

            <div 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">My Skills</h3>
              
              <div className="space-y-8">
                {skillsData.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;