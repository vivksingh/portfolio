import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      
      { threshold: 0.1 }
    );

    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      if (element.current) {
        observer.unobserve(element.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div ref={element} className="max-w-4xl mx-auto opacity-0 transition-opacity duration-1000">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Hello, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Vivek Singh.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-6">
            Aspiring Software Engineer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            I'm a passionate software engineer with a strong background in full-stack development and problem-solving. 
            Currently pursuing B.Tech in Computer Science at <a href="https://www.kluniversity.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">KL University</a>.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              Get in touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              View my work
            </a>
          </div>
          
          <div className="flex space-x-5">
            <a 
              href="https://github.com/vivksingh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vivek-singh-5b6b32249" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:vivksing655@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-blue-600 dark:text-blue-400" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;