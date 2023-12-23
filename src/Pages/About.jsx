/* eslint-disable react/no-unescaped-entities */
import "../Styles/About.css";
import { Badge } from "../Components/badge";
import { Icon } from "../assets/icon";
import { motion } from "framer-motion";
import "../Components/lb.js";
import Transition from "../Components/Transition";


const visible = {
  opacity: 1,
  x: 0,
  y: 0,
  transition: { staggerChildren: 0.4, duration: 0.5 },
};

const whoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible,
};

const About = () => {
  return (
    <>
      <motion.section
        className="who"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <div className="who-head">
          <motion.div
             variants={whoVariants}
          >
            <Badge iconUrl="kddybgok" trigger="hover" text="Who We Are" />
          </motion.div>
          {/* <svg
            className="liquid-button"
            data-text="different viscosity"
            data-force-factor="0.1"
            data-layer-1-viscosity="0.5"
            data-layer-2-viscosity="0.4"
            data-layer-1-mouse-force="400"
            data-layer-2-mouse-force="500"
            data-layer-1-force-limit="1"
            data-layer-2-force-limit="2"
        ></svg> */}
          <motion.h1 variants={whoVariants}>
            Cobuyr pioneered Social Buying, redefining e-commerce payments into
            a collaborative experience.
          </motion.h1>
          <motion.div className="partner" variants={whoVariants}>
            <h3>Proudly Backed By </h3>
            <div className=" marquee">
              <ul className="marquee__group ">
                <li>
                  <Icon name={"shopify"} />
                </li>
                <li>
                  <Icon name={"woo"} />
                </li>
                <li>
                  <Icon name={"wix"} />
                </li>
                <li>
                  <Icon name={"magento-full"} />
                </li>
                <li>
                  <Icon name={"salesforce"} />
                </li>
                <li>
                  <Icon name={"paypal"} />
                </li>
              </ul>
              <ul aria-hidden="true" className="marquee__group ">
                <li>
                  <Icon name={"shopify"} />
                </li>
                <li>
                  <Icon name={"woo"} />
                </li>
                <li>
                  <Icon name={"wix"} />
                </li>
                <li>
                  <Icon name={"magento-full"} />
                </li>
                <li>
                  <Icon name={"salesforce"} />
                </li>
                <li>
                  <Icon name={"paypal"} />
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div
          className="who-text"
          
        >
          <motion.p variants={{
              hidden: { opacity: 0, x: 20 },
              visible,
            }}>
            At Cobuyr, our vision revolves around fostering innovative
            connections among people through technology. In an era where
            everyday essentials strain budgets and sharing experiences enriches
            lives, we recognized a crucial gap in the e-commerce landscape: the
            inability to facilitate shared payments for products and services.
            <br />
            <br />
            Traditional e-commerce methods hinder the collective buying
            experience. Online checkout processes typically cater to
            single-purchase transactions, limiting social dynamics and business
            potential. However, we've brought forth a game-changing solution.
            <br />
            <br />
            <span className="highlight" >
              Our platform empowers families, friends, and communities within
              marketplaces to unite in group purchases for the first time.
            </span>
          </motion.p>
        </div>
      </motion.section>
    </>
  );
};

const TransAbout = Transition(About);
export default TransAbout;
