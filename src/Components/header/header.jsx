import React, { useState, useEffect } from "react";
import "./header.css";

// import 'https://unpkg.com/boxicons@latest/css/boxicons.min.css';
// import 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const winTop = window.scrollY;
        if (winTop >= 100) {
          document.body.classList.add('sticky-header');
          setIsSticky(true);
        } else {
          document.body.classList.remove('sticky-header');
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
    

    <header>
      <a href="#" className="logo">
        <span>Logo</span>
      </a>
    
      <div className="main">
        <a href="#" className="get">
        {/* <lord-icon
    src="https://cdn.lordicon.com/avcjklpr.json"
    trigger="loop-on-hover"
    delay="1000"
    stroke="bold"
    // state="loop-line"
    >
</lord-icon> */}
          Get App
        </a>
    
        <div
          className={menuOpen ? "bx bx-x" : "bx bx-menu"}
          id="menu-icon"
          onClick={handleMenuClick}
        ></div>
      </div>
    </header>

<div className="nav-wrap">
      <nav>
        <ul className={menuOpen ? "navbar open" : "navbar"}>
          <li className="hide">
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
};

export default Header;
