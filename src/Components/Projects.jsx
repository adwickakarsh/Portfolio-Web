import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Project = () => {
  const projects = [
    {
      title: 'Weather Dekho',
      description: 'A clean, minimal weather dashboard built with React and Tailwind CSS, featuring real-time data from Open-Meteo, city autocomplete with keyboard navigation, and animated SVG weather icons.',
      githubLink: 'https://github.com/adwickakarsh/Weather-App',
      websiteLink: 'https://weather-dekho-adwick.vercel.app',
    }
  ];

  return (
    <section className="min-h-screen p-10 bg-purple-200">
      <h2 className=" bg-purple-200 z-50 text-6xl font-bold pb-20 text-center tracking-wide ">
        My Projects
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-4 pb-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`sticky p-2 transition-all duration-700 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
      style={{
        top: `${140 + index * 40}px`,
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="bg-white border-2 border-black rounded-lg p-8 hover:shadow-2xl hover:scale-110 transition-all duration-300">
        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-700 mb-6 text-lg">{project.description}</p>
        
        <div className="flex gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-purple-600 hover:scale-110 transition-all duration-500"
          >
            <ArrowUpRight size={20} />
            GitHub
          </a>
          
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-blue-700 hover:scale-110 transition-all duration-500"
            >
              <ArrowUpRight size={20} />
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;