import React from 'react';
import "./Navbar.css";



const Navbar = () => {
  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav">
      <div className="logo">
        {/* Add your logo content here */}
      </div>
      <a className="navlinks" href="/">Home</a>
      <a className="navlinks" href="https://www.modelmanagement.com/models/?country=IN">Models</a>
      <a className="navlinks" href="https://www.modelmanagement.com/castings/india/">Casting</a>
      <a className="navlinks" href="#contact-form-section" onClick={(event) => handleLinkClick(event, 'contact-form-section')}>
        Contact
      </a>
      <a className="navlinks" href="https://portfoliowebsite-ljtv.onrender.com" rel="noreferrer" target="_blank">About</a>


    </div>
  );
};

export default Navbar;