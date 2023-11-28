/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";


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
        document.body.classList.add("sticky-header");
        setIsSticky(true);
      } else {
        document.body.classList.remove("sticky-header");
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <NavLink to="/" className="logo">
          <span>Logo</span>
        </NavLink>

        <div className="main">
          <NavLink to="/get" className="logo">
           
              {/* <lord-icon
    src="https://cdn.lordicon.com/avcjklpr.json"
    trigger="loop-on-hover"
    delay="1000"
    stroke="bold"
    // state="loop-line"
    >
</lord-icon> */}
              Get App
         
          </NavLink>

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
            <NavLink to="/">
               Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About">
               About
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing">
               Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact">
               Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
