
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import "./App.css";
import emailjs from '@emailjs/browser'
// import gsap from "gsap";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
// import Footer from "./Components/Footer/footer";
import Header from "./Components/header/header";
import Home from "./Pages/Home";
import About from "./Pages/About";
// import Sub from "./Components/sub";
import NoPage from "./Pages/NoPage";
import Contact from "./Pages/Contact";
import Earn from "./Pages/Earn";
import { AnimatePresence } from "framer-motion";
import Scene from "./Experience/scene";
import Platform from "./Pages/Platform";
import Industry from "./Pages/Industry";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function App() {

  emailjs.init('yL-Vlf2GBcJFMRwcI')

  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimatePresence mode="wait">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Earn" element={<Earn />} />
          <Route path="/Platform" element={<Platform />} />
          <Route path="/Industry" element={<Industry />} />
          <Route path="/Scene" element={<Scene />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
