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
  scale: 1,
  transition: { staggerChildren: 0.15, duration: 0.5 },
};

const platVariants = {
  hidden: { opacity: 0, y: 20 },
  visible,
};

const Industry = () => {
  return (
    <>
      <Section className="platHead">
        <motion.div
          className="plattext"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
        >
          <motion.h3 variants={platVariants}>
            Millions of people around the world want to buy online like they can
            in person with family and friends -{" "}
            <span className="mainText">Together</span>
          </motion.h3>
          <motion.p variants={platVariants}>
            Cobuyr has invented Social Buying, the modern checkout experience
            for people to purchase products and services in groups they create
            whenever they want. These groups can be friends, family and members
            of communities such as online marketplaces
          </motion.p>
          <motion.div variants={platVariants}>
            <SpotBtn text={"Book Demo"} /* variant={homeVariants} */ />
          </motion.div>
        </motion.div>
        <motion.div
          className="platimg"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible,
          }}
        >
          <img src="/peo.webp" alt="instant group buy" />
        </motion.div>
      </Section>

      {/* <Section className="info-banner">
        <motion.h2 variants={platVariants}>
          Give your customers the{" "}
          <span className="mainText">buying experience</span> they want
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible,
          }}
        >
          Cobuyr provides the checkout experience consumers expect that will
          drive and improve customer acquisition and conversion for retailers.
          Developed for the modern era of Social Buying, Cobuyr transforms your
          traditional single person payment transaction into a multi-person,
          money-making group purchasing experience by enabling many people to
          buy together for the first time at checkout.
        </motion.p>
      </Section> */}

      <Section className="platList">
        <motion.h2 variants={platVariants}>
          <span className="mainText">Industries</span> we operate in
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
        >
          <div className="list">
            <motion.div className="subtext">
              <motion.h3 variants={platVariants}>Airlines</motion.h3>
              <motion.p variants={platVariants}>
                Payment innovation improves customer experiences, sales and the
                bottom line for airlines. With thousands of people travelling
                everyday together, Cobuyr enables passengers to split the
                purchase of tickets, which gives them a unique and memorable
                experience that creates loyalty.
              </motion.p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible,
              }}
              className="platimg"
            >
              <img src="/air.webp" alt="airlines" />
            </motion.div>
          </div>

          <div className="list">
            <div className="subtext">
              <motion.h3 variants={platVariants}>
                Wine, beer and spirit retailers
              </motion.h3>
              <motion.p variants={platVariants}>
                People love to spend time together, sharing their favourite
                drink with a story or two. Retailers are using Cobuyr to lower
                the cost and time of acquiring customers by enabling shoppers to
                buy together with family and friends.
              </motion.p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible,
              }}
              className="platimg"
            >
              <img src="/beer.webp" alt=" Wine, beer and spirit retailers" />
            </motion.div>
          </div>
          <div className="list">
            <div className="subtext">
              <motion.h3 variants={platVariants}>
                Hospitality companies
              </motion.h3>
              <motion.p variants={platVariants}>
                Travelling together creates special moments that last a
                lifetime, and this journey starts at checkout when groups of
                friends and family members can simply purchase experiences at
                hotels, spas, event venues and leisure parks enabled by Cobuyr.
              </motion.p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible,
              }}
              className="platimg"
            >
              <img style={{objectFit:'contain'}} src="/hosp.webp" alt="Hospitality companies" />
            </motion.div>
          </div>
          <div className="list">
            <div className="subtext">
              <motion.h3 variants={platVariants}>Luxury retailers</motion.h3>
              <motion.p variants={platVariants}>
                Designer fashion, home, beauty and other luxury items are often
                out of reach of consumers which inhibit the ability for
                retailers to grow customer numbers. No more with group
                purchasing, which enables shoppers to share the cost of much
                wanted products and services at checkout from Cobuyr.
              </motion.p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible,
              }}
              className="platimg"
            >
              <img src="/lux.webp" alt="Luxury retailers" />
            </motion.div>
          </div>
          <div className="list">
            <div className="subtext">
              <motion.h3 variants={platVariants}>Travel companies</motion.h3>
              <motion.p variants={platVariants}>
                The cost of traveling can become expensive depending on the
                number of people in the group. Tour operators, car rental
                agencies and ferry companies use Cobuyr to increase sales and
                repeat purchases by offering customers the ability to split the
                purchase at checkout.
              </motion.p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible,
              }}
              className="platimg"
            >
              <img src="/trav.webp" alt="Travel companies" />
            </motion.div>
          </div>
          <div className="list">
            <div className="subtext">
              <motion.h3 variants={platVariants}>Marketplaces</motion.h3>
              <motion.p variants={platVariants}>
                Millions of consumers around the world turn to marketplaces to
                purchase products and services but there is often a lack of
                differentiation — until now. Cobuyr empowers marketplaces to
                create market leading shopping experiences by enabling members
                of marketplaces to buy together for the first time.
              </motion.p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible,
              }}
              className="platimg"
            >
              <img src="/mark2.webp" alt="Marketplaces" />
            </motion.div>
          </div>
          <div className="list">
            <div className="subtext">
              <motion.h3 variants={platVariants}>Wineries</motion.h3>
              <motion.p variants={platVariants}>
              Consumers have near unlimited choice when buying wines so yesterday’s customer acquisition and retention strategies need to be rethought.  Wineries use Cobuyr to better connect, engage and serve customers that results in generating incremental online sales from new new and existing customers, including wine club members.
              </motion.p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible,
              }}
              className="platimg"
            >
              <img src="/down.webp" alt="Marketplaces" />
            </motion.div>
          </div>
        </motion.div>
      </Section>

      <Footer />
      {/* </motion.section> */}
    </>
  );
};

const TransIndustry = Transition(Industry);
export default TransIndustry;
