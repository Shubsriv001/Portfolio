import React from 'react';
import { FileText, ArrowRight, ChevronDown } from 'lucide-react';
import { aboutMeData } from '../../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background gradient element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-purple-300/30 to-blue-300/30 dark:from-purple-900/20 dark:to-blue-900/20 blur-3xl"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-pink-300/30 to-purple-300/30 dark:from-pink-900/20 dark:to-purple-900/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <div className="animate-fadeIn">
                <h2 className="inline-block text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4 tracking-wider uppercase opacity-0 animate-slideUp" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                  Hello, I'm
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 opacity-0 animate-slideUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                  {aboutMeData.name}
                </h1>
                <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-6 opacity-0 animate-slideUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                  {aboutMeData.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg opacity-0 animate-slideUp" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                  {aboutMeData.bio.split('.')[0]}.
                </p>
                <div className="flex flex-wrap gap-4 opacity-0 animate-slideUp" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                  <a 
                    href="/Shubhanshu_Srivastava_CV.pdf"
                    download 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium transition-transform hover:scale-105 active:scale-95"
                  >
                    <FileText size={18} />
                    Download CV
                  </a>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-medium transition-all hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 active:scale-95"
                  >
                    Contact Me
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-white-800 shadow-xl">
                <img 
                  src="src/utils/developer_pic.jpg" 
                  alt={aboutMeData.name} 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;