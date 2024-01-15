import { Canvas } from "@react-three/fiber";
import "../index.css";
import { useState } from "react";
import { PerformanceMonitor } from "@react-three/drei";
import Experience from "./Experience.jsx";
import LineHero from "./LineHero";
import Wavy from "./wavy";
import Ring from "./Ring";

const Scene = () => {
  const [dpr, setDpr] = useState(1.5);
  return (
    <div id="canvas-container">
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 0, 5],
        }}
        dpr={dpr}
      >
        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        ></PerformanceMonitor>
        {/* <Experience /> */}
        {/* <Wavy /> */}
        <Ring/>
      </Canvas>
      {/* <LineHero/> */}
    </div>
  );
};
export default Scene;
