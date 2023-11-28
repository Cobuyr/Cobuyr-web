// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  // NavLink,
} from "react-router-dom";

import "./App.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import Footer from "./Components/Footer/footer";
import Header from "./Components/header/header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Sub from "./Components/sub";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>

      <Sub />
      <Footer />
    </>
  );
}

export default App;
