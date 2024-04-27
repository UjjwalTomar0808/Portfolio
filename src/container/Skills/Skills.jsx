
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css'; 
import { AppWrap, MotionWrap } from '../../wrapper';

const Tooltip = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && <div className="tooltip">{content}</div>}
    </div>
  );
};


const skills = [
  {
    name: 'HTML',
    bgcolor: '#E34C26',
    icon: 'html5',
  },
  {
    name: 'CSS',
    bgcolor: '#1572B6',
    icon: 'css3',
  },
  {
    name: 'JavaScript',
    bgcolor: '#F7DF1E',
    icon: 'javascript',
  },
  {
    name: 'React',
    bgcolor: '#61DAFB',
    icon: 'react',
  },
  {
    name: 'Node.js',
    bgcolor: '#68A063',
    icon: 'nodejs',
  },
  {
    name: 'Python',
    bgcolor: '#3776AB',
    icon: 'python',
  },
  {
    name: 'UI/UX Design',
    bgcolor: '#663399',
    icon: 'palette',
  },
  {
    name: 'Responsive Design',
    bgcolor: '#009688',
    icon: 'aspect_ratio',
  },
  {
    name: 'Mobile App Development',
    bgcolor: '#3F51B5',
    icon: 'phone_android',
  },
  {
    name: 'Web Development',
    bgcolor: '#795548',
    icon: 'web',
  },
];

const experiences = [
  {
    year: '2023-2024',
    work: {
      name: 'Web Developer',
      company: 'Tech Solutions Inc.',
      description: 'Developed and maintained web applications using modern technologies such as React.js and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    },
  },
  {
    year: '2021-2023',
    work: {
      name: 'Software Engineer',
      company: 'Innovative Technologies Ltd.',
      description: 'Contributed to the development of a scalable and robust software platform for data analytics. Designed and implemented new features and enhancements.',
    },
  },
  {
    year: '2019-2021',
    work: {
      name: 'Frontend Developer',
      company: 'Digital Solutions Co.',
      description: 'Responsible for building responsive and user-friendly web interfaces. Worked closely with design teams to ensure pixel-perfect implementation of UI/UX designs.',
    },
  },
];

const Skills = () => (
  <>
    <h2 className="head-text">Skills & Experiences</h2>

    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div
              className="app__flex"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img src={skill.icon} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="app__skills-exp">
        {experiences.map((experience) => (
          <motion.div
            className="app__skills-exp-item"
            key={experience.year}
          >
            <div className="app__skills-exp-year">
              <p className="bold-text">{experience.year}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {experience.work && (
                <Tooltip content={experience.work.description}>
                  <div
                    className="app__skills-exp-work"
                    data-tip
                    data-for={experience.work.name}
                  >
                    <h4 className="bold-text">{experience.work.name}</h4>
                    <p className="p-text">{experience.work.company}</p>
                  </div>
                </Tooltip>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </>
);

// export default Skills;
export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
