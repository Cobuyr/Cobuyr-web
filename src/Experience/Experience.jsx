/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import {
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import CobuyrModel from "./CobuyrModel";
import MetaFloat from "./Metaball";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[0, -5, 0]}
        intensity={1}
        shadow-normalBias={0.04}
      />
      <directionalLight
        castShadow
        position={[0, 5, 0]}
        intensity={1}
        shadow-normalBias={0.04}
      />

      <ambientLight intensity={1} />

      <Suspense>
        <CobuyrModel />
        <AccumulativeShadows
          temporal
          frames={200}
          color="purple"
          colorBlend={0.5}
          opacity={1}
          scale={10}
          alphaTest={0.85}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            ambient={0.5}
            position={[5, 3, 2]}
            bias={0.001}
          />
        </AccumulativeShadows>
        <Environment preset={"night"} background={null} blur={1}   />
        {/* <MetaFloat/> */}
      </Suspense>
    </>
  );
}
