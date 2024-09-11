import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.instagram.com/ujjwaltomar0808" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/ujjwal-tomar-26a455288" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/UjjwalTomar0808" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
