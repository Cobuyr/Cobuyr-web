// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import Footer from "./Components/Footer/footer";
import Header from "./Components/header/header";
import Home from "./Pages/Home";
import About from "./Pages/About";


// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer/>
      <About/>
    </>
  );
}

export default App;
