import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";

// function Model({ open, hinge, ...props }) {
//   const group = useRef()
//   // Load model
//   const { nodes, materials } = useGLTF('/mac-draco.glb')
//   // Take care of cursor state on hover
//   const [hovered, setHovered] = useState(false)
//   useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
//   // Make it float in the air when it's opened
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime()
//     group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1)
//     group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 10) / 4 : 0, 0.1)
//     group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 10) / 10 : 0, 0.1)
//     group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1)
//   })

//   return (
//     <group ref={group} {...props} onPointerOver={(e) => (e.stopPropagation(), setHovered(true))} onPointerOut={(e) => setHovered(false)} dispose={null}>
//       <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
//         <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
//           <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
//           <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
//           <mesh material={materials['screen.001']} geometry={nodes['Cube008_2'].geometry} />
//         </group>
//       </three.group>
//       <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
//       <group position={[0, -0.1, 3.39]}>
//         <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
//         <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
//       </group>
//       <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
//     </group>
//   )
// }

export default function HeroScene() {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });
  return (
    <web.div
      style={{ background: props.open.to([0, 1], ["#040404", "#191919"]) }}
      className="scene"
    >
      <web.h1
        style={{
          opacity: props.open.to([0, 1], [1, 0]),
          transform: props.open.to(
            (o) => `translate3d(-50%,${o * 50 - 100}px,0)`
          ),
        }}
        className="scene-h1"
      >
        <span className="mainText">Connecting Buyers.</span>
      </web.h1>
      {/* <web.div className="message">
        <p class="received">
          It was loud. We just laid there and said &ldquo;is this an earthquake?
          I think this is an earthquake.&rdquo;
        </p>
        <p class="sent">Glad you&rsquo;re safe</p>
      </web.div>
      <web.div className="message">
        <div class="received">
          <h4>Justina Lake</h4>
          <p >
            It was loud. We just laid there and said &ldquo;is this an
            earthquake? I think this is an earthquake.&rdquo;
          </p>
        </div>
        <div class="sent">
          <h4>Ava John</h4>  
        <p >Glad you&rsquo;re safe</p>
        </div>
      </web.div> */}

      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
        <three.spotLight
          position={[0, 7, 0]}
          intensity={10}
          color={props.open.to([0, 1], ["#f0f0f0", "#ffffff"])}
        />
        <Suspense fallback={null}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(!open))}
          >
            <Model open={open} hinge={props.open.to([0, 1], [1.35, -0.425])} />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
        />
      </Canvas>
    </web.div>
  );
}

export function Model({ open, hinge, ...props }) {
  const { nodes, materials } = useGLTF("./laptop.glb");

  const group = useRef();

  const [hovered, setHovered] = useState(false);
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 10) / 10 + 0.25 : 0,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? Math.sin(t / 10) / 4 : 0,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 10) / 10 : 0,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? (-2 + Math.sin(t)) / 3 : -4.3,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      dispose={null}
    >
      <three.group rotation-x={hinge}>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.aluminium}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials["matte.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_2.geometry}
            material={materials["screen.001"]}
          />
        </group>
      </three.group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard.geometry}
        material={materials.keys}
      />
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.aluminium}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.trackpad}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.touchbar.geometry}
        material={materials.touchbar}
      />
    </group>
  );
}

useGLTF.preload("./laptop.glb");
