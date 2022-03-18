import React from 'react';
import './navigation.css'
import HomeIcon from '@mui/icons-material/Home';

// use icons? buttons?
const Navigation = () => {
    return (
        <nav className='scroll-down'>
            <div>
                {/* content anchors */}
                <HomeIcon />
                <a href='#'>home</a>
                
                <a href='#about'>about</a>
                <a href='#portfolio'>portfolio</a>

                {/* connected resume */}
                <a href='#resume'>resume</a>
                <a href='#contact'>contact</a>
            </div>
        </nav>
    )
}
export default Navigation

