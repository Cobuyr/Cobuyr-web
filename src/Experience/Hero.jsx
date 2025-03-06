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
  SpotLight,
  useDepthBuffer,
  OrbitControls,
  useCursor,
  Text,
  RenderTexture,
  PerspectiveCamera,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web, useInView, config } from "@react-spring/web";
// import { useInView } from "react-intersection-observer";

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
  const env = useEnvironment({ files: city });
  const [ref, inView] = useInView({ threshold: 0.65 });
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({
    open: Number(open),
    config: config.molasses, // Adjust the easing here
    // delay: open ? 0 : 5000, // Add a delay when opening
    // delay: 1000
  });

  // const [currentChatIndex, setCurrentChatIndex] = useState(0);
  // const chats = [
  //   [
  //     {
  //       avatar: avatar2,
  //       Tname: "Alan Jury",
  //       text: "I found a Gaming setup package deal and I only want the custom gaming chair, Who would like to join me?",
  //       type: "sent"
  //     },
  //     {
  //       avatar: avatar3,
  //       Tname: "Zachary D.",
  //       text: "ohhh yeaahh, I saw the same deal and need only the High-sens mouse and Foldable table, can i join and pay for only those?",
  //       type: "received"
  //     }
  //   ],
  //   [
  //     {
  //       avatar: avatar4,
  //       Tname: "Vincent Moore",
  //       text: "Looking to buy 30 pieces of vintage vinyl records at a discount. Anyone interested in splitting the purchase?",
  //       type: "sent"
  //     },
  //     {
  //       avatar: avatar0,
  //       Tname: "Sophia Adams",
  //       text: "I'm interested! I collect vinyl too. I can take 15.",
  //       type: "received"
  //     },
  //     {
  //       avatar: avatar6,
  //       Tname: "Oliver Scott",
  //       text: "Count me in! I'll take 10, and I know a friend who might want the remaining 5.",
  //       type: "sent"
  //     }
  //   ],
  //   [
  //     {
  //       avatar: avatar1,
  //       Tname: "Emma",
  //       text: "Looking to buy 70 pieces of base cut rings at a discount. Anyone want to share the purchase? I'm taking 20 pieces",
  //       type: "sent"
  //     },
  //     {
  //       avatar: avatar7,
  //       Tname: "William Dafren",
  //       text: "I'm interested! I can take 20 for my boutique.",
  //       type: "received"
  //     },
  //     {
  //       avatar: avatar5,
  //       Tname: "Olivia",
  //       text: "Count me in too. I'll take 15, and I know a friend who might want the remaining 15.",
  //       type: "received"
  //     }
  //   ],
  //   [
  //     {
  //       avatar: avatar9,
  //       Tname: "Chris M.",
  //       text: "Found an amazing group trip package with Cobuyr. Who's in for an adventure?",
  //       type: "sent"
  //     },
  //     {
  //       avatar: avatar8,
  //       Tname: "Jessica",
  //       text: "Great! I was thinking of a beach getaway in Bali. Plenty of sun, sand, and relaxation. What do you both think?",
  //       type: "received"
  //     },
  //     {
  //       avatar: avatar10,
  //       Tname: "Sammy W.",
  //       text: "Bali it is! Let's do this. Chris, can you send us the details on cobuyr so we can start planning?",
  //       type: "received"
  //     }
  //   ]
  // ];
  // const chatAnimations = [
  //   {
  //     opacity: props.open.to([0, 1], [0, 1]),
  //     scale: props.open.to([0, 1], [0, 1]),
  //     transform: props.open.to((o) => `translate3d(${o * 65}%, ${o * 25}%,0)`),
  //     left: "55%",
  //     top: "35%"
  //   },
  //   {
  //     opacity: props.open.to([0, 1], [0, 1]),
  //     scale: props.open.to([0, 1], [0, 1]),
  //     transform: props.open.to((o) => `translate3d(${o * -125}%, ${o * 25}%, 0)`),
  //     left: "50%",
  //     top: "25%"
  //   },
  //   {
  //     opacity: props.open.to([0, 1], [0, 1]),
  //     scale: props.open.to([0, 1], [0, 1]),
  //     transform: props.open.to((o) => `translate3d(${o * -120}%, ${o * -130}%,0)`),
  //     top: "25%",
  //     left: "45%"
  //   },
  //   {
  //     opacity: props.open.to([0, 1], [0, 1]),
  //     scale: props.open.to([0, 1], [0, 1]),
  //     transform: props.open.to((o) => `translate3d(${o * 110}%, -150%, 0)`),
  //     top: "25%",
  //     left: "60%"
  //   }
  // ];

  // const chatProps = useSpring(chatAnimations[currentChatIndex]);

  // const handleClick = () => {
  //   setOpen(!open);
  //   setCurrentChatIndex((prevIndex) => (prevIndex + 1) % chats.length);
  // };

  useEffect(() => {
    if (inView) {
      setOpen(true);
    }
  }, [inView]);
  // console.log(Spot);

  return (
    <web.div
      ref={ref}
      // style={{ background: props.open.to([0, 1], ["#040404", "#0e0e0e"]) }}
      className="scene"
    >
      {/* Render the current chat group */}
      {/* {chats.map((chatGroup, index) => (
        <web.div
          key={index}
          className={`message ${index === currentChatIndex ? "visible" : ""}`}
          style={chatProps}
        >
          {chatGroup.map((chat, chatIndex) => (
            <Chat key={chatIndex} avatar={chat.avatar} Tname={chat.Tname} text={chat.text} type={chat.type} />
          ))}
        </web.div>
      ))} */}

      <web.h1
        style={{
          opacity: props.open.to([0, 1], [0, 1]),
          transform: props.open.to((o) => `translate3d(-50%,${o * -370}px,0)`),
        }}
        className="scene-h1"
      >
        Connecting <span className="mainText">Buyers.</span>
        {/* <span className="mainText" style={{ display: props.open.to([0, 1], ["hidden", "inline"]) }}>Buyers.</span>
        <span className="mainText" style={{ display: props.open.to([0, 1], ["inline", "hidden"]) }}>Interests.</span> */}
      </web.h1>

      <web.div
        className="message"
        style={{
          opacity: props.open.to([0, 1], [0, 1]),
          scale: props.open.to([0, 1], [0, 1]),
          transform: props.open.to(
            (o) => `translate3d(${o * 65}%, ${o * 25}%,0)`
          ),
          // transform: props.open.to(
          //   (o) => `translate3d(${o * 65}%, ${o * 50}%,0)`
          // ),
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
      </web.div>

      <web.div
        className="message"
        style={{
          opacity: props.open.to([0, 1], [0, 1]),
          scale: props.open.to([0, 1], [0, 1]),
          transform: props.open.to(
            (o) => `translate3d(${o * -125}%, ${o * 25}%, 0)`
          ),
          // transform: props.open.to(
          //   (o) => `translate3d(${o * -160}%, ${o * 40}%, 0)`
          // ),
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
      </web.div>

      <web.div
        className="message"
        style={{
          opacity: props.open.to([0, 1], [0, 1]),
          scale: props.open.to([0, 1], [0, 1]),
          transform: props.open.to(
            (o) => `translate3d(${o * -120}%, ${o * -130}%,0)`
          ),
          // transform: props.open.to(
          //   (o) => `translate3d(${o * -170}%, ${o * -130}%,0)`
          // ),
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
      </web.div>

      <web.div
        className="message"
        style={{
          opacity: props.open.to([0, 1], [0, 1]),
          scale: props.open.to([0, 1], [0, 1]),
          // transform: props.open.to((o) => `translate3d(${o * 165}%, -90%, 0)`),
          transform: props.open.to((o) => `translate3d(${o * 110}%, -150%, 0)`),
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
      </web.div>

      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, -30], fov: 35 }}
        // gl={{ preserveDrawingBuffer: false }}
      >
        {/* <OrbitControls /> */}
        <Suspense fallback={null}>
          <three.group
            rotation={[0, Math.PI, 0]}
            // position-y={props.open.to([0, 1], [0, -5])}
            // rotation={[Math.PI / 0.65, Math.PI, 0]}
            // rotation-x={props.open.to([0, 1], [Math.PI / 0.42, Math.PI / 0.5])}
            // onClick={(e) => (e.stopPropagation(), setOpen(!open))}
            // onClick={handleClick}
          >
            <Model
              open={open}
              hinge={props.open.to([0, 1], [1.35, -0.425])}
              scale={props.open.to([0, 1], [2.1, 1])}
              // position={[0, 10, 0]}
              position-y={props.open.to([0, 1], [0, -1.5])}
            />
          </three.group>
          
          <CameraRig/>
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
    </web.div>
  );
}

function Chat({ avatar, Tname, text, type, ...props }) {
  Chat.defaultProps = {
    avatar: base,
  };
  return (
    <web.div {...props} className={`m-${type}`}>
      <img src={avatar} alt={`${Tname} avatar`} />
      <h4>{Tname}</h4>
      <p>{text}</p>
    </web.div>
  );
}

export function Model({ open, scale, position, hinge, ...props }) {
  const { nodes, materials } = useGLTF("./laptop.glb");
  // // const sticker = useTexture("./cb-logo-blk.jpg");
  // const sticker = useTexture("./cb-mark-blk.jpg");
  // // const sticker = useTexture("./avatar.jpg");
  // // const sticker = useTexture(base);
  // // sticker.repeat.set(0.005, 0.005);
  // // sticker.mapping = THREE.UVMapping;
  // sticker.wrapS = sticker.wrapT = THREE.RepeatWrapping; // has effect
  // // sticker.rotation = 0; // has effect
  // // sticker.flipY = false; // has effect
  // sticker.repeat.set(1, 1);
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
      open ? Math.cos(t / 10) / 15 + 0.25 : 0,
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
    <three.group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      dispose={null}
      scale={scale}
      position-y={position}
    >
      <three.group
      // rotation-x={hinge}
      >
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.aluminium}
          >
            <meshStandardMaterial color={"silver"} />

            {/* Easter Egg Sticker */}

            <Decal position={[0, 4, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
              <meshStandardMaterial
                roughness={1}
                transparent
                polygonOffset
                polygonOffsetFactor={-1}
              >
                <RenderTexture attach="map">
                  <PerspectiveCamera
                    makeDefault
                    aspect={1 / 1}
                    position={[0, 0, 5]}
                  />
                  <color attach="background" args={["white"]} />
                  <ambientLight intensity={Math.PI} />
                  <directionalLight position={[10, 10, 5]} />
                  <Dodecahedron sticker={sticker3} scale={0.8} />
                </RenderTexture>
              </meshStandardMaterial>
            </Decal>

            <Decal position={[0, 3, 0]} rotation={[0, 0, 0]} scale={[3, 1, 1]}>
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
                    position={[0, 0, 7]}
                  />
                  <color attach="background" args={["#a00948"]} />
                  <ambientLight intensity={Math.PI} />
                  <directionalLight position={[10, 10, 5]} />
                  <Text
                    rotation={[0, Math.PI, 0]}
                    ref={textRef}
                    fontSize={2}
                    color="white"
                    scale={0.66}
                  >
                    You Found Me!{"\n"}
                    I'm Easter Egg Rick!
                  </Text>
                </RenderTexture>
              </meshStandardMaterial>
            </Decal>
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
          // material={materials.aluminium}
        >
          <meshStandardMaterial color={"black"} />

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
          </Decal>
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
    </three.group>
  );
}
function Dodecahedron({ sticker, ...props }) {
  const meshRef = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useCursor(hovered);

  return (
    <group {...props}>
      <mesh
        ref={meshRef}
        // scale={clicked ? 2.25 : 1.75}
        scale={10}
        // onClick={() => click(!clicked)}
        // onPointerOver={() => hover(true)}
        // onPointerOut={() => hover(false)}
        // side={THREE.DoubleSide}
        // visible={false}
      >
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

function Spot({ vec = new Vector3(), dist, ...props }) {
  const depthBuffer = useDepthBuffer({ frames: 1 });

  return (
    <three.group scale-x={dist}>
      <SpotLight
        depthBuffer={depthBuffer}
        castShadow
        penumbra={1}
        attenuation={5}
        anglePower={4}
        distance={5}
        angle={5}
        // distance={propse.open.to([0, 1], [15, 1])}
        //       angle={propse.open.to([0, 1], [35, 1])}
        // intensity={25}
        // color={propse.open.to([0, 1], ["#ffffff", "#ff0000"])}

        scale={[2, 15, 1]}
        {...props}
      />
    </three.group>
  );
}

useGLTF.preload("./laptop.glb");
