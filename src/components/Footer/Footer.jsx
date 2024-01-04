import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-con container">
            <h1 className="footer-title">Pranit</h1>

            <ul className="footer-list">
                <li>
                    <a href="#about" className='footer-link'>About</a>
                </li>
                
                <li>
                    <a href="#projects" className='footer-link'>Projects</a>
                </li>

                <li>
                    <a href="#home" className='footer-link'>Home</a>
                </li>
            </ul>

            <div className="footer-social">
            <a href="https://www.instagram.com/pranit0134/" className="footer-social-icon" target="_blank" >
              <i className="uil uil-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/pranit-kamble-1463281a8/" className="footer-social-icon" target="_blank" >
              <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/Pranit-Kamble" className="footer-social-icon" target="_blank" >
              <i className="uil uil-github"></i>
            </a>
            </div>

            <span className='footer-copy'>
                &#169; Pranit-Kamble. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer