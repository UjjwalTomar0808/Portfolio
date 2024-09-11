import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.css';

const works = [
  {
    title: "Campus Connect",
    description: "A campus community platform for students to connect and collaborate.",
    imgUrl: images.campus_connect ,
    projectLink: "https://example.com/campus_connect",
    codeLink: "https://github.com/UjjwalTomar0808/SM-Backend",
    tags: ["Web App", "React JS", "Node.js", "MongoDB"]
  },
  {
    title: "E-Commerce",
    description: "An online shopping platform with user authentication, product listings, and payment gateway integration.",
    imgUrl: images.ecommerce,
    projectLink: "https://example.com/ecommerce",
    codeLink: "https://github.com/UjjwalTomar0808/E-commerce",
    tags: ["Web App", "React JS", "Node.js", "MongoDB Atlas"]
  },
  {
    title: "News4U",
    description: "A real-time news app that fetches and displays the latest headlines from various sources.",
    imgUrl: images.news4u,
    projectLink: "https://example.com/news4u",
    codeLink: "https://github.com/yourusername/news4u",
    tags: ["Web App", "React JS", "CSS3", "News API"]
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects, skills, and contact details.",
    imgUrl: images.portfolio,
    projectLink: "https://example.com/portfolio",
    codeLink: "https://github.com/UjjwalTomar0808/Portfolio",
    tags: ["Web App", "React JS", "CSS3"]
  },
  {
    title: "SplitBills",
    description: "A bill-splitting app allowing users to divide expenses among friends.",
    imgUrl: images.splitbills,
    projectLink: "https://github.com/UjjwalTomar0808/splitbills",
    codeLink: "https://github.com/UjjwalTomar0808/splitbills",
    tags: ["Web App", "React JS"]
  },
  {
    title: "Tic Tac Toe",
    description: "A simple, interactive Tic Tac Toe game for browser-based play.",
    imgUrl: images.tictactoe,
    projectLink: "https://example.com/tictactoe",
    codeLink: "https://github.com/yourusername/tictactoe",
    tags: ["Web App", "HTML", "CSS", "JavaScript"]
  }
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
        {['Web App', 'React JS','UI/UX',  'All'].map((item, index) => (
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
