/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import {
  OrbitControls,
  BakeShadows,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import CobuyrModel from "./CobuyrModel";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[0, -5, 0]}
        intensity={2}
        shadow-normalBias={0.04}
      />
      <directionalLight
        castShadow
        position={[0, 5, 0]}
        intensity={2}
        shadow-normalBias={0.04}
      />

      <ambientLight intensity={4} />
     

      <Suspense>
        <CobuyrModel />
        {/* <Environment preset="night" /> */}
      </Suspense>
    </>
  );
}
