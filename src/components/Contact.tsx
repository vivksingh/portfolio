import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
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
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={element} className="max-w-3xl mx-auto opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-8"></div>

          <p className="text-gray-700 dark:text-gray-300 mb-12">
            Feel free to reach out via any of the platforms below!
          </p>

          <div className="space-y-8">
            <div className="flex items-center">
              <Mail className="text-blue-600 dark:text-blue-400 mr-3" size={20} />
              <a href="mailto:vivksing655@gmail.com" className="text-gray-700 dark:text-gray-300 hover:underline">
                vivksing655@gmail.com
              </a>
            </div>

            <div className="flex items-center">
              <Phone className="text-blue-600 dark:text-blue-400 mr-3" size={20} />
              <a href="tel:+919971973819" className="text-gray-700 dark:text-gray-300 hover:underline">
                +91 9971973819
              </a>
            </div>

            <div className="flex items-center">
              <MapPin className="text-blue-600 dark:text-blue-400 mr-3" size={20} />
              <span className="text-gray-700 dark:text-gray-300">Ghaziabad, Uttar Pradesh</span>
            </div>

            <div className="flex items-center">
              <Github className="text-blue-600 dark:text-blue-400 mr-3" size={20} />
              <a href="https://github.com/vivksingh" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:underline">
              https://github.com/vivksingh
              </a>
            </div>

            <div className="flex items-center">
              <Linkedin className="text-blue-600 dark:text-blue-400 mr-3" size={20} />
              <a href="https://www.linkedin.com/in/vivek-singh-5b6b32249/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:underline">
              https://www.linkedin.com/in/vivek-singh-5b6b32249/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
