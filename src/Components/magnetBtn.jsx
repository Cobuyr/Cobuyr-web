/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// // // import React from 'react';
// // // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // // // @ts-ignore
// // // import { MagneticElementsController } from "@toon.rombaut/magnetic-elements";

// // // const MagneticButtons = () => {
// // //     const magneticElementsController = new MagneticElementsController();
// // //   return (
// // //     <div class="container">
// // //     <button magnetic-element>I'm a magnetic button</button>
// // //     <p magnetic-element>I'm a magnetic paragraph</p>
// // // </div>
// // //   );
// // // };

// // // export default MagneticButtons;

// import React, { useEffect, useRef } from "react";

// const LiquidButton = () => {
//   let pointsA = [];
//   let pointsB = [];
//   let canvasRef = useRef(null);
//   let canvas = null;
//   let context = null;
//   const contextRef = useRef(null);
//   let points = 8;
//   let viscosity = 20;
//   let mouseDist = 70;
//   let damping = 0.05;
//   let showIndicators = false;
//   let mouseX = useRef(0);
//   let mouseY = useRef(0);
//   let relMouseX = useRef(0);
//   let relMouseY = useRef(0);
//   let mouseLastX = useRef(0);
//   let mouseLastY = useRef(0);
//   let mouseDirectionX = useRef(0);
//   let mouseDirectionY = useRef(0);
//   let mouseSpeedX = useRef(0);
//   let mouseSpeedY = useRef(0);

//   useEffect(() => {
//     canvas = canvasRef.current;
//     context = canvas.getContext("2d");
//     contextRef.current = context;

//     function mouseDirection(e) {
//      // Update the values using useRef's .current property
//      mouseX.current = e.pageX;
//      mouseY.current = e.pageY;

//      if (canvasRef.current) {
//         relMouseX.current = mouseX.current - canvasRef.current.offsetLeft;
//         relMouseY.current = mouseY.current - canvasRef.current.offsetTop;

//       }
//     }

//     document.addEventListener("mousemove", mouseDirection);

//     function mouseSpeed() {
//       mouseSpeedX.current = mouseX.current - mouseLastX.current;
//       mouseSpeedY.current = mouseY.current - mouseLastY.current;

//       mouseLastX.current = mouseX.current;
//       mouseLastY.current = mouseY.current;

//       setTimeout(mouseSpeed, 50);
//     }
//     mouseSpeed();

//     function initButton() {

//         if (canvas) {
//             const button = document.querySelector(".btn-liquid");
//             const buttonWidth = button.offsetWidth;
//             const buttonHeight = button.offsetHeight;

//             canvas.width = buttonWidth;
//             canvas.height = buttonHeight;

//       button.appendChild(canvas);

//       canvas.width = buttonWidth + 100;
//       canvas.height = buttonHeight + 100;

//       let x = buttonHeight / 2;

//       for (let j = 1; j < points; j++) {
//         addPoints(x + ((buttonWidth - buttonHeight) / points) * j, 0);
//       }
//       addPoints(buttonWidth - buttonHeight / 5, 0);
//       addPoints(buttonWidth + buttonHeight / 10, buttonHeight / 2);
//       addPoints(buttonWidth - buttonHeight / 5, buttonHeight);
//       for (let j = points - 1; j > 0; j--) {
//         addPoints(
//           x + ((buttonWidth - buttonHeight) / points) * j,
//           buttonHeight
//         );
//       }
//       addPoints(buttonHeight / 5, buttonHeight);

//       addPoints(-buttonHeight / 10, buttonHeight / 2);
//       addPoints(buttonHeight / 5, 0);

//     //   renderCanvas();

//             console.log("Canvas is present:", canvas);
//             console.log("Width:", canvas.width, "Height:", canvas.height);
//           } else {
//             console.error("Canvas not found");
//           }

//     }

//     function addPoints(x, y) {
//       pointsA.push(new Point(x, y, 1));
//       pointsB.push(new Point(x, y, 2));
//     }

//     class Point {
//           constructor(x, y, level) {
//               this.x = this.ix = 50 + x;
//               this.y = this.iy = 50 + y;
//               this.vx = 0;
//               this.vy = 0;
//               this.cx1 = 0;
//               this.cy1 = 0;
//               this.cx2 = 0;
//               this.cy2 = 0;
//               this.level = level;
//           }
//           move() {
//               this.vx += (this.ix - this.x) / (viscosity * this.level);
//               this.vy += (this.iy - this.y) / (viscosity * this.level);

//               let dx = this.ix - relMouseX;
//               let dy = this.iy - relMouseY;
//               let relDist = 1 - Math.sqrt(dx * dx + dy * dy) / mouseDist;

//               // Move x
//               if ((mouseDirectionX > 0 && relMouseX > this.x) ||
//                   (mouseDirectionX < 0 && relMouseX < this.x)) {
//                   if (relDist > 0 && relDist < 1) {
//                       this.vx = (mouseSpeedX / 4) * relDist;
//                   }
//               }
//               this.vx *= 1 - damping;
//               this.x += this.vx;

//               // Move y
//               if ((mouseDirectionY > 0 && relMouseY > this.y) ||
//                   (mouseDirectionY < 0 && relMouseY < this.y)) {
//                   if (relDist > 0 && relDist < 1) {
//                       this.vy = (mouseSpeedY / 4) * relDist;
//                   }
//               }
//               this.vy *= 1 - damping;
//               this.y += this.vy;
//           }
//       }

//     /**
//      * Render canvas
//      */

//     // function renderCanvas() {
//     //     // rAF
//     //     let rafID = requestAnimationFrame(renderCanvas);

//     //     // Clear canvas
//     //     context.clearRect(0, 0, canvas.width, canvas.height);
//     //     context.fillStyle = '#fff';
//     //     context.fillRect(0, 0, canvas.width, canvas.height);

//     //     // Move points
//     //     for (let i = 0; i <= pointsA.length - 1; i++) {
//     //       pointsA[i].move();
//     //       pointsB[i].move();
//     //     }

//     //     // Create dynamic gradient
//     //     let gradientX = Math.min(Math.max(mouseX.current - canvasRef.current.offsetLeft, 0), canvas.width);
//     //     let gradientY = Math.min(Math.max(mouseY.current - canvasRef.current.offsetTop, 0), canvas.height);
//     //     let distance = Math.sqrt(Math.pow(gradientX - canvas.width / 2, 2) + Math.pow(gradientY - canvas.height / 2, 2)) / Math.sqrt(Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2));

//     //     if (isFinite(gradientX) && isFinite(gradientY) && isFinite(distance)) {
//     //       let gradient = context.createRadialGradient(
//     //         gradientX,
//     //         gradientY,
//     //         300 + (300 * distance),
//     //         gradientX,
//     //         gradientY,
//     //         0
//     //       );
//     //       gradient.addColorStop(0, '#102ce5');
//     //       gradient.addColorStop(1, '#E406D6');

//     //       // Draw shapes
//     //       let groups = [pointsA, pointsB];

//     //       for (let j = 0; j <= 1; j++) {
//     //         let points = groups[j];

//     //         if (j === 0) {
//     //           // Background style
//     //           context.fillStyle = '#1CE2D8';
//     //         } else {
//     //           // Foreground style
//     //           context.fillStyle = gradient;
//     //         }

//     //         context.beginPath();
//     //         context.moveTo(points[0].x, points[0].y);

//     //         for (let i = 0; i < points.length; i++) {
//     //           let p = points[i];
//     //           let nextP = points[i + 1];
//     //           let val = 30 * 0.552284749831;

//     //           if (nextP !== undefined) {
//     //             p.cx1 = (p.x + nextP.x) / 2;
//     //             p.cy1 = (p.y + nextP.y) / 2;
//     //             p.cx2 = (p.x + nextP.x) / 2;
//     //             p.cy2 = (p.y + nextP.y) / 2;

//     //             context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
//     //           } else {
//     //             nextP = points[0];
//     //             p.cx1 = (p.x + nextP.x) / 2;
//     //             p.cy1 = (p.y + nextP.y) / 2;

//     //             context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
//     //           }
//     //         }
//     //         context.closePath(); // Close the path before filling
//     //         context.fill(); // Fill the shapes
//     //       }

//     //     if (showIndicators) {
//     //       // Draw points
//     //       context.fillStyle = '#000';
//     //       context.beginPath();
//     //       for (let i = 0; i < pointsA.length; i++) {
//     //         let p = pointsA[i];

//     //         context.rect(p.x - 1, p.y - 1, 2, 2);
//     //       }
//     //       context.fill();

//     //       // Draw controls
//     //       context.fillStyle = '#f00';
//     //       context.beginPath();
//     //       for (let i = 0; i < pointsA.length; i++) {
//     //         let p = pointsA[i];

//     //         context.rect(p.cx1 - 1, p.cy1 - 1, 2, 2);
//     //         context.rect(p.cx2 - 1, p.cy2 - 1, 2, 2);
//     //       }
//     //       context.fill();
//     //     }
//     //   }
//     // }

//     initButton();

//     // Clean-up
//     return () => {

//       document.removeEventListener("mousemove", mouseDirection);

//     };
//   }, []);

//   const handleMouseMove = (e) => {
//     mouseX.current = e.pageX - canvasRef.current.offsetLeft;
//     mouseY.current = e.pageY - canvasRef.current.offsetTop;
//   };

//   useEffect(() => {
//     document.addEventListener("mousemove", handleMouseMove);

//     const renderCanvas = () => {
//       const context = contextRef.current;
//       context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
// //  // Clear canvas
// //  context.clearRect(0, 0, canvas.width, canvas.height);
// //  context.fillStyle = '#fff';
// //  context.fillRect(0, 0, canvas.width, canvas.height);

//         // Move points
//         for (let i = 0; i <= pointsA.length - 1; i++) {
//             pointsA[i].move();
//             pointsB[i].move();
//           }

//           // Create dynamic gradient
//           let gradientX = Math.min(Math.max(mouseX.current - canvasRef.current.offsetLeft, 0), canvas.width);
//           let gradientY = Math.min(Math.max(mouseY.current - canvasRef.current.offsetTop, 0), canvas.height);
//           let distance = Math.sqrt(Math.pow(gradientX - canvas.width / 2, 2) + Math.pow(gradientY - canvas.height / 2, 2)) / Math.sqrt(Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2));

//           if (isFinite(gradientX) && isFinite(gradientY) && isFinite(distance)) {
//             let gradient = context.createRadialGradient(
//               gradientX,
//               gradientY,
//               300 + (300 * distance),
//               gradientX,
//               gradientY,
//               0
//             );
//             gradient.addColorStop(0, '#102ce5');
//             gradient.addColorStop(1, '#E406D6');

//             // Draw shapes
//             let groups = [pointsA, pointsB];

//             for (let j = 0; j <= 1; j++) {
//               let points = groups[j];

//               if (j === 0) {
//                 // Background style
//                 context.fillStyle = '#1CE2D8';
//               } else {
//                 // Foreground style
//                 context.fillStyle = gradient;
//               }

//               context.beginPath();
//               context.moveTo(points[0].x, points[0].y);

//               for (let i = 0; i < points.length; i++) {
//                 let p = points[i];
//                 let nextP = points[i + 1];
//                 let val = 30 * 0.552284749831;

//                 if (nextP !== undefined) {
//                   p.cx1 = (p.x + nextP.x) / 2;
//                   p.cy1 = (p.y + nextP.y) / 2;
//                   p.cx2 = (p.x + nextP.x) / 2;
//                   p.cy2 = (p.y + nextP.y) / 2;

//                   context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
//                 } else {
//                   nextP = points[0];
//                   p.cx1 = (p.x + nextP.x) / 2;
//                   p.cy1 = (p.y + nextP.y) / 2;

//                   context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
//                 }
//               }
//               context.closePath(); // Close the path before filling
//               context.fill(); // Fill the shapes
//             }

//           if (showIndicators) {
//             // Draw points
//             context.fillStyle = '#000';
//             context.beginPath();
//             for (let i = 0; i < pointsA.length; i++) {
//               let p = pointsA[i];

//               context.rect(p.x - 1, p.y - 1, 2, 2);
//             }
//             context.fill();

//             // Draw controls
//             context.fillStyle = '#f00';
//             context.beginPath();
//             for (let i = 0; i < pointsA.length; i++) {
//               let p = pointsA[i];

//               context.rect(p.cx1 - 1, p.cy1 - 1, 2, 2);
//               context.rect(p.cx2 - 1, p.cy2 - 1, 2, 2);
//             }
//             context.fill();
//           }
//         }

//       requestAnimationFrame(renderCanvas);
//     };

//     renderCanvas();

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);
//   return (
//     <div className="btn-liquid" >
//     <canvas ref={canvasRef}></canvas>
//     <span className="inner">Liquid button</span>
//   </div>
//   )
// };

// export default LiquidButton;

import React, { useEffect, useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './magnetBtn.css';


const LiquidButton = ({ svg }) => {

  LiquidButton.propTypes = {
    svg: PropTypes.object.isRequired,
    // propsFromSVG: PropTypes.object.isRequired,
  };

  const [propsFromSVG, setPropsFromSVG] = useState({
    tension: 0.4,
    forceFactor: 0.2,
    layers: [
      { viscosity: 0.5, mouseForce: 100, forceLimit: 2 },
      { viscosity: 0.8, mouseForce: 150, forceLimit: 3 },
    ],
  });

  const [id, setId] = useState(1);
  const xmlns = 'http://www.w3.org/2000/svg';
  const [tension, setTension] = useState(0.4);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(50);
  const [margin, setMargin] = useState(50);
  const [hoverFactor, setHoverFactor] = useState(-0.1);
  const [gap, setGap] = useState(5);
  const [debug, setDebug] = useState(false);
  const [forceFactor, setForceFactor] = useState(0.2);
  const [color1, setColor1] = useState('#36DFE7');
  const [color2, setColor2] = useState('#8F17E1');
  const [color3, setColor3] = useState('#BF09E6');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [text, setText] = useState('▶');
  const [layers, setLayers] = useState([
    { points: [], viscosity: 0.5, mouseForce: 100, forceLimit: 2 },
    { points: [], viscosity: 0.8, mouseForce: 150, forceLimit: 3 },
  ]);

  const wrapperElement = useRef(null);
  const svgText = useRef(null);
  const svgDefs = useRef(null);
  const touches = useRef([]);
  const noise = useRef(0);
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      setWidth(rect.width * 0.8);
      setHeight(rect.height * 0.2);

      const newWidth = width + margin * 2;
      const newHeight = height + margin * 2;

      svgRef.current.setAttribute('width', newWidth);
      svgRef.current.setAttribute('height', newHeight);
    }
  }, [width, height, margin]);

  const mouseHandler = (e) => {
    touches.current = [{
      x: e.offsetX,
      y: e.offsetY,
      force: 1
    }];
  };

  const touchHandler = (e) => {
    touches.current = [];
    const rect = svg.getBoundingClientRect();
    for (let touchIndex = 0; touchIndex < e.changedTouches.length; touchIndex++) {
      const touch = e.changedTouches[touchIndex];
      const x = touch.pageX - rect.left;
      const y = touch.pageY - rect.top;
      if (x > 0 && y > 0 && x < svgWidth && y < svgHeight) {
        touches.current.push({ x, y, force: touch.force || 1 });
      }
    }
    e.preventDefault();
  };

  const clearHandler = (e) => {
    touches.current = [];
  };

  const raf = useRef(
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      setTimeout(callback, 10);
    }
  ).current;

  const distance = (p1, p2) => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  };

  const update = () => {
    for (let layerIndex = 0; layerIndex < layers.length; layerIndex++) {
      const layer = layers[layerIndex];
      const points = layer.points;
      for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
        const point = points[pointIndex];
        const dx = point.ox - point.x + (Math.random() - 0.5) * noise.current;
        const dy = point.oy - point.y + (Math.random() - 0.5) * noise.current;
        const d = Math.sqrt(dx * dx + dy * dy);
        const f = d * forceFactor;
        point.vx += f * (dx / d || 0);
        point.vy += f * (dy / d || 0);
        for (let touchIndex = 0; touchIndex < touches.current.length; touchIndex++) {
          const touch = touches.current[touchIndex];
          let mouseForce = layer.mouseForce;
          if (touch.x > margin && touch.x < margin + width && touch.y > margin && touch.y < margin + height) {
            mouseForce *= -hoverFactor;
          }
          const mx = point.x - touch.x;
          const my = point.y - touch.y;
          const md = Math.sqrt(mx * mx + my * my);
          const mf = Math.max(-layer.forceLimit, Math.min(layer.forceLimit, mouseForce * touch.force / md));
          point.vx += mf * (mx / md || 0);
          point.vy += mf * (my / md || 0);
        }
        point.vx *= layer.viscosity;
        point.vy *= layer.viscosity;
        point.x += point.vx;
        point.y += point.vy;
      }
    }
  };

  const draw = () => {
    for (let layerIndex = 0; layerIndex < layers.length; layerIndex++) {
      const layer = layers[layerIndex];
      if (layerIndex === 1) {
        if (touches.current.length > 0) {
          while (svgDefs.current.firstChild) {
            svgDefs.current.removeChild(svgDefs.current.firstChild);
          }
          for (let touchIndex = 0; touchIndex < touches.current.length; touchIndex++) {
            const touch = touches.current[touchIndex];
            const gradient = document.createElementNS(xmlns, 'radialGradient');
            gradient.id = `liquid-gradient-${id}-${touchIndex}`;
            const start = document.createElementNS(xmlns, 'stop');
            start.setAttribute('stop-color', color3);
            start.setAttribute('offset', '0%');
            const stop = document.createElementNS(xmlns, 'stop');
            stop.setAttribute('stop-color', color2);
            stop.setAttribute('offset', '100%');
            gradient.appendChild(start);
            gradient.appendChild(stop);
            svgDefs.current.appendChild(gradient);
            gradient.setAttribute('cx', touch.x / svgWidth);
            gradient.setAttribute('cy', touch.y / svgHeight);
            gradient.setAttribute('r', touch.force);
            layer.path.style.fill = `url(#${gradient.id})`;
          }
        } else {
          layer.path.style.fill = color2;
        }
      } else {
        layer.path.style.fill = color1;
      }
      const points = layer.points;
      const commands = [];
      commands.push('M', points[0].x, points[0].y);
      for (let pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
        commands.push('C', points[(pointIndex + 0) % points.length].cNext.x, points[(pointIndex + 0) % points.length].cNext.y, points[(pointIndex + 1) % points.length].cPrev.x, points[(pointIndex + 1) % points.length].cPrev.y, points[(pointIndex + 1) % points.length].x, points[(pointIndex + 1) % points.length].y);
      }
      commands.push('Z');
      layer.path.setAttribute('d', commands.join(' '));
    }

    if (svgText.current) {
      svgText.current.textContent = text;
      svgText.current.style.fill = textColor;
    }
  };


  const svgWidth = width + margin * 2;
  const svgHeight = height + margin * 2;

  const createPoint = (x, y) => {
    return {
      x: x,
      y: y,
      ox: x,
      oy: y,
      vx: 0,
      vy: 0,
    };
  };

  const initOrigins = () => {
    svg.setAttribute('width', svgWidth);
    svg.setAttribute('height', svgHeight);
    for (let layerIndex = 0; layerIndex < layers.length; layerIndex++) {
      const layer = layers[layerIndex];
      const points = [];
      for (let x = ~~(height / 2); x < width - ~~(height / 2); x += gap) {
        points.push(createPoint(x + margin, margin));
      }
      for (let alpha = ~~(height * 1.25); alpha >= 0; alpha -= gap) {
        const angle = Math.PI / ~~(height * 1.25) * alpha;
        points.push(
          createPoint(
            Math.sin(angle) * height / 2 + margin + width - height / 2,
            Math.cos(angle) * height / 2 + margin + height / 2
          )
        );
      }
      for (let x = width - ~~(height / 2) - 1; x >= ~~(height / 2); x -= gap) {
        points.push(createPoint(x + margin, margin + height));
      }
      for (let alpha = 0; alpha <= ~~(height * 1.25); alpha += gap) {
        const angle = Math.PI / ~~(height * 1.25) * alpha;
        points.push(
          createPoint(
            height - Math.sin(angle) * height / 2 + margin - height / 2,
            Math.cos(angle) * height / 2 + margin + height / 2
          )
        );
      }
      layer.points = points;
    }
  };

  // const handleResize = () => {
  //    const rect = svgRef.current.getBoundingClientRect();
    // setWidth(rect.width * 0.8);
    // setHeight(rect.height * 0.2);

    // const newWidth = width + margin * 2;
    // const newHeight = height + margin * 2;

    // svgRef.current.setAttribute('width', newWidth);
    // svgRef.current.setAttribute('height', newHeight);
  // };

  const animate = () => {
    raf(() => {
      update();
      draw();
      animate();
    });
  };

  const init = () => {
    console.log('Creating SVG Text Element:', svgText.current);
  // console.log('Creating SVG Path Elements:', svgDefs.current.childNodes); // Or any other relevant elements
  svgText.current = document.createElementNS(xmlns, 'text');
  svgDefs.current = document.createElementNS(xmlns, 'defs');

    if (
      svgRef.current &&
      svgRef.current.parentElement &&
      svgText.current &&
      svgDefs.current

    ) {
      svgRef.current.parentElement.append(svgRef.current);
      svgRef.current.appendChild(svgText.current);
      svgRef.current.appendChild(svgDefs.current);

      console.log('SVG Content After Appending:', svgRef.current.innerHTML); // Log the content after appending

   initOrigins();
    animate();
      // Other initialization logic...
    }
   
    // window.addEventListener('resize', handleResize);
  };

  useEffect(() => {
    if (svg && svg.dataset) {
      const newPropsFromSVG = {
        tension: svg.dataset.tension * 1 || 0.4,
        forceFactor: svg.dataset.forceFactor * 1 || 0.2,
        layers: [
          {
            viscosity: svg.dataset.layer1Viscosity * 1 || 0.5,
            mouseForce: svg.dataset.layer1MouseForce * 1 || 100,
            forceLimit: svg.dataset.layer1ForceLimit * 1 || 2,
          },
          {
            viscosity: svg.dataset.layer2Viscosity * 1 || 0.8,
            mouseForce: svg.dataset.layer2MouseForce * 1 || 150,
            forceLimit: svg.dataset.layer2ForceLimit * 1 || 3,
          },
        ],
      };
      setPropsFromSVG(newPropsFromSVG);
    }
  }, [svg]);
  
  useEffect(() => {
    setTension(propsFromSVG.tension || 0.4);
    setForceFactor(propsFromSVG.forceFactor || 0.2);
    setLayers([
      {
        viscosity: propsFromSVG.layers[0]?.viscosity || 0.5,
        mouseForce: propsFromSVG.layers[0]?.mouseForce || 100,
        forceLimit: propsFromSVG.layers[0]?.forceLimit || 2,
      },
      {
        viscosity: propsFromSVG.layers[1]?.viscosity || 0.8,
        mouseForce: propsFromSVG.layers[1]?.mouseForce || 150,
        forceLimit: propsFromSVG.layers[1]?.forceLimit || 3,
      },
    ]);

    init();
  }, [propsFromSVG]);


  useEffect(() => {
    init();
    return () => {
      // window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <svg
    className="liquid-button"
    data-text="different viscosity"
    data-force-factor="0.1"
    data-layer-1-viscosity="0.5"
    data-layer-2-viscosity="0.4"
    data-layer-1-mouse-force="400"
    data-layer-2-mouse-force="500"
    data-layer-1-force-limit="1"
    data-layer-2-force-limit="2"
    ref={svgRef}
  />
  )
};

export default LiquidButton;
