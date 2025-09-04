import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Timeline from './components/sections/Timeline';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ScrollToTop from './components/ui/ScrollToTop';
import './utils/animations.css';

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;