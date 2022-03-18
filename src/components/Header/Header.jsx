import React from 'react'
import Resume from '../../assets/Resume.pdf'
import Headshot from '../../assets/Headshot.png' 
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container"></div>
      <h1>Reht</h1>
      <h5>Fullstack Developer</h5>

      <div className="Reht">
        <img src={Headshot} alt="Reht Cavazos headshot" />
      </div>

      <div className="contact-buttons">
        <a href={Resume} download className='btn'>Resume</a>
        <a href='#contact'className='btn btn-primary'>Contact</a>
      </div> 

{/* not sure about keeping this. neat little flair */}
      <a href='#contact' className='scroll_down'>SIDE TEXT</a>
    </header>
  )
}

export default Header
