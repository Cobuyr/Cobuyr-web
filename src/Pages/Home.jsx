/* eslint-disable react/no-unescaped-entities */
// import MagneticButtons from "../Components/magnetBtn";
import "../Styles/Home/Home.css";
// import dash from "/dash.jpg";

import { Badge, IconBadge } from "../Components/badge";
import { Icon } from "../assets/icon";
import Sub from "../Components/sub";
import Footer from "../Components/Footer/footer";
import Transition from "../Components/Transition";
import { motion } from "framer-motion";
import { Section } from "../Components/inView";
import MagneticBtn from "../Components/magnetBtn";

// import LiquidButton from "../Components/magnetBtn";

const Home = () => {
  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { staggerChildren: 0.4, duration: 0.5 },
  };

  const homeVariants = {
    hidden: { opacity: 0, y: 20, scaleZ: 1 },
    visible,
  };

  return (
    <>
      <Section className="hero">
        <motion.div variants={homeVariants}>
          <Badge iconUrl="iuaevrjs" trigger="loop" text="Welcome" />
        </motion.div>

        <motion.h1 variants={homeVariants}>
          Revolutionize Checkout with Social Buying
        </motion.h1>
        <motion.p variants={homeVariants}>
          Enhance your checkout experience with Cobuyr's cutting-edge Social
          Buying platform. Allow customers to{" "}
          <span className="highlight">
            purchase together, boosting sales and fostering a sense of
            community.
          </span>
        </motion.p>
        {/* <motion.button className="primary-btn" variants={homeVariants}>
          Join Waitlist
        </motion.button> */}

        <motion.div
          className="mgBtn"
          variants={{
            hidden: { opacity: 0, scaleZ: 0 },
            visible,
          }}
        >
          <MagneticBtn>
            <button>Join The Waitlist</button>
          </MagneticBtn>
        </motion.div>
      </Section>

      <Section className="future">
        <motion.div className="future-textbox" variants={homeVariants}>
          <motion.div variants={homeVariants}>
            <Badge iconUrl="qucadebu" trigger="hover" text="The Future" />
          </motion.div>
          <motion.h2 variants={homeVariants}>THE FUTURE OF PAYMENTS</motion.h2>
          <motion.p variants={homeVariants}>
            Unleash the potential of your online business with Cobuyr's Social
            Buying solution. This innovative platform empowers customers to pool
            purchases,{" "}
            <span className="highlight">
              driving sales and reducing acquisition costs.
            </span>
          </motion.p>
        </motion.div>
        <motion.div className="future-listbox" variants={homeVariants}>
          <motion.ul className="listbox" variants={homeVariants}>
            <motion.li variants={homeVariants}>
              <IconBadge iconUrl="khheayfj" trigger="hover" target="li" />
              <h4>Unlock New Sales and Savings</h4>
              <p>
                By introducing Social Buying, witness a surge in sales while
                minimizing discounts on unsold products.
              </p>
            </motion.li>
            <motion.li variants={homeVariants}>
              <IconBadge iconUrl="odavpkmb" trigger="hover" target="li" />
              <h4>Personalized Buying Experiences</h4>
              <p>
                Offer customers a tailored shopping journey, allowing multiple
                buyers to unite in a single order.
              </p>
            </motion.li>
            <motion.li variants={homeVariants}>
              <IconBadge iconUrl="abwrkdvl" trigger="hover" target="li" />
              <h4>Insights and Data</h4>
              <p>
                Gain invaluable insights into customer networks, enabling
                precise marketing engagements and a deeper understanding of
                buyer behavior.
              </p>
            </motion.li>
            <motion.li variants={homeVariants}>
              <IconBadge iconUrl="piwupaqb" trigger="hover" target="li" />
              <h4>Monetize Existing Data</h4>
              <p>
                Maximize the potential of your customer data to enhance revenue
                streams.
              </p>
            </motion.li>
            <motion.li variants={homeVariants}>
              <IconBadge iconUrl="njmddhpx" trigger="hover" target="li" />
              <h4>Increased Customer Satisfaction</h4>
              <p>
                Provide a seamless co-buying experience, reducing basket
                abandonment and enhancing satisfaction.
              </p>
            </motion.li>
            <motion.li variants={homeVariants}>
              <IconBadge iconUrl="ksdjzsym" trigger="hover" target="li" />
              <h4>Tech Spend Reduction</h4>
              <p>
                Streamline technology costs while boosting order values and
                reducing acquisition expenses.
              </p>
            </motion.li>
          </motion.ul>
        </motion.div>
      </Section>

      <Section className="modern">
        <div className="bento">
          <motion.div className="head">
            <motion.div variants={homeVariants}>
              <Badge
                iconUrl="ofklvwkr"
                trigger="hover"
                text="Modern Platform"
              />
            </motion.div>
            <motion.h2 variants={homeVariants}>
              THE MODERN PAYMENTS PLATFORM
            </motion.h2>
          </motion.div>
          <motion.div className="info1" variants={homeVariants}>
            <div className="textbox">
              <IconBadge iconUrl="iiuaqmnt" trigger="hover" target=".info1" />

              <h3>Unified Payment Innovation</h3>
              <p>
                Discover Cobuyr, the pioneer in integrated payment platforms.
                Seamlessly amalgamating payments, data, and analytics, it
                revolutionizes the purchasing experience. Unlock the collective
                purchasing power of millions engaged in collaborative buying
                with family and friends.
              </p>
              {/* <div className="image">
                <img
                  src={dash}
                  alt="new category of multi-party payment transactions"
                />
              </div> */}
            </div>
          </motion.div>
          <motion.div className="info3" variants={homeVariants}>
            <div className="textbox">
              <IconBadge iconUrl="wzrwaorf" trigger="hover" target=".info3" />
              <h3>Collaborative Purchasing Community</h3>
              <p>
                Cobuyr fosters a vibrant community of cobuyers. It empowers
                individuals seeking shared expenses for online products and
                services. Join this collaborative revolution, transforming how
                purchases are made and enjoyed.
              </p>
            </div>
          </motion.div>
          <motion.div className="info2" variants={homeVariants}>
            <div className="textbox">
              <IconBadge iconUrl="ezsjqygj" trigger="hover" target=".info2" />
              <h3>Cutting-edge Data and Analytics</h3>
              <p>
                At Cobuyr, dive into an innovative world of data and analytics.
                Explore a holistic platform merging payment insights, customer
                data, and market analytics. Gain profound market understanding
                through collaborative purchasing trends.
              </p>
            </div>
          </motion.div>
          <motion.div className="sec" variants={homeVariants}>
            <h2>Security Features</h2>
            <div className=" marquee">
              <ul className="marquee__group ">
                <li>
                  <Icon name={"encrypt"} />
                  Robust encryption protocols
                </li>
                <li>
                  <Icon name={"server"} />
                  Fortified server infrastructure
                </li>
                <li>
                  <Icon name={"legal"} />
                  Legal and regulatory compliance
                </li>
                <li>
                  <Icon name={"auth"} />
                  Multi-factor authentication
                </li>
                <li>
                  <Icon name={"fraud"} />
                  Advanced fraud algorithms
                </li>
                <li>
                  <Icon name={"policy"} />
                  Strict access policies
                </li>
              </ul>
              <ul aria-hidden="true" className="marquee__group ">
                <li>
                  <Icon name={"encrypt"} />
                  Robust encryption protocols
                </li>
                <li>
                  <Icon name={"server"} />
                  Fortified server infrastructure
                </li>
                <li>
                  <Icon name={"legal"} />
                  Legal and regulatory compliance
                </li>
                <li>
                  <Icon name={"auth"} />
                  Multi-factor authentication
                </li>
                <li>
                  <Icon name={"fraud"} />
                  Advanced fraud algorithms
                </li>
                <li>
                  <Icon name={"policy"} />
                  Strict access policies
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div className="info-mini" variants={homeVariants}>
            <div className="textbox">
              <h3>
                How Social?{" "}
                <lord-icon
                  src="https://cdn.lordicon.com/yxyampao.json"
                  trigger="loop-on-hover"
                  target=".info-mini"
                  delay="2000"
                ></lord-icon>
              </h3>
              <p>Discover Cobuyr</p>
            </div>
          </motion.div>
          <motion.div className="poll" variants={homeVariants}>
            <div className="textbox">
              <motion.h3 variants={homeVariants}>
                What Ecommerce platform is your favourite?
              </motion.h3>
              <motion.ul>
                <motion.li variants={homeVariants}>
                  <Icon name={"shopify"} />
                  Shopify
                </motion.li>
                <motion.li variants={homeVariants}>
                  <Icon name={"woocommerce"} />
                  WooCommerce
                </motion.li>
                <motion.li variants={homeVariants}>
                  <Icon name={"magento"} />
                  Magneto
                </motion.li>
                <motion.li variants={homeVariants}>
                  <Icon name={"wix"} />
                  Wix
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="info-banner">
        <motion.div variants={homeVariants}>
          <Badge
            iconUrl="kndkiwmf"
            trigger="hover"
            text="Checkout Transformation"
          />
        </motion.div>

        <motion.div className="textbox" variants={homeVariants}>
          <motion.h2 variants={homeVariants}>
            Buff up customer Transaction
          </motion.h2>
          <motion.p className="banner-text" variants={homeVariants}>
            Payment technology has not kept up with what customers want, and
            that is why we invented Social Buying,
            <span className="highlight">
              {" "}
              a new category of multi-party payment transactions{" "}
            </span>
            that enables your customers to split and securely pay for purchases
            together.
          </motion.p>
          <motion.button className="primary-btn" variants={homeVariants}>
            Book Demo
          </motion.button>
        </motion.div>
        <div className="glow"></div>
        <div className="glow2"></div>
      </Section>

      <Section className="integrate">
        <div className="int-textbox">
          <motion.div variants={homeVariants}>
            <Badge iconUrl="dmgxtuzn" trigger="hover" text="API Integration" />
          </motion.div>
          <motion.h2 variants={homeVariants}>
            Integration and Benefits.
          </motion.h2>
          <motion.p variants={homeVariants}>
            Elevate your e-commerce experience with Cobuyr's user-friendly API
            Plug-In.{" "}
            <span className="highlight">
              Our seamlessly integrated solution enables
            </span>{" "}
            effortless incorporation of Social Buying into your existing website
            structure, ensuring a{" "}
            <span className="highlight">
              smooth and efficient transition without disrupting your
              operations.
            </span>
            <br />
            <blockquote>
              By integrating our API, you unlock a world of collaborative
              purchasing opportunities for your customers while streamlining
              backend processes for your business.
            </blockquote>
          </motion.p>
          <motion.button className="primary-btn" variants={homeVariants}>
            Documentation
          </motion.button>
        </div>
        <motion.div className="marquee-wrap" variants={homeVariants}>
          <motion.div
            className=" marquee marquee--vertical"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible,
            }}
          >
            <ul className="marquee__group ">
              <li>
                <Icon name={"search"} />
                Lower the cost of customer acquisition
              </li>
              <li>
                <Icon name={"contact"} />
                Highly personalised buying experience
              </li>
              <li>
                <Icon name={"discount"} />
                Fewer discounts to move unsold products
              </li>
              <li>
                <Icon name={"insights"} />
                Unique insights into customer networks
              </li>
              <li>
                <Icon name={"group"} />
                Multiple customer buy together in one order
              </li>
            </ul>
            <ul aria-hidden="true" className="marquee__group ">
              <li>
                <Icon name={"search"} />
                Lower the cost of customer acquisition
              </li>
              <li>
                <Icon name={"contact"} />
                Highly personalised buying experience
              </li>
              <li>
                <Icon name={"discount"} />
                Fewer discounts to move unsold products
              </li>
              <li>
                <Icon name={"insights"} />
                Unique insights into customer networks
              </li>
              <li>
                <Icon name={"group"} />
                Multiple customer buy together in one order
              </li>
            </ul>
          </motion.div>
          <motion.div
            className=" marquee marquee--vertical marquee--reverse"
            variants={{
              hidden: { opacity: 0 },
              visible,
            }}
          >
            <ul className="marquee__group ">
              <li>
                <Icon name={"search"} />
                Lower the cost of customer acquisition
              </li>
              <li>
                <Icon name={"contact"} />
                Highly personalised buying experience
              </li>
              <li>
                <Icon name={"discount"} />
                Fewer discounts to move unsold products
              </li>
              <li>
                <Icon name={"insights"} />
                Unique insights into customer networks
              </li>
              <li>
                <Icon name={"group"} />
                Multiple customer buy together in one order
              </li>
            </ul>
            <ul aria-hidden="true" className="marquee__group ">
              <li>
                <Icon name={"search"} />
                Lower the cost of customer acquisition
              </li>
              <li>
                <Icon name={"contact"} />
                Highly personalised buying experience
              </li>
              <li>
                <Icon name={"discount"} />
                Fewer discounts to move unsold products
              </li>
              <li>
                <Icon name={"insights"} />
                Unique insights into customer networks
              </li>
              <li>
                <Icon name={"group"} />
                Multiple customer buy together in one order
              </li>
            </ul>
          </motion.div>
          <motion.div
            className=" marquee marquee--vertical marquee--delay"
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible,
            }}
          >
            <ul className="marquee__group ">
              <li>
                <Icon name={"search"} />
                Lower the cost of customer acquisition
              </li>
              <li>
                <Icon name={"contact"} />
                Highly personalised buying experience
              </li>
              <li>
                <Icon name={"discount"} />
                Fewer discounts to move unsold products
              </li>
              <li>
                <Icon name={"insights"} />
                Unique insights into customer networks
              </li>
              <li>
                <Icon name={"group"} />
                Multiple customer buy together in one order
              </li>
            </ul>
            <ul aria-hidden="true" className="marquee__group ">
              <li>
                <Icon name={"search"} />
                Lower the cost of customer acquisition
              </li>
              <li>
                <Icon name={"contact"} />
                Highly personalised buying experience
              </li>
              <li>
                <Icon name={"discount"} />
                Fewer discounts to move unsold products
              </li>
              <li>
                <Icon name={"insights"} />
                Unique insights into customer networks
              </li>
              <li>
                <Icon name={"group"} />
                Multiple customer buy together in one order
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </Section>

      <Sub />
      <Footer />
    </>
  );
};

const TransHome = Transition(Home);
export default TransHome;
