import React from 'react';
import { socialLinks } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'GithubIcon':
        return <GithubIcon size={20} />;
      case 'LinkedinIcon':
        return <LinkedinIcon size={20} />;
      case 'TwitterIcon':
        return <TwitterIcon size={20} />;
      case 'InstagramIcon':
        return <InstagramIcon size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
            >
              Shubhanshu's Portfolio
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Creating unique, innovative, and Scalable digital experiences with modern  Web & Mobile technologies.
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                aria-label={social.name}
              >
                {renderIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;