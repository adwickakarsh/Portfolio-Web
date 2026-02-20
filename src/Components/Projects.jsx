import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Project = () => {
  const projects = [
    {
      title: 'Pokémon Data Analytics Pipeline',
      description: 'Developed an end-to-end cloud data pipeline to ingest, process, and analyze Pokémon data using Airflow, Azure, Databricks, and Power BI. Implemented Medallion architecture for structured storage, automated workflows, and built interactive dashboards to explore attributes like type, stats, and performance, enabling efficient analytics and improved query performance.',
      githubLink: 'https://github.com/adwickakarsh/project-pikachu',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using Socket.io. Users can create projects, assign tasks, and track progress with an intuitive dashboard.',
      githubLink: 'https://github.com/yourusername/task-manager',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather forecasting dashboard that displays current weather and 7-day forecasts using OpenWeatherMap API. Built with React and features beautiful data visualizations.',
      githubLink: 'https://github.com/adwickakarsh/Weather-App',
      websiteLink: 'https://weather-dekho-adwick.vercel.app/',
    },
    {
      title: 'Social Media Clone',
      description: 'A Twitter-like social media platform with user profiles, posts, likes, comments, and follow functionality. Built using React, Express, and PostgreSQL.',
      githubLink: 'https://github.com/yourusername/social-clone',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-10 bg-blue-200">
      <h2 className="text-7xl font-bold mb-16 tracking-tight text-center">My Projects</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
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
      className={`sticky transition-all duration-700 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
      style={{
        top: `${80 + index * 20}px`,
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="bg-white border-2 border-black rounded-lg p-8 hover:shadow-2xl hover:scale-105 transition-all">
        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-700 mb-6 text-lg">{project.description}</p>
        
        <div className="flex gap-4 items-center">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-black text-white rounded-lg hover:bg-purple-600 hover:scale-110 transition-all"
          >
            <ArrowUpRight size={20} />
            GitHub
          </a>
          
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-black text-white rounded-lg hover:bg-blue-700 hover:scale-110 transition-all"
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