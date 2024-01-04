import React from 'react';
import { useState } from 'react';
import './Header.css'

const Header = () => {
  window.addEventListener('scroll',function(){
    const header = this.document.querySelector('.header');
    if(this.scrollY >= 80) header.classList.add('scroll-header');
      else header.classList.remove("scroll-header")
  })
  const [toggle,setToggle]=useState(false)

  return (
    <header className='header'>
      <nav className="nav container">
        <a className='nav-logo' href="">Pranit</a>
        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className='nav-link'>
              <i className="uil uil-estate nav-icon"></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className='nav-link'>
              <i className="uil uil-user nav-icon"></i>About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className='nav-link'>
              <i className="uil uil-file-alt nav-icon"></i>Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#qualifications" className='nav-link'>
              <i className="uil uil-suitcase nav-icon"></i>Qualifications
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className='nav-link'>
              <i className="uil uil-scenery nav-icon"></i>Projects
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="contact" className='nav-link'>
              <i className="uil uil-message nav-icon"></i>Contact
              </a>
            </li> */}
          </ul>
         <div className="nav-close" onClick={()=> setToggle(!toggle)}>
         <i className="uil uil-times"></i>
         </div>
        </div>
          <div className="nav-toggle" onClick={()=> setToggle(!toggle) }>
          <i className="uil uil-apps"></i>
          </div>
      </nav>
    </header>
  );
}

export default Header;