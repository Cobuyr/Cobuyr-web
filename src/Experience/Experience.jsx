/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import * as THREE from "three";
import {
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  GradientTexture,
  useCursor,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense, useRef, useEffect, useState } from "react";
import { easing } from "maath";
import CobuyrModel from "./CobuyrModel";
import MetaFloat from "./Metaball";
import { DoubleSide } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Experience() {
  const RingRef = useRef();

  return (
    <>
      <Perf position="top-left" />

      {/* <OrbitControls makeDefault /> */}

      <directionalLight
        castShadow
        position={[0, -5, 0]}
        intensity={0.5}
        color={"#008080"}
        shadow-normalBias={0.04}
      />
      <directionalLight
        castShadow
        position={[0, 5, 0]}
        intensity={0.5}
        color={"#800080"}
        shadow-normalBias={0.04}
      />

      {/* <pointLight
      position={[4, 0, 0]}
      intensity={15}
      color={"#008090"}
      />

      <pointLight
      position={[-4, 0, 0]}
      intensity={15}
      color={"#800080"}
      /> */}

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={0.6} radius={0.3} />
      </EffectComposer>
      <ambientLight intensity={1} />

     

      <Suspense>
        <CameraRig>
          <CobuyrModel />
          <Ring />
      <Blob/>
        </CameraRig>

        <Environment files={"./night.hdr"} background={null} blur={1} />
        {/* <Rig/> */}
        {/* <MetaFloat/> */}
      </Suspense>
    </>
  );
}

function CameraRig({ children }) {
  const group = useRef();
  // const snap = useSnapshot(state)
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.intro ? -state.viewport.width / 4 : 0, 0, 3.5],
      0.25,
      delta
    );
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 25, -state.pointer.x / 25, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}

const Ring = () => {
  const RingRef = useRef();
  useEffect(() => {
    RingRef.current.rotation.set(-Math.PI / 0.25, -Math.PI / 2, 0);
  }, []);

  useFrame((state, delta) => {
    const xRotation = state.pointer.x; // Mouse movement along the X-axis
    const yRotation = state.pointer.y; // Mouse movement along the Y-axis

    const targetRotation = [
      -Math.PI / 0.1 - yRotation / 2,
      -Math.PI / 2 - xRotation,
      0,
    ];
    easing.dampE(RingRef.current.rotation, targetRotation, 0.25, delta);
  });

  return (
    <mesh rotation={[0, 0, 0]} ref={RingRef}>
      <ringGeometry args={[1.3, 1.35, 64]} />
      <meshBasicMaterial color={"pink"} side={DoubleSide} />
    </mesh>
  );
};

function Blob() {
  const ref = useRef();
  return (
    <mesh
    >
      <sphereGeometry args={[0.25, 16, 16]} />
      {/* <MeshWobbleMaterial ref={ref} factor={100} metalness={0.5} envMapIntensity={50} wireframe speed={1}>
        <GradientTexture
          stops={[0, 0.5, 1]}
          colors={["#008080", "#800080", "#008000",]}
          size={100}
        />
      </MeshWobbleMaterial> */}
      <MeshDistortMaterial ref={ref} factor={0} distort={0.7} metalness={0.9} envMapIntensity={50} speed={1}>
        <GradientTexture
          stops={[0, 0.5, 1]}
          colors={["#008080", "#800080", "#008000",]}
          size={100}
        />
      </MeshDistortMaterial>
    </mesh>
  );
}
