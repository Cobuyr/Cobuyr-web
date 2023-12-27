/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from 'react'
import Cobuyr from "./Cobuyr";


export default function Experience() {
  
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[0, 0, 3]}
        intensity={5.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={1} />

      <Suspense>
            <Cobuyr/>
        </Suspense>

    </>
  );
}
