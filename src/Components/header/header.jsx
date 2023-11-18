import React, { useState, useEffect } from "react";
import "./Header.css";

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
        if (winTop >= 500) {
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
        <i className="ri-home-heart-fill"></i>
        <span>Logo</span>
      </a>
    
      <div className="main">
        <a href="#" className="user">
          <i className="ri-user-fill"></i>Sign In
        </a>
        <a href="#">Register</a>
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
          <li>
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
