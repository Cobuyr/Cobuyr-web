import { Environment } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense, useRef, useEffect, useLayoutEffect } from "react";
import { easing } from "maath";
import { DoubleSide } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { useTransform, useScroll, useTime } from "framer-motion";

export default function Ring() {
  const RingRef = useRef();
  const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;
  useEffect(() => {
    RingRef.current.rotation.set(-Math.PI / 0.25, -Math.PI / 2, 0);
  }, []);

//   useFrame((state, delta) => {
//     const xRotation = state.pointer.x; // Mouse movement along the X-axis
//     const yRotation = state.pointer.y; // Mouse movement along the Y-axis

//     const targetRotation = [
//       -Math.PI / 0.1 - yRotation / 2,
//       -Math.PI / 2 - xRotation,
//       0,
//     ];
//     easing.dampE(RingRef.current.rotation, targetRotation, 0.25, delta);
//   });

  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0.1, degreesToRadians(180)]
  );

//   const pos_x = useTransform(scrollYProgress, [0, 1], [RingRef.current.position.x, -2]);
//   const time = useTime();

  useFrame(() => {
    // RingRef.current.rotation.set(0, yAngle.get(), 0);
    // RingRef.current.position.set(pos_x, 0, 0);

    const newXPosition = 2 * scrollYProgress.get(); // Adjust the factor based on your requirement
    const newYPosition = 0; // Set the desired y-position

    RingRef.current.rotation.set(0, yAngle.get(), 0);
    RingRef.current.position.set(newXPosition, newYPosition, 0);
  });


  const isMobile = window.innerWidth < 768;

  return (
    <>
          {/* <Perf position="top-left" /> */}

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
