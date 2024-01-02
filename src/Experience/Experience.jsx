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
import { DoubleSide } from "three";
import { EffectComposer, Bloom } from '@react-three/postprocessing'


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
<EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={0.6} radius={0.3} />
      </EffectComposer>
      <ambientLight intensity={1} />

      <mesh rotation={[0, -0.25, 0]}>
        <ringGeometry args={[1.3, 1.35, 64]} />
        <meshBasicMaterial
          color={"pink"} 
          side={DoubleSide}
        />
      </mesh>

      <Suspense>
        <CobuyrModel />
        {/* <AccumulativeShadows
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
        </AccumulativeShadows> */}
        <Environment preset={"night"} background={null} blur={1} />
        {/* <MetaFloat/> */}
      </Suspense>
    </>
  );
}
