import { useEffect, useRef, useState } from 'react';

const TechnicalSkills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js', 'Redux'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'Figma', 'Webpack', 'Jest', 'CI/CD'],
    }
  ];

  return (
    <section className=" py-20 pt-30 px-10 bg-blue-200 flex flex-col justify-center">
      <h2 className="text-6xl font-bold mb-16 text-center tracking-wide">Technical Skills</h2>
      
      <div className="flex max-lg:flex-col gap-8 p-7">
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
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-white min-w-11/12 text-black border-2 border-black rounded-lg p-8 hover:shadow-2xl hover:scale-108 transition-all duration-500">
        <h3 className="text-3xl font-bold mb-6 border-b-2 border-black pb-3">
          {skillGroup.category}
        </h3>
        <div className="flex flex-wrap gap-4">
          {skillGroup.items.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-purple-600 transition-colors"
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