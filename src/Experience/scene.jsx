import { Canvas } from "@react-three/fiber";
import "./style.css";
import Experience from "./Experience.jsx";

const Scene = () => {
  return (
    <div id="canvas-container">
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 3, 6],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
};
export default Scene;
