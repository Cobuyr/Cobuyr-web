import { Canvas } from "@react-three/fiber";
import "../index.css";
import { useState } from "react";
import { PerformanceMonitor } from "@react-three/drei";
import Experience from "./Experience.jsx";
import LineHero from "./LineHero";

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
          position: [0, 0, 3.5],
        }}
        dpr={dpr}
        // dpr={[1, 2]}
      >
        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        ></PerformanceMonitor>
        <Experience />
      </Canvas>
      {/* <LineHero/> */}
    </div>
  );
};
export default Scene;
