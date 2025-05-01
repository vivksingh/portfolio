import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={element} className="max-w-4xl mx-auto opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Aspiring Software Engineer with a passion for building scalable applications and solving complex algorithmic problems. Strong background in full-stack development, with hands-on experience in React, Node.js, Spring Boot, and AWS.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Ranked in the top 15% globally on LeetCode, with a 3-star CodeChef rating. Looking for an SWE role to leverage my problem-solving skills and software development expertise in a fast-paced environment.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Currently pursuing B.Tech in Computer Science with specialization in Data Science at KL University, maintaining a CGPA of 8.7.
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="text-blue-600 dark:text-blue-400 font-medium w-32">Location:</span>
                  <span className="text-gray-700 dark:text-gray-300">Ghaziabad, Uttar Pradesh</span>
                </li>
                <li className="flex">
                  <span className="text-blue-600 dark:text-blue-400 font-medium w-32">Education:</span>
                  <span className="text-gray-700 dark:text-gray-300">B.Tech Computer Science</span>
                </li>
                <li className="flex">
                  <span className="text-blue-600 dark:text-blue-400 font-medium w-32">University:</span>
                  <span className="text-gray-700 dark:text-gray-300">KL University</span>
                </li>
                <li className="flex">
                  <span className="text-blue-600 dark:text-blue-400 font-medium w-32">Specialization:</span>
                  <span className="text-gray-700 dark:text-gray-300">Data Science</span>
                </li>
                <li className="flex">
                  <span className="text-blue-600 dark:text-blue-400 font-medium w-32">CGPA:</span>
                  <span className="text-gray-700 dark:text-gray-300">8.7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;