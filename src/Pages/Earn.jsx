/* eslint-disable react/no-unescaped-entities */
// import "../Styles/Earn.css";
import { Badge } from "../Components/badge";
import { Icon } from "../assets/icon";
import { motion } from "framer-motion";
import Transition from "../Components/Transition";
import Sub from "../Components/sub";


// const visible = {
//   opacity: 1,
//   x: 0,
//   y: 0,
//   transition: { staggerChildren: 0.4, duration: 0.5 },
// };

// const whoVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible,
// };

const Earn = () => {
  return (
    <>
      <Sub/>
    </>
  );
};

const TransEarn = Transition(Earn);
export default TransEarn;
