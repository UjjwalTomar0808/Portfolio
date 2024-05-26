import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.css';

const works=[
  {
    title: "E-commerce Website Redesign",
    description: "Redesigned the user interface and experience of an e-commerce website .",
    // description: "Redesigned the user interface and experience of an e-commerce website to improve user engagement and conversion rates.",
    imgUrl: images.about03,
    projectLink: "https://example.com/ecommerce_redesign",
    codeLink: "https://github.com/yourusername/ecommerce_redesign",
    tags: ["UI/UX", "Web App", "E-commerce"]
  },
  {
    title: "Task Management Mobile App",
    description: "Developed a mobile application for efficient task management on iOS and Android platforms.",
    imgUrl: images.about03,
    projectLink: "https://example.com/task_management_app",
    codeLink: "https://github.com/yourusername/task_management_app",
    tags: ["Mobile App", "React JS"]
  },
  {
    title: "Portfolio Website",
    description: "Designed and developed a portfolio website to showcase projects and skills.",
    imgUrl: images.about03,
    projectLink: "https://example.com/portfolio_website",
    codeLink: "https://github.com/yourusername/portfolio_website",
    tags: ["UI/UX", "Web App"]
  },
  {
    title: "Social Media Dashboard",
    description: "Created a dashboard for monitoring and analyzing social media metrics.",
    imgUrl: images.about03,
    projectLink: "https://example.com/social_media_dashboard",
    codeLink: "https://github.com/yourusername/social_media_dashboard",
    tags: ["UI/UX", "React JS", "Web App"]
  },
  {
    title: "Weather App",
    description: "Developed a weather application that provides real-time weather updates based on user location.",
    imgUrl: images.about03,
    projectLink: "https://example.com/weather_app",
    codeLink: "https://github.com/yourusername/weather_app",
    tags: ["Mobile App", "React JS"]
  },
  {
    title: "Recipe Finder",
    description: "Built a web application to search for recipes based on ingredients.",
    imgUrl: images.about03,
    projectLink: "https://example.com/recipe_finder",
    codeLink: "https://github.com/yourusername/recipe_finder",
    tags: ["Web App", "React JS"]
  },
  {
    title: "Blog Website",
    description: "Developed a blog website with features for creating, editing, and managing blog posts.",
    imgUrl: images.about03,
    projectLink: "https://example.com/blog_website",
    codeLink: "https://github.com/yourusername/blog_website",
    tags: ["Web App", "React JS"]
  },
  {
    title: "Online Learning Platform",
    description: "Created an online platform for learning various subjects through interactive courses.",
    imgUrl: images.about03,
    projectLink: "https://example.com/learning_platform",
    codeLink: "https://github.com/yourusername/learning_platform",
    tags: ["UI/UX", "Web App", "React JS"]
  },
  {
    title: "Portfolio Redesign",
    description: "Redesigned and updated personal portfolio website with new projects and features.",
    imgUrl: images.about03,
    projectLink: "https://example.com/portfolio_redesign",
    codeLink: "https://github.com/yourusername/portfolio_redesign",
    tags: ["UI/UX", "Web App"]
  },
  {
    title: "Task Tracker",
    description: "Built a task tracking application to help users organize and manage their tasks effectively.",
    imgUrl: images.about03,
    projectLink: "https://example.com/task_tracker",
    codeLink: "https://github.com/yourusername/task_tracker",
    tags: ["UI/UX", "Web App", "React JS"]
  },
];

const Work = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setFilterWork(works);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                 initial={{ opacity: 0 }}
                 whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
