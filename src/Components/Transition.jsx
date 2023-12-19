/* eslint-disable react/display-name */
// /* eslint-disable react/prop-types */
// import React, { useRef, useEffect } from "react";
// import { Power4 } from "gsap";

// import "./Components.css";

// const Transition = ({timeline}) => {
//     const trans = useRef(null)
//     useEffect(() => {
//       timeline.to(trans.current, {
//         duration: 4,
//         x: 2500,
//         ease: Power4.easeOut
//       })

//     }, )

//   return (
//     <div className="tEffect" ref={trans}>
//       <h1>Transition</h1>
//     </div>
//   );
// };

// export default Transition;

import { motion } from "framer-motion";
import React from "react";

// Transition HOC
const Transition = (WrappedComponent) => {
  return () => (
    <> 
      <motion.div
        className="slide-in"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] , delay:0.5}}
      />

    <WrappedComponent />

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay:0.5}}
      />
    </>
  );
};

export default Transition;
