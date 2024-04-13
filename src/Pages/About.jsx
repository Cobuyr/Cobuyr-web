/* eslint-disable react/no-unescaped-entities */
import "../Styles/About.css";
import "../Styles/Plat.css";
import "../Styles/Home/Home.css";
import { Badge, IconBadge } from "../Components/badge";
import { Icon } from "../assets/icon";

import { motion } from "framer-motion";
import Transition from "../Components/Transition";
import { Section } from "../Components/inView";
import Footer from "../Components/Footer/footer";
import { SpotBtn } from "../Components/magnetBtn";
import { useRef, useEffect } from "react";

const visible = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  transition: { staggerChildren: 0.4, duration: 0.5 },
};

const whoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible,
};

const About = () => {
  const cardContRef = useRef(null);

  const cardRefs = Array.from({ length: 6 }).map(() => useRef(null));
  const spotRefs = Array.from({ length: 6 }).map(() => useRef(null));
  const coverspotRefs = Array.from({ length: 6 }).map(() => useRef(null));

  useEffect(() => {
    const handleMouseMove = (ev) => {
      cardRefs.forEach((cardRef, index) => {
        const spotlight = spotRefs[index].current;
        const fspotlight = coverspotRefs[index].current;
        const rec = fspotlight.getBoundingClientRect();

        if (spotlight) {
          spotlight.style.transform = `translate(${
            ev.clientX - rec.left - rec.width / 2
          }px, ${ev.clientY - rec.top - rec.height / 2}px)`;
          spotlight.style.opacity = "1";
        }
      });
    };

    const cardCont = cardContRef.current;
    if (cardCont) {
      cardCont.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (cardCont) {
        cardCont.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [cardRefs, spotRefs, coverspotRefs]);

  return (
    <>
      <Section
        className="who"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <div className="who-head">
          <motion.div variants={whoVariants}>
            <Badge iconUrl="kddybgok" trigger="hover" text="Who We Are" />
          </motion.div>
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

        <div className="who-text">
          <motion.p
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible,
            }}
          >
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
            <span className="highlight">
              Our platform empowers families, friends, and communities within
              marketplaces to unite in group purchases for the first time.
            </span>
          </motion.p>
        </div>
      </Section>

      <Section
        className="story"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <div className="who-head">
          <motion.h2 variants={whoVariants}>OUR STORY</motion.h2>
          <motion.p variants={whoVariants}>
            We believe buying should be fun and helpful to consumers, and money
            making for retailers. The current generation of checkouts are not
            designed for today's era of Social Buying, and so we had to develop
            a solution.
            <br />
            <span className="highlight">Welcome to Cobuyr.</span>
          </motion.p>
        </div>

        <div className="who-text">
          <motion.p
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible,
            }}
          >
            Cobuyr has invented a new way for consumers to buy online — and
            that's together, like buying should be for millions of people who
            want or need to share the cost of purchases.
            <br />
            <br />
            Founded in 2023, Cobuyr has transformed shopping online by
            developing the first and only all-in-one payments, connected data
            and customer analytics platform that empowers retailers to acquire
            more customers, increase average order value, and lower the cost Of
            customer acquisition by enabling people to buy together for the
            first time.
            <br />
            <br />
          </motion.p>
        </div>
      </Section>

      <Section className="platHead bl">
        <motion.div
          className="plattext"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
        >
          <motion.div variants={whoVariants}>
            <Badge
              iconUrl="bqkijzun"
              trigger="hover"
              text="What is Social Buying?"
            />
          </motion.div>
          <motion.h2 variants={whoVariants}>
            Welcome to the era of Social Buying -{" "}
            <span className="mainText">
              modernizing your checkout experience.
            </span>
          </motion.h2>
          <motion.p variants={whoVariants}>
            Customers love to share so why does your checkout process stop them
            from spending money together with you?
            <br />
            <br />
            Payment technology has not kept up with what customers want, and
            that is why we pioneered Social Buying, a new category of payments
            that enables your customers to split purchases.
          </motion.p>
          <motion.div variants={whoVariants}>
            <SpotBtn text={"Book Demo"} /* variant={whoVariants} */ />
          </motion.div>
        </motion.div>
        <motion.div
          className="platimg"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible,
          }}
        >
          <img src="/group.webp" alt="dsdss" />
        </motion.div>
      </Section>
      <Section
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="story bl"
      >
        <div className="terms">
          <motion.h3 variants={whoVariants}>
            Cobuyr, with its innovative platform, gives your customers a new
            social buying experience that also modernizes your checkout
            processes so you can create more value:
          </motion.h3>

          <ul>
            <motion.li variants={whoVariants}>
              Improve customer satisfaction
            </motion.li>
            <motion.li variants={whoVariants}>
              Reduce customer acquisition costs
            </motion.li>
            <motion.li variants={whoVariants}>
              Increase average order value
            </motion.li>
            <motion.li variants={whoVariants}>
              Lower basket abandonment
            </motion.li>
            <motion.li variants={whoVariants}>
              Reduce technology spend
            </motion.li>
            <motion.li variants={whoVariants}>Monetise existing data</motion.li>
          </ul>
        </div>
        <div>
          <motion.p variants={whoVariants}>
            Social Buying empowers your customers to proactively invite their
            friends to spend money together on your website. This
            transformational network effect is only possible because Cobuyr
            turns the traditional single payment transaction page into a fun and
            memorable group buying experience for the first time.
            <br />
            <br />
            Cobuyr is the future of customer first payment experiences by
            enabling millions of people around the world to buy in groups while
            giving retailers unmatched real-real insights into the
            interconnected relationships, networks and behaviors of customers.
          </motion.p>
        </div>
      </Section>

      <Section className="future bl">
        <motion.div className="future-textbox" variants={whoVariants}>
          <motion.div variants={whoVariants}>
            <Badge iconUrl="qucadebu" trigger="hover" text="The Future" />
          </motion.div>
          <motion.h2 variants={whoVariants}>
            Why Companies
            <span className="mainText"> Choose Us</span>
          </motion.h2>
          <motion.p variants={whoVariants}>
            Unleash the potential of your online business with Cobuyr's Social
            Buying solution. This innovative platform empowers customers to pool
            purchases,{" "}
            <span className="highlight">
              driving sales and reducing acquisition costs.
            </span>
          </motion.p>
        </motion.div>
        <motion.div
          className="future-listbox"
          variants={whoVariants}
          ref={cardContRef}
        >
          <motion.ul className="listbox" variants={whoVariants}>
            <motion.li
              variants={whoVariants}
              className="card"
              ref={cardRefs[0]}
            >
              <IconBadge iconUrl="rmjnvgsm" trigger="hover" target="li" />
              <h4>All-in-one platform</h4>
              <p>
                Cobuyr provides you with an all-in-one platform that includes
                group buying, connected customer data and advanced analytics in
                one solution, which plugs into your existing checkout process.
              </p>

              <div className="spotlight" ref={spotRefs[0]}></div>
              <div className="coverspotlight" ref={coverspotRefs[0]}></div>
            </motion.li>
            <motion.li
              variants={whoVariants}
              className="card"
              ref={cardRefs[1]}
            >
              <IconBadge iconUrl="qvyppzqz" trigger="hover" target="li" />
              <h4>Quick to deploy</h4>
              <p>
                Developed for speed, Cobuyr can be deployed in just an hour by
                using pre-built, plug and play API integrations. There is no
                need to replace your existing payment technologies.
              </p>
              <div className="spotlight" ref={spotRefs[1]}></div>
              <div className="coverspotlight" ref={coverspotRefs[1]}></div>
            </motion.li>
            <motion.li
              variants={whoVariants}
              className="card"
              ref={cardRefs[2]}
            >
              <IconBadge iconUrl="abwrkdvl" trigger="hover" target="li" />
              <h4>Generate more ROI</h4>
              <p>
                Cobuyr enables you to create a greater return on your existing
                technology investments, and this includes extending the life of
                your legacy systems and tools.
              </p>
              <div className="spotlight" ref={spotRefs[2]}></div>
              <div className="coverspotlight" ref={coverspotRefs[2]}></div>
            </motion.li>
            <motion.li
              variants={whoVariants}
              className="card"
              ref={cardRefs[3]}
            >
              <IconBadge iconUrl="njmddhpx" trigger="hover" target="li" />
              <h4>Make better decisions</h4>
              <p>
                Cobuyr unifies your payments, customer and product data in one
                central repository, providing, uniquely, insights into the
                social networks of groups of cobuyers and the individuals within
                these groups.
              </p>
              <div className="spotlight" ref={spotRefs[3]}></div>
              <div className="coverspotlight" ref={coverspotRefs[3]}></div>
            </motion.li>
            <motion.li
              variants={whoVariants}
              className="card"
              ref={cardRefs[4]}
            >
              <IconBadge iconUrl="ksdjzsym" trigger="hover" target="li" />
              <h4>Simple pricing</h4>
              <p>
                Cobuyr is simple to use and it's simple to buy with a pricing
                model that is simple and transparent — monthly SaaS subscription
                plus a percentage of the transaction value.
              </p>

              <div className="spotlight" ref={spotRefs[4]}></div>
              <div className="coverspotlight" ref={coverspotRefs[4]}></div>
            </motion.li>
            <motion.li
              variants={whoVariants}
              className="card"
              ref={cardRefs[5]}
            >
              <IconBadge iconUrl="khheayfj" trigger="hover" target="li" />
              <h4>Unlock New Sales and Savings</h4>
              <p>
                By introducing Social Buying, witness a surge in sales while
                minimizing discounts on unsold products.
              </p>

              <div className="spotlight" ref={spotRefs[5]}></div>
              <div className="coverspotlight" ref={coverspotRefs[5]}></div>
            </motion.li>
          </motion.ul>
        </motion.div>
      </Section>

      <Footer />
    </>
  );
};

const TransAbout = Transition(About);
export default TransAbout;
