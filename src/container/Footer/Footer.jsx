import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submit, setSubmit] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // setformfilled(true)
  };

  const handleSubmit = () => {
    setLoading(true);
    
  
    // Basic form validation
    if (!username || !email || !message) {
      // If any field is empty, set formfilled to false and prevent submission
      // setformfilled(false);
      // for (let i = 0; i < 1000000000000000; i++) {} // it slow down the code ,for displaying the sending message 

      setLoading(false);
      setSubmit(true);
      return;
    }
  
    // Email format validation using regular expression
    if (emailRegex.test(email)) {
      // If email format is invalid, set formfilled to false and prevent submission
      // setformfilled(false);
      setLoading(false);
      setIsFormSubmitted(true);
      return;
    }
    // Assuming validation passed, proceed with form submission
    setLoading(false);
    setSubmit(true)
  };
  

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:ujjwaltomar.0808@gmail.com" className="p-text">ujjwaltomar.0808@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 8368137469" className="p-text">+91 8368137469</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">

            <input 
            className="p-text" 
            type="text" 
            placeholder="Your Name" 
            name="username" 
            value={username} 
            style={{ border: ((!username || !username.trim()) && submit ) ? '1px solid red' : '1px solid #ccc' }}
            onChange={handleChangeInput} 
            />
          </div>
          <div className="app__flex">
                
            <input 
            className="p-text" 
            type="email" 
            placeholder="Your Email" 
            name="email" 
            value={email} 
            style={{ border: ((!email || !emailRegex.test(email)) && submit ) ? '1px solid red' : '1px solid #ccc' }}
            onChange={handleChangeInput} 
            />

          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              style={{ border: ((!message || !message.trim() ) && submit ) ? '1px solid red' : '1px solid #ccc' }}
              onChange={handleChangeInput}
            />

          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
