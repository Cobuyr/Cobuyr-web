import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MarchingCubes, MarchingCube, MeshTransmissionMaterial, Environment, Bounds, Text } from '@react-three/drei'
import { Physics, RigidBody, BallCollider } from '@react-three/rapier'

function MetaBall({ color, vec = new THREE.Vector3(), ...props }) {
  const api = useRef()
  useFrame((state, delta) => {
    delta = Math.min(delta, 0.1)
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiplyScalar(delta * -0.01),
    )
  })
  return (
    <RigidBody ref={api} colliders={false} linearDamping={4} angularDamping={0.95} {...props}>
      <MarchingCube strength={0.35} subtract={6} color={color} />
      <mesh>
        <sphereGeometry args={[0.04]} />
        <meshBasicMaterial color="black" toneMapped={false} />
      </mesh>
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  )
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(({ pointer, viewport }) => {
    const { width, height } = viewport.getCurrentViewport()
    vec.set(pointer.x * (width / 2), pointer.y * (height / 2), 0)
    ref.current.setNextKinematicTranslation(vec)
  })
  return (
    <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
      <MarchingCube strength={0.5} subtract={10} color="white" />
      <mesh>
        <sphereGeometry args={[0.03]} />
        <meshBasicMaterial color="pink" toneMapped={false} />
      </mesh>
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  )
}

export default function MetaFloat() {
  return (
   <>
   <Physics gravity={[0, 0, 0]}>
        <MarchingCubes resolution={40} maxPolyCount={10000} enableUvs={false} enableColors>
          <MeshTransmissionMaterial
            vertexColors
            transmissionSampler
            // transmission={0.9}
            thickness={0.15}
            roughness={0}
            chromaticAberration={0.15}
            anisotropy={0.5}
            envMapIntensity={0.5}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.1}
          />
          <MetaBall color="indianred" position={[1, 1, 0.5]} />
          <MetaBall color="skyblue" position={[-1, -1, -0.5]} />
          <MetaBall color="teal" position={[2, 2, 0.5]} />
          <MetaBall color="orange" position={[-2, -2, -0.5]} />
          <MetaBall color="hotpink" position={[3, 3, 0.5]} />
          <MetaBall color="aquamarine" position={[-3, -3, -0.5]} />
          <Pointer />
        </MarchingCubes>
      </Physics>
     
      {/* Zoom to fit a 1/1/1 box to match the marching cubes */}
      {/* <Bounds fit clip observe margin={1}>
        <mesh visible={false}>
          <boxGeometry />
        </mesh>
      </Bounds> */}
   </>  
  )
}
