import { Canvas } from "@react-three/fiber";
import "../index.css";
// import "../Styles/Home/Home.css";

import Experience from "./Experience.jsx";
import LineHero from "./LineHero";

const Scene = () => {
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
        dpr={[1, 1.5]}
      >
        <Experience />
      </Canvas>
      {/* <LineHero/> */}
    </div>
  );
};
export default Scene;
