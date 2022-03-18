import React from 'react'
import Resume from '../../assets/Resume.pdf' 

const Header = () => {
  return (
    <header>
      <div className="container header_container"></div>
      <h5>Hello I'm</h5>
      <h1>Reht</h1>
      <h5>Fullstack Developer</h5>

      <div className="contact buttons">
        <a href={Resume} download className='btn'>Resume</a>
        <a href='#contact'className='btn btn-primary'>Contact</a>
      </div> 
    </header>
  )
}

export default Header
