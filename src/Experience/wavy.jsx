import React from "react";
import {
  Environment,
  MeshDistortMaterial,
  GradientTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense, useRef, useEffect } from "react";
import { easing } from "maath";
import { DoubleSide } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function wavy() {
  return (
    <>
      <Perf position="top-left" />

      <Light />
      <ambientLight intensity={1} />
      <mesh>
        <planeGeometry args={[2, 2, 16]} />
        <meshBasicMaterial color={"#ff0000"}/>
      </mesh>
      <Suspense>
        <Environment files={"./night.hdr"} background={null} />
      </Suspense>
    </>
  );
}
