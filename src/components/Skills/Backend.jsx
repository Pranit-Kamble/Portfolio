import React from 'react'

const Backend = () => {
  return (
    <div className="skills-content">
        <h3 className="skills-title">Backend-Developer</h3>

        <div className="skills-box">
            <div className="skills-group">
                <div className="skills-data">
                <i className='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills-name">Node Js</h3>
                    <span className="skill-level">Intermediate</span>
                </div>
                </div>


                <div className="skills-data">
                <i className='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills-name">Express</h3>
                    <span className="skill-level">Advanced</span>
                </div>
                </div>

                
                <div className="skills-data">
                <i className='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills-name">MongoDB</h3>
                    <span className="skill-level">Basic</span>
                </div>
                </div>
            </div>
            

            
        </div>
    </div>
  )
}

export default Backend