import "../Styles/Home/Home.css";
import { Badge } from "../Components/badge";
import { motion } from "framer-motion";
import { Section } from "./inView";

const Sub = () => {
  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { staggerChildren: 0.4, duration: 0.5 },
  };

  const homeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible,
  };

  return (
    <Section className="early">
      <motion.div variants={homeVariants}>
        <Badge
          iconUrl="lqadwfir"
          trigger="hover"
          text="Ends on January 8 2024"
        />
      </motion.div>

      <motion.h2 className="early-h2" variants={homeVariants}>
        Early Adopter Programme
      </motion.h2>
      <motion.h3 variants={homeVariants}>
        Become an early adopter and{" "}
        <span className="highlight">embrace the power of Social Buying</span>{" "}
        with Cobuyr today.
      </motion.h3>
      <motion.form className="form" variants={homeVariants}>
      {/* <motion.div variants={{
              hidden: { opacity: 0 },
              visible,
            }}> */}
        <lord-icon
          src="https://cdn.lordicon.com/ribxmuoc.json"
          trigger="loop-on-hover"
          delay="2500"
          target=".form"
          stroke="bold"
        />
        {/* </motion.div> */}
        <span className="formtext"></span>
        <input
          autoComplete="name"
          name="name"
          type="text"
          placeholder="Name"
          required
        />
        <input
          autoComplete="email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <motion.button
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible,
          }}
        >
          Go!
        </motion.button>
      </motion.form>
    </Section>
  );
};
export default Sub;
