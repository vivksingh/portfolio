import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
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

  const projects: Project[] = [
    {
      id: 1,
      title: 'JavaScript Game Development Library',
      description: 'A flexible game development framework to create custom game mechanics and controls. Optimized rendering pipeline, reducing frame lag by 15%.',
      image: 'https://images.pexels.com/photos/7360388/pexels-photo-7360388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['JavaScript', 'HTML5 Canvas', 'JSON', 'Object-Oriented Design'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Full-Stack Donation Website',
      description: 'A secure donation platform with JWT authentication and ownership tracking. Reduced API response time by 25% using optimized SQL queries.',
      image: 'https://images.pexels.com/photos/6994985/pexels-photo-6994985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Spring Boot', 'React', 'Tailwind CSS', 'PostgreSQL', 'JWT'],
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'AI Translation Chatbot',
      description: 'A Telegram-integrated chat bot using Gemini AI to translate messages into English. Adopted by 50+ students for improved accessibility.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'Gemini AI', 'Telegram API', 'Natural Language Processing'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={element} className="max-w-7xl mx-auto opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-8"></div>
          
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-12">
            Here are some of my notable projects that showcase my technical skills and problem-solving abilities.
            Each project represents different challenges I've tackled and technologies I've mastered.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.featured).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/vivksingh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              See more on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;