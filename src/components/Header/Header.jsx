import React from 'react'
import Resume from '../../assets/Resume.pdf'
import Headshot from '../../assets/Headshot.png' 
import './header.css'

const Header = () => {
  return (
    <header>
      {/* name and title. brief intro? */}
      <div className="container header_container"></div>
      <h1>Reht</h1>
      <h5>Fullstack Developer</h5>

      {/* self pic */}
      <div className="Reht">
        <img src={Headshot} alt="Reht Cavazos headshot" />
      </div>

      {/* buttons to download resume or open contact form  */}
      <div className="contact-buttons">
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='#contact'className='btn btn-primary'>Contact Me</a>
      </div> 

    </header>
  )
}

export default Header
