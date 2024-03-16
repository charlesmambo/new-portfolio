import React from 'react';
import styles from './Header.css'

const Header = () => {
  return (
    <header className='header'>
          <ul className='nav-items'>
            <li className='logo-box'>
              <a className='logo' href="#">C.M</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">PROJECTS</a>
            </li>
            <li>
              <a href="#">Say Hello</a>
            </li>
          </ul>

          <div className="intro-section">
              <h1>Hi,</h1>
              <h3>I`m Charles Mambo</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam exercitationem ut facilis modi fugiat pariatur vero nisi iusto expedita? Dolores possimus placeat corrupti beatae, commodi reiciendis cupiditate nostrum expedita repudiandae?</p>
          </div>
    </header>
  )
}

export default Header