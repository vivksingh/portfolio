import React, { useEffect, useRef } from 'react';
import { Code, Server, Database, Terminal, Palette, Globe } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <Code size={24} className="text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'C++', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'TypeScript', level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: <Server size={24} className="text-green-600 dark:text-green-400" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Django', level: 75 },
        { name: 'Flask', level: 75 }
      ]
    },
    {
      title: 'Database',
      icon: <Database size={24} className="text-purple-600 dark:text-purple-400" />,
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 85 }
      ]
    },
    {
      title: 'DevOps',
      icon: <Terminal size={24} className="text-red-600 dark:text-red-400" />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'AWS', level: 75 }
      ]
    },
    {
      title: 'Frontend',
      icon: <Palette size={24} className="text-yellow-600 dark:text-yellow-400" />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Canvas', level: 75 }
      ]
    },
    {
      title: 'Other',
      icon: <Globe size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: [
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 75 },
        { name: 'WebSockets', level: 75 },
        { name: 'Microservices', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={element} className="max-w-4xl mx-auto opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl font-bold mb-2">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-8"></div>
          
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-12">
            Here's a comprehensive overview of my technical skills and the technologies I work with.
            I'm always learning and adding to this list.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-2">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;