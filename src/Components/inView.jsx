import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// import "./styles.css";

export const Section = ({ children, className }) => {

    const mainControl = useAnimation();

      
  const ref = useRef(null);
//   const vpRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "20% 0px 0px 0px" });

    useEffect(() => {
     if (isInView){
      mainControl.start("visible")
     }
    }, [isInView]);
  
    const visible = {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { staggerChildren: 0.4, duration: 0.5 },
    };
  
  return (

     <motion.section
     className={`${className}`}
        ref={ref}
        initial="hidden"
        animate= {mainControl}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
       {children}
      </motion.section>
  );
}
