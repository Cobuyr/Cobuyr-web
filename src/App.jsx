// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Footer from "./Components/Footer/footer";
import Header from "./Components/header/header";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer/>
    </>
  );
}

export default App;
