// Qualifications.js

// Qualifications.js

import React from 'react';
import './Qualification.css';

const Qualifications = () => {
  const educationData = [
    {
      id: 1,
      degree: '12th',
      institution: 'K.B.P collage Pandharpur',
      year: '2016 - 2018',
    },
    {
      id: 1,
      degree: 'BE instrumentation and control',
      institution: 'd y patil college of engineering akurdi pune',
      year: '2018 - 2022',
    }
  ];

  const certificationData = [
    {
      id: 1,
      title: 'Intership',
      institution: 'Internship Studio',
      year: '2021',
    },
    {
      id: 1,
      title: 'Fullstack Web Development',
      institution: 'Prepbytes',
      year: '2022',
    }
  ];

  return (
    <section id="qualifications" className="qualifications section">
      <h2 className='section-title'>Qualifications</h2>
      <span className="section-subtitle">My journey</span>
      <div className="qualification-container">
        <div className="education">
          <h3>Education</h3>
          {educationData.map((education) => (
            <div key={education.id} className="qualification-item">
              <h4>{education.degree}</h4>
              <p>{education.institution}</p>
              <p>{education.year}</p>
            </div>
          ))}
        </div>
        <div className="certifications">
          <h3>Certifications</h3>
          {certificationData.map((certification) => (
            <div key={certification.id} className="qualification-item">
              <h4>{certification.title}</h4>
              <p>{certification.institution}</p>
              <p>{certification.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
