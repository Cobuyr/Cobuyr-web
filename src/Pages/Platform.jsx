/* eslint-disable react/no-unescaped-entities */
import "../Styles/Plat.css";
import { Badge } from "../Components/badge";
import { Icon } from "../assets/icon";
import { motion } from "framer-motion";
import Transition from "../Components/Transition";
import { Section } from "../Components/inView";
import Footer from "../Components/Footer/footer";
import { SpotBtn } from "../Components/magnetBtn";

const visible = {
  opacity: 1,
  x: 0,
  y: 0,
  transition: { staggerChildren: 0.4, duration: 0.5 },
};

const platVariants = {
  hidden: { opacity: 0, y: 20 },
  visible,
};

const Platform = () => {
  return (
    <>
      {/* <motion.section
        className="ind"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      > */}
      <Section className="platHead">
        <div className="plattext">
          <h2>modernize platform </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            totam officiis accusamus ea sunt asperiores et molestias dolore,
            quas quidem culpa impedit laborum sed quae eaque veniam ullam ipsa
            molestiae?
          </p>
          <SpotBtn text={"Book Demo"} /* variant={homeVariants} */ />
        </div>
        <div className="platimg">
          <img src="/group.webp" alt="dsdss" />
        </div>
      </Section>

      <Section className="info-banner">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
          optio excepturi. Possimus voluptate beatae accusantium excepturi
          labore quo aspernatur animi?
        </p>
      </Section>

      <Section className="platList">
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>

        <div className="list">
          <div className="subtext">
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ut,
              accusamus vitae tempore recusandae nisi.
            </p>
          </div>
          <div /* className="col-bg" */ className="platimg">
            <img src="/group.webp" alt="" />
          </div>
        </div>

        <div className="list">
          <div className="subtext">
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ut,
              accusamus vitae tempore recusandae nisi.
            </p>
          </div>
          <div /* className="col-bg" */ className="platimg">
            <img src="/group.webp" alt="" />
          </div>
        </div>
      </Section>

      <Footer />
      {/* </motion.section> */}
    </>
  );
};

const TransPlatform = Transition(Platform);
export default TransPlatform;
