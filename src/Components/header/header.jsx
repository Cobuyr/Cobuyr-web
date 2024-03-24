/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "/cb-logo-blk.jpg";
import smalllogo from "/cb-mark-blk.jpg";
import { Section } from "../inView";
import { motion } from "framer-motion";

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

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    scaleX:1,
    transition: { staggerChildren: 0.4, duration: 0.5 },
  };

  const headVariants = {
    hidden: { opacity: 0, scaleX:0, },
    visible,
  };

  return (
    <>
      <header>
        <NavLink to="/" className="logo">
          <img
            src={logo}
            // srcSet={`${logo} 700w, ${smalllogo} 400w`}
            // sizes="(max-width: 700px) 10vw,
            //  50vw"
            alt="Cobuyr Logo"
            loading="eager"
          />
        </NavLink>

        <div className="main">
          <NavLink to="/Earn" className="logo">
            {/* <lord-icon
    src="https://cdn.lordicon.com/avcjklpr.json"
    trigger="loop-on-hover"
    delay="1000"
    stroke="bold"
    // state="loop-line"
    >
</lord-icon> */}
            Book Demo
          </NavLink>

          {/* <div
            className={menuOpen ? "bx bx-x" : "bx bx-menu"}
            id="menu-icon"
            onClick={handleMenuClick}
          ></div> */}
        </div>
      </header>

      <motion.div
        className="nav-wrap"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.4 } } }}
      >
        <nav>
          <ul className={menuOpen ? "navbar open" : "navbar"}>
            <motion.li className="hide">
              <NavLink to="/">Home</NavLink>
            </motion.li>
            <motion.li variants={headVariants}>
              <NavLink to="/About">About</NavLink>
            </motion.li>
            {/* <motion.li variants={headVariants}>
              <NavLink to="/Earn">Earn</NavLink>
            </motion.li> */}
            <motion.li variants={headVariants}>
              <NavLink to="/Contact">Contact</NavLink>
            </motion.li>
            {/* <li className="unhide">
              <NavLink to="/Contact">
               Contact
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default Header;
