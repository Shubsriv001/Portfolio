import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navItems } from '../../data/portfolioData';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // default dark mode
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Portfolio
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href} 
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav>
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={item.href} 
                      className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
