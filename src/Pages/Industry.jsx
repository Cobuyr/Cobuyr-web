/* eslint-disable react/no-unescaped-entities */
import "../Styles/Industry.css";
import { Badge } from "../Components/badge";
import { Icon } from "../assets/icon";
import { motion } from "framer-motion";
import Transition from "../Components/Transition";


const visible = {
  opacity: 1,
  x: 0,
  y: 0,
  transition: { staggerChildren: 0.4, duration: 0.5 },
};

const indVariants = {
  hidden: { opacity: 0, y: 20 },
  visible,
};

const Industry = () => {
  return (
    <>
      <motion.section
        className="ind"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        
      </motion.section>
    </>
  );
};

const TransIndustry = Transition(Industry);
export default TransIndustry;
