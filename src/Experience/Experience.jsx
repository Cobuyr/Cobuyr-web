/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stage, Backdrop } from "@react-three/drei";
import { Perf } from "r3f-perf";
// import Model from './Model.js'
// import { Suspense } from 'react'
// import Placeholder from './Placeholder.js'
// import Hamburger from './Hamburger.js'
// import Fox from './Fox.js'

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} />

      <Stage
        shadows={"contact"}
        environment={"city"}
        // contactShadow={{ opacity: 0.1, blur: 3 }}
        // environment={"sunset"}?
        preset={"portrait"}
        intensity={2}
      >
        
        <mesh castShadow position={[-2, 1, 0]}>
          <boxGeometry />
          <meshStandardMaterial
            color="purple"
            // envMapIntensity={envMapIntensity}
          />
        </mesh>

        <mesh castShadow position={[2, 1, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
      </Stage>

      {/* <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh> */}

      {/* <Suspense fallback={ <Placeholder position-y={ 0.5 } scale={ [ 2, 3, 2 ] } /> }>
            <Hamburger scale={ 0.35 } />
        </Suspense>

        <Fox /> */}
    </>
  );
}
