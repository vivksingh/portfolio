import React, { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  type: 'work' | 'education';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
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

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      type: 'education',
      title: 'B.Tech in Computer Science',
      organization: 'KL University',
      location: 'Vijayawada, Andhra Pradesh',
      period: '2022 - 2026',
      description: [
        'Specialization in Data Science with CGPA: 8.66',
        'Relevant Courses: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Cloud Computing',
        'Active member of Google Developers Group',
        'Ranked 240 out of 4000 participants in Nokia Accelerate Challenge'
      ]
    },
    {
      id: 2,
      type: 'work',
      title: 'Software Engineering Intern',
      organization: 'Met Consultant Services',
      location: 'Remote',
      period: 'May 2024 - July 2024',
      description: [
        'Designed and implemented dynamic UI components in React.js, reducing load time by 15% and improving user engagement',
        'Refactored backend logic in Node.js and MongoDB, reducing API response time from 400ms to 320ms and increasing efficiency by 20%',
        'Implemented authentication & security protocols (JWT, OAuth) for a more secure user experience',
        'Optimized React hooks, reducing unnecessary API calls'
      ]
    },
    {
      id: 3,
      type: 'work',
      title: 'Co-leader',
      organization: 'Google Developers Group',
      location: 'KLU, Vijayawada',
      period: '2023 - Present',
      description: [
        'Leading Gen AI initiatives and organizing technical workshops',
        'Mentoring students in AI/ML technologies',
        'Organizing and managing community events'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={element} className="max-w-4xl mx-auto opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl font-bold mb-2">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-8"></div>
          
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-12">
            My academic journey and professional experience in software development.
          </p>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            {timelineItems.map((item, index) => (
              <div key={item.id} className={`mb-12 md:mb-8 relative ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className="hidden md:block absolute top-0 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-600 dark:border-blue-400 left-1/2 transform -translate-x-1/2"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      {item.type === 'work' ? (
                        <Briefcase size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                      ) : (
                        <GraduationCap size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                      )}
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {item.type === 'work' ? 'Work Experience' : 'Education'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {item.organization} | {item.location}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{item.period}</p>
                    
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;