import './Hamburger.css'
import { useState} from 'react';



function Hamburger() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
                <div className="hamburger-menu">
      <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <span id='bar1'></span>
        <span id='bar2'></span>
        <span id='bar3'></span>
      </button>
        {/* <div className="hamburger-menu">
      <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span id='bar1'></span>
        <span id='bar2'></span>
        <span id='bar3'></span>
      </button> */}
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Trip Catelogue</a></li>
          <li><a href="/services">Countries</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/contact">About</a></li>
        </ul>
      </nav>
    {/* </div> */}
    </div>

    {/* #checkbox:checked + .toggle .bars {
    position: absolute;
    transition-duration: .5s;
  }
  
  #checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: .5s;
  }
  
  #checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: .5s;
  }
  
  #checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: .5s;
  }
  
  #checkbox:checked + .toggle {
    transition-duration: .5s;
    transform: rotate(180deg);
} */}

    </>


);
  
}

export default Hamburger;