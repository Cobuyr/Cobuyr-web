/* eslint-disable react/no-unknown-property */

import * as THREE from "three";
import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { useGLTF, shaderMaterial, useTexture } from "@react-three/drei";
import { WaveMaterial } from './WaveMaterial'
import { easing } from 'maath'

import colorwaveVert from './shaders/vertex.js'
import colorwaveFrag from './shaders/fragment.js'
// import glsl from "babel-plugin-glsl/macro";
// import glsl from "glslify";

// const colorShade = shaderMaterial(
//   // Uniform
//   {
//     uTime: 0,
//     uColor: new THREE.Color(0.0, 0.0, 0.0),
//     uTexture: new THREE.Texture(),
//   },
//   colorwaveVert,
//   colorwaveFrag
// );
// extend({ colorShade });
// console.log(colorShade);


export default function Cobuyr(props) {
  const uniforms = useMemo(
    () => ({
      uColor: {
        value: new THREE.Color(0.0, 0.0, 0.0),
      },
      uTexture: {
        value: new THREE.Texture(),
      },
      uTime: {
        value: 0.0,
      },
    }),
    []
  );

  const alien = useTexture({

    map: './Alien/Alien_Metal_002_COLOR.jpg',
    displacementMap: './Alien/Alien_Metal_002_DISP.png',
    normalMap: './Alien/Alien_Metal_002_NORM.jpg',
    roughnessMap: './Alien/Alien_Metal_002_ROUGH.jpg',
    aoMap: './Alien/Alien_Metal_002_OCC.jpg',
})
  const wood = useTexture({

    map: './WOOD/woodC.jpg',
    displacementMap: './WOOD/woodD.jpg',
    normalMap: './WOOD/woodN.jpg',
    roughnessMap: './WOOD/woodR.jpg',
    aoMap: './WOOD/woodA.jpg',
})
  const dec = useTexture({

    map: './dec/wcol.jpg',
    roughnessMap: './dec/wrough.jpg',
})

// const ref = useRef()
// const { viewport, size } = useThree()
// useFrame((state, delta) => {
//   ref.current.time += delta
//   easing.damp3(ref.current.pointer, state.pointer, 0.2, delta)
// })

  const { nodes, materials } = useGLTF("./cobuyr.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Rhand"
        castShadow
        receiveShadow
        geometry={nodes.hends.geometry}
      >
         {/* <waveMaterial ref={ref} key={WaveMaterial.key} resolution={[size.width * viewport.dpr, size.height * viewport.dpr]} /> */}
       <meshStandardMaterial {...dec} displacementScale={0} />
      </mesh>

      <mesh
        name="Lhand"
        castShadow
        receiveShadow
        geometry={nodes.hends001.geometry}
        // material={colorShade}
      >
       
        {/* <shaderMaterial
        fragmentShader={colorwaveFrag}
        vertexShader={colorwaveVert}
        uniforms={uniforms}
        /> */}
         <meshStandardMaterial {...dec} displacementScale={0} />
      </mesh>
      {/* <mesh>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial {...alien} />
  </mesh> */}
      <mesh
        name="Ring"
        // castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Wave 2"]}
       >
         {/* <waveMaterial ref={ref} key={WaveMaterial.key} resolution={[size.width * viewport.dpr, size.height * viewport.dpr]} /> */}
       {/* <meshStandardMaterial {...dec} displacementScale={0} /> */}
      </mesh>
    </group>
  );
}

useGLTF.preload("/cobuyr.glb");
