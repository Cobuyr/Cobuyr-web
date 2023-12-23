/* eslint-disable react/display-name */

import { motion } from "framer-motion";

// Transition HOC
const Transition = (WrappedComponent) => {

  return () => (
    <>
      <WrappedComponent />
      <motion.div
        className="slide-in"
        initial={{
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        animate={{
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          // scaleX:0,
          transitionEnd: {
            display: "none",
          },
        }}
        exit={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        transition={{ duration: 0.75}}
      />
      {/* <motion.div
        className="slide-in"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      /> */}

      {/* <motion.div
        className="slide-out"
        // initial={{ scaleY: 1 }}
        // animate={{ scaleY: 0 }}
        // exit={{ scaleY: 0 }}
        // transition={{ duration: 1, ease: "circOut", delay:0.5}}

        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        // style={{ originX: isPresent ? 0 : 1 }}
      /> */}
    </>
  );
};

export default Transition;
