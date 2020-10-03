import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiTongue } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

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

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <GiTongue className="navbar-icon" />
            山根音声研究室
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/* if true, show fatimes, if not, show fabars */}
            {click ? <FaTimes /> : <FaBars /> } 
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/profile' className="nav-links" onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/articles' className="nav-links" onClick={closeMobileMenu}>
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/contacts' className="nav-links" onClick={closeMobileMenu}>
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/others' className="nav-links" onClick={closeMobileMenu}>
                Others
              </Link>
            </li>
            {/* only if you need a SignUp function for the website */}
            <li className='nav-btn'>
              {/* button ?: is definded by the device used to access the website */}
              {button ? (
                <Link to='/admin' className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonStyle='btn--outline'>ADMIN MODE</Button>
                </Link>
              ) : (
                <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                  <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>ADMIN MODE</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
