import { useEffect, useRef, useState } from 'react';

const TechnicalSkills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Routing'],
    },
    {
      category: 'Programming',
      items: ['Python', 'SQL', 'Java', 'Shell Scripting'],
    },
    {
      category: 'Data Analysis & Libraries',
      items: ['Pandas', 'NumPy', 'PySpark', 'Data Cleaning', 'EDA', 'Data Modeling'],
    },
    {
      category: 'Visualization',
      items: ['Power BI', 'Matplotlib', 'Seaborn'],
    },
    {
      category: 'Cloud & Data Engineering',
      items: ['Azure Data Factory', 'Databricks', 'Azure Synapse', 'Azure Data Lake'],
    },
    {
      category: 'Databases',
      items: ['SQL Server', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Linux'],
    },
  ];

  return (
    <section className="min-h-screen py-20 px-10 bg-blue-200 flex flex-col justify-center">
      <h2 className="text-6xl font-bold mb-16 text-center">Technical Skills</h2>
      
      <div className="max-w-5xl mx-auto w-full space-y-6">
        {skills.map((skillGroup, index) => (
          <SkillCard key={index} skillGroup={skillGroup} index={index} />
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ skillGroup, index }) => {
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
      className={`transition-all duration-700 ${
        show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-bold mb-4">
          {skillGroup.category}
        </h3>
        <div className="flex flex-wrap gap-3">
          {skillGroup.items.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-purple-600 transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;