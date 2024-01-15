import { Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense, useRef, useEffect } from "react";
import { easing } from "maath";
import { DoubleSide } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Ring() {
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
  const isMobile = window.innerWidth < 768;

  return (
    <>
          <Perf position="top-left" />

      <ambientLight intensity={1} />

      <mesh
        rotation={[0, 0, 0]}
        ref={RingRef}
        scale={isMobile ? 0.35 : 1}
        position-y={isMobile ? 0.35 : 0}
      >
        <ringGeometry args={[1.3, 1.35, 64]} />
        <meshBasicMaterial color={"#f53d8a"} side={DoubleSide} />
      </mesh>

      <Suspense>
        <Environment files={"./night.hdr"} background={null} />
        {/* <EffectComposer disableNormalPass>
          <Bloom mipmapBlur luminanceThreshold={0.2} radius={0.8} />
        </EffectComposer> */}
      </Suspense>
    </>
  );
}
