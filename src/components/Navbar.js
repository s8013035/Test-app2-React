import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiTongue } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <GiTongue className="navbar-icon" />
            山根音声研究室
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/* if true, show fatimes, if not, show fabars */}
            {click ? <FaTimes /> : <FaBars /> } 
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/profile' className="nav-links">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/articles' className="nav-links">
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/contacts' className="nav-links">
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/others' className="nav-links">
                Others
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/admin' className="nav-links">
                Admin
              </Link>
            </li>
            {/* only if you need a SignUp function for the website */}
            <li className='nav-btn'>
              {/* button ?: is definded by the device used to access the website */}
              {button ? (
                <Link to='/sign-up' className="btn-link">
                  <Button buttonStyle='btn--outline'>SIGN UP</Button>
                </Link>
              ) : (
                <Link to='/sign-up' className='btn-link'>
                  <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
