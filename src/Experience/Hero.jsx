import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  useGLTF,
  ContactShadows,
  useTexture,
  Decal,
  useEnvironment,
  // SpotLight,
  // useDepthBuffer,
  // OrbitControls,
  useCursor,
  Text,
  RenderTexture,
  PerspectiveCamera,
} from "@react-three/drei";

import { gsap } from "gsap";
import city from "/city.hdr";

import base from "/avatar.png";
import avatar0 from "/0.webp";
import avatar1 from "/1.webp";
import avatar2 from "/2.webp";
import avatar3 from "/3.webp";
import avatar4 from "/4.webp";
import avatar5 from "/5.webp";
import avatar6 from "/6.webp";
import avatar7 from "/7.webp";
import avatar8 from "/8.webp";
import avatar9 from "/9.webp";
import avatar10 from "/10.webp";

export default function HeroScene() {
  const env = useEnvironment({ files: city });
  const [ref, inView] = useInView({ threshold: 0.65 });
  const [open, setOpen] = useState(false);
  const sceneRef = useRef();

  useEffect(() => {
    if (inView) {
      setOpen(true);
    }
  }, [inView]);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        sceneRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );

      // GSAP animations for chat messages
      gsap.fromTo(
        ".message",
        {
          opacity: 0,
          scale: 0,
          x: (i) => (i % 2 === 0 ? 65 : -125), // Alternate between left and right
          y: (i) => (i % 2 === 0 ? 25 : -130), // Alternate between top and bottom
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    } else {
      // Reset animations when closed
      // gsap.to(".message", {
      //   opacity: 0,
      //   scale: 0,
      //   x: (i) => (i % 2 === 0 ? 65 : -125),
      //   y: (i) => (i % 2 === 0 ? 25 : -130),
      //   duration: 1,
      //   stagger: 0.2,
      //   ease: "power2.out",
      // });
    }
  }, [open]);
  return (
    <div ref={ref} className="scene">
      <h1 ref={sceneRef} className="scene-h1">
        Connecting <span className="mainText">Buyers.</span>
      </h1>

      <div
        className="message"
        style={{
          left: "55%",
          top: "35%",
        }}
      >
        <Chat
          avatar={avatar2}
          Tname={"Alan Jury"}
          text={
            "I found a Gaming setup package deal and I only want the custom gaming chair, Who would like to join me?"
          }
          type={"sent"}
        />

        <Chat
          avatar={avatar3}
          Tname={"Zachary D."}
          text={
            "ohhh yeaahh, I saw the same deal and need only the High-sens mouse and Foldable table, can i join and pay for only those?"
          }
          type={"received"}
        />
      </div>

      <div
        className="message"
        style={{
          left: "50%",
          top: "25%",
        }}
      >
        <Chat
          avatar={avatar4}
          Tname={"Vincent Moore"}
          text={
            "Looking to buy 30 pieces of vintage vinyl records at a discount. Anyone interested in splitting the purchase?"
          }
          type={"sent"}
        />

        <Chat
          avatar={avatar0}
          Tname={"Sophia Adams"}
          text={"I'm interested! I collect vinyl too. I can take 15."}
          type={"received"}
        />

        <Chat
          avatar={avatar6}
          Tname={"Oliver Scott"}
          text={
            "Count me in! I'll take 10, and I know a friend who might want the remaining 5."
          }
          type={"sent"}
        />
      </div>

      <div
        className="message"
        style={{
          top: "25%",
          left: "45%",
        }}
      >
        <Chat
          avatar={avatar1}
          Tname={"Emma"}
          text={
            "Looking to buy 70 pieces of base cut rings at a discount. Anyone want to share the purchase? I'm taking 20 pieces"
          }
          type={"sent"}
        />

        <Chat
          avatar={avatar7}
          Tname={"William Dafren"}
          text={"I'm interested! I can take 20 for my boutique."}
          type={"received"}
        />

        <Chat
          avatar={avatar5}
          Tname={"Olivia"}
          text={
            "Count me in too. I'll take 15, and I know a friend who might want the remaining 15."
          }
          type={"received"}
        />
      </div>

      <div
        className="message"
        style={{
          top: "25%",
          left: "60%",
        }}
      >
        <Chat
          avatar={avatar9}
          Tname={"Chris M."}
          text={
            "Found an amazing group trip package with Cobuyr. Who's in for an adventure?"
          }
          type={"sent"}
        />

        <Chat
          avatar={avatar8}
          Tname={"Jessica"}
          text={
            "Great! I was thinking of a beach getaway in Bali. Plenty of sun, sand, and relaxation. What do you both think?"
          }
          type={"received"}
        />

        <Chat
          avatar={avatar10}
          Tname={"Sammy W."}
          text={
            "Bali it is! Let's do this. Chris, can you send us the details on cobuyr so we can start planning?"
          }
          type={"received"}
        />
      </div>

      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
        {/* <OrbitControls /> */}
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]}>
            <Model open={open} />
          </group>

          <CameraRig />
          <Environment map={env} />
        </Suspense>
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={1}
          scale={20}
          blur={1.75}
          far={4.5}
        />
      </Canvas>
    </div>
  );
}

function Chat({ avatar, Tname, text, type, ...props }) {
  Chat.defaultProps = {
    avatar: base,
  };
  return (
    <div {...props} className={`m-${type}`}>
      <img src={avatar} alt={`${Tname} avatar`} />
      <h4>{Tname}</h4>
      <p>{text}</p>
    </div>
  );
}

export function Model({ open, ...props }) {
  const { nodes, materials } = useGLTF("./laptop.glb");
  const group = useRef();
  const hinge = useRef();

  const [hovered, setHovered] = useState(false);
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  useEffect(() => {
    if (open) {
      // GSAP animations for hinge, scale, and position
      gsap.to(hinge.current.rotation, {
        x: -0.3, // Replace hinge animation
        duration: 1,
        ease: "power2.out",
      });
    } else {
      // Reset animations when closed
      gsap.to(hinge.current.rotation, {
        x: 1.35,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [open]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 10) / 9 + 0.25 : 0,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? Math.sin(t / 10) / 8 : 0,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 10) / 15 : 0,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? (-2 + Math.sin(t)) / 5 : -4.3,
      0.1
    );
  });

  const textRef = useRef();

  const sticker2 = useTexture("./cb-mark-blk.jpg");
  const sticker1 = useTexture("./cb-logo-blk.jpg");
  const sticker3 = useTexture("./avatar.jpg");

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      dispose={null}
      scale={[1.25, 1.25, 1.25]}
    >
      <group ref={hinge}>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.aluminium}
          >
            <meshStandardMaterial color={"silver"} />
          </mesh>

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
      </group>
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
          // material={materials.aluminium}
        >
          <meshStandardMaterial color={"black"} />
          {/* 
          <Decal
            position={[-3, 0, 4.5]}
            rotation={[-1, Math.PI, 0.5]}
            scale={[2, 1, 1]}
          >
            <meshStandardMaterial
              roughness={1}
              transparent
              polygonOffset
              polygonOffsetFactor={-1}
            >
              <RenderTexture attach="map">
                <PerspectiveCamera
                  makeDefault
                  aspect={16 / 9}
                  position={[0, 0, 5]}
                />
                <color attach="background" args={["black"]} />
                <ambientLight intensity={Math.PI} />
                <directionalLight position={[10, 10, 5]} />
                <Dodecahedron sticker={sticker2} />
              </RenderTexture>
            </meshStandardMaterial>
          </Decal>

          <Decal
            position={[3.2, 0, 5]}
            rotation={[-1, 0, 0]}
            scale={[2.5, 1, 1]}
          >
            <meshStandardMaterial
              roughness={1}
              transparent
              polygonOffset
              polygonOffsetFactor={-1}
            >
              <RenderTexture attach="map">
                <PerspectiveCamera
                  makeDefault
                  aspect={16 / 9}
                  position={[0, 0, 5]}
                />
                <color attach="background" args={["black"]} />
                <ambientLight intensity={Math.PI} />
                <directionalLight position={[10, 10, 5]} />
                <Dodecahedron sticker={sticker1} />
              </RenderTexture>
            </meshStandardMaterial>
          </Decal> */}
        </mesh>
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
function Dodecahedron({ sticker, ...props }) {
  const meshRef = useRef();
  const [hovered, hover] = useState(false);
  useCursor(hovered);

  return (
    <group {...props}>
      <mesh ref={meshRef} scale={10}>
        <planeGeometry args={[1, 0.5]} />
        <meshStandardMaterial />
        <Decal
          scale={[1, 0.5, 1]}
          debug
          polygonOffsetFactor={-0}
          map={sticker}
        />
      </mesh>
    </group>
  );
}

function CameraRig() {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 10, state.mouse.y * 7, -30),
      0.025
    );
    state.camera.lookAt(0, 0, 0);
  });
}

const useInView = (options = { threshold: 0.65 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect(); // Stop observing once the element is in view
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, inView];
};

useGLTF.preload("./laptop.glb");
