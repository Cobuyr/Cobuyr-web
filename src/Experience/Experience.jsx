/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { OrbitControls, BakeShadows, ContactShadows, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from 'react'
import Cobuyr from "./Cobuyr";


export default function Experience() {
  
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <directionalLight
        castShadow
        position={[0, 0, 3]}
        intensity={5.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={1} /> */}

 <ambientLight intensity={4} />
      <spotLight position={[1, 5, 3]} angle={0.2} penumbra={1} intensity={3} castShadow shadow-mapSize={2048} />
      <spotLight position={[0, 10, -10]} intensity={2} angle={0.04} penumbra={2} castShadow shadow-mapSize={1024} />

      <Suspense>
            <Cobuyr/>
            {/* <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.4, 0]} far={1} width={1.5} height={1.5} blur={0.2} /> */}
        <Environment preset="night" />
        {/* <BakeShadows /> */}
        </Suspense>

    </>
  );
}
