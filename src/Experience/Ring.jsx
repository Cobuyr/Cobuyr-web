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
  // const animationOrder = {
  //   init: 0,
  //   ringhide: 0.01,
  //   scaleInLeft: 0.05,
  //   LtextFadein: 0.125,
  //   LtextFadeinEnd: 0.15,
  //   branch1End: 0.2,
  //   shiftRight: 0.225,
  //   RtextFadein: 0.55,
  //   RtextFadeinEnd: 0.75,
  //   branch2End: 0.75,
  //   jumboTextIn: 0.8,
  //   jumboTextInEnd: 0.85,
  //   PartnerTextin: 1,
  // };
  // const Xpos = useTransform(
  //   scrollYProgress,
  //   [
  //     animationOrder.init,
  //     animationOrder.ringhide,
  //     animationOrder.scaleInLeft,
  //     animationOrder.LtextFadein,
  //     animationOrder.LtextFadeinEnd,
  //     animationOrder.branch1End,
  //     animationOrder.shiftRight,
  //     0.55,
  //     animationOrder.RtextFadeinEnd,
  //     animationOrder.branch2End,
  //     animationOrder.jumboTextIn,
  //     animationOrder.PartnerTextin,
  //   ],
  //   [0, 0, -6, -6, -4.5, -6, 4.5, 0,0, 0, 0, 0]
  // );
  // // const Ypos = useTransform(scrollYProgress, [0, 1], [0, -2]);
  // const scale = useTransform(
  //   scrollYProgress,
  //   [
  //     animationOrder.init,
  //     animationOrder.ringhide,
  //     animationOrder.scaleInLeft,
  //     animationOrder.LtextFadein,
  //     animationOrder.branch1End,
  //     animationOrder.Ltfadeout,
  //     animationOrder.shiftRight,  
  //     0.55,
  //     0.551,   
  //     // animationOrder.RtextFadeinEnd,
  //     // animationOrder.branch2End,
  //     // animationOrder.jumboTextIn,
  //     // animationOrder.PartnerTextin,
  //   ],
  //   [1, 0, 0, 1, 1, 0, 1,
  //     0, 1
  //     //  ,0, 1, 1,0
  //     ]
  // );


////////////////////////////

  // const animationOrder = {
  //   init: 0,
  //   ringhide: 0.01,
  //   scaleInLeft: 0.1,
  //   LtextFadein: 0.25,
  //   LtextFadeinEnd: 0.3,
  //   branch1End: 0.4,
  //   shiftRight: 0.4,
  //   RtextFadein: 0.55,
  //   RtextFadeinEnd: 0.75,
  //   branch2End: 0.75,
  //   jumboTextIn: 0.8,
  //   jumboTextInEnd: 0.85,
  //   PartnerTextin: 1,
  // };

  const { scrollYProgress } = useScroll();
  // const yAngle = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [0, degreesToRadians(180)]
  // );

  // const Xpos = useTransform(
  //   scrollYProgress,
  //   [
  //     animationOrder.init,
  //     animationOrder.ringhide,
  //     animationOrder.scaleInLeft,
  //     animationOrder.LtextFadein,
  //     animationOrder.LtextFadeinEnd,
  //     animationOrder.branch1End,
  //     animationOrder.shiftRight,
  //     animationOrder.RtextFadeinEnd,
  //     animationOrder.branch2End,
  //     animationOrder.jumboTextIn,
  //     animationOrder.PartnerTextin,
  //   ],
  //   [0, 0, -6, -4.5, -4.5, -6, 4.5, 4.5, 6, 0, 0]
  // );
  // const Ypos = useTransform(scrollYProgress, [0, 1], [0, -2]);
  // const scale = useTransform(
  //   scrollYProgress,
  //   [
  //     animationOrder.init,
  //     animationOrder.ringhide,
  //     animationOrder.scaleInLeft,
  //     animationOrder.LtextFadein,
  //     animationOrder.branch1End,
  //     animationOrder.Ltfadeout,
  //     animationOrder.shiftRight,      
  //     animationOrder.RtextFadeinEnd,
  //     animationOrder.branch2End,
  //     animationOrder.jumboTextIn,
  //     animationOrder.PartnerTextin,
  //   ],
  //   [1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1]
  // );

  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  useFrame((state, delta) => {
    const xRotation = state.pointer.x; // Mouse movement along the X-axis
    const yRotation = state.pointer.y; // Mouse movement along the Y-axis

    const targetRotation = [
      -Math.PI / 0.1 - yRotation / 2,
      -Math.PI / 0.1 - xRotation / 2,
      0,
    ];
    easing.dampE(RingRef.current.rotation, targetRotation, 0.9, delta);

    // RingRef.current.rotation.y = yAngle.get();
    // RingRef.current.position.set(Xpos.get(), 0, 0);
    RingRef.current.scale.set(scale.get());
    RingRef.current.scale.y = scale.get();

    // console.log(RingRef.current.position.x);
  });
  const isMobile = window.innerWidth < 768;

  return (
    <>
      {/* <Perf position="top-left" /> */}

      <ambientLight intensity={1} />

      <mesh
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 0, 0]}
        ref={RingRef}
        // scale={isMobile ? 0.35 : 1}
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
