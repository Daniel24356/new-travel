import './Nav.css'
import { useState, useEffect } from 'react';
import  Hamburger from '../Hamburger/Hamburger';
import { Link } from "react-router-dom";

function Nav() {
  
  
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight + 30;

    const handleScroll = () => {
      const windowTop = window.pageYOffset;

      if (windowTop >= headerHeight) {
        setIsSticky(true);
        if (windowTop < lastScrollTop) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsSticky(false);
        setIsVisible(true);
      }

      setLastScrollTop(windowTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <>
        <nav className='Nav1'>
            <header className={`${isSticky ? 'cs_gescout_sticky' : ''} ${isVisible ? 'cs_gescout_show' : ''}`}>
            <div className="logo">

              </div>

              <ul className='ul1'>
                  <li className='li1'><Link to="/" className="li1">Home</Link></li>
                  <li className='li1'><Link to="/countries" className="li1">Country</Link></li>
                  <li className='li1'><Link to="/tc" className="li1">Trip Catalogue</Link></li>
                  <li className='li1'><Link to="/Contact" className="li1">Contact</Link></li>
                  <li className='li1'><Link to="/about" className="li1">About</Link></li>
              </ul>

              <div className="search-bar">
              <div className="container-input">
                <input type="text" placeholder="Search" name="text" className="input"/>
                <svg fill="#fff" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                  <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fillRule="evenodd"></path>
              </svg>
              </div>  
              </div>  

              <div className="hamburger">
                  <Hamburger/>
              </div>
            </header>
        </nav>
    </>
  )
}

export default Nav