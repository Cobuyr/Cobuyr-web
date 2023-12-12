/* eslint-disable react/no-unescaped-entities */
// import MagneticButtons from "../Components/magnetBtn";
import "../Styles/Home/Home.css";
// import dash from "/dash.jpg";

import { Badge, IconBadge } from "../Components/badge";
import { Icon } from "../assets/icon";
import Sub from "../Components/sub";
import Footer from "../Components/Footer/footer";

const Home = () => {
  return (
    <>
      <section className="hero">
        <Badge iconUrl="iuaevrjs" trigger="loop" text="Welcome" />

        <h1>Revolutionize Checkout with Social Buying</h1>
        <p>
          Enhance your checkout experience with Cobuyr's cutting-edge Social
          Buying platform. Allow customers to{" "}
          <span className="highlight">
            purchase together, boosting sales and fostering a sense of
            community.
          </span>
        </p>
        <button className="primary-btn">Join Waitlist</button>
      </section>

      <section className="future">
        {/* <MagneticButtons/> */}
        {/* <div className="future-wrap"> */}
        <div className="future-textbox">
          <Badge iconUrl="qucadebu" trigger="hover" text="The Future" />
          <h2>THE FUTURE OF PAYMENTS</h2>
          <p>
            Unleash the potential of your online business with Cobuyr's Social
            Buying solution. This innovative platform empowers customers to pool
            purchases,{" "}
            <span className="highlight">
              driving sales and reducing acquisition costs.
            </span>
          </p>
        </div>
        <div className="future-listbox">
          <ul className="listbox">
            <li>
              <IconBadge iconUrl="khheayfj" trigger="hover" target="li" />
              <h4>Unlock New Sales and Savings</h4>
              <p>
                By introducing Social Buying, witness a surge in sales while
                minimizing discounts on unsold products.
              </p>
            </li>
            <li>
              <IconBadge iconUrl="odavpkmb" trigger="hover" target="li" />
              <h4>Personalized Buying Experiences</h4>
              <p>
                Offer customers a tailored shopping journey, allowing multiple
                buyers to unite in a single order.
              </p>
            </li>
            <li>
              <IconBadge iconUrl="abwrkdvl" trigger="hover" target="li" />
              <h4>Insights and Data</h4>
              <p>
                Gain invaluable insights into customer networks, enabling
                precise marketing engagements and a deeper understanding of
                buyer behavior.
              </p>
            </li>
            <li>
              <IconBadge iconUrl="piwupaqb" trigger="hover" target="li" />
              <h4>Monetize Existing Data</h4>
              <p>
                Maximize the potential of your customer data to enhance revenue
                streams.
              </p>
            </li>
            <li>
              <IconBadge iconUrl="njmddhpx" trigger="hover" target="li" />
              <h4>Increased Customer Satisfaction</h4>
              <p>
                Provide a seamless co-buying experience, reducing basket
                abandonment and enhancing satisfaction.
              </p>
            </li>
            <li>
              <IconBadge iconUrl="ksdjzsym" trigger="hover" target="li" />
              <h4>Tech Spend Reduction</h4>
              <p>
                Streamline technology costs while boosting order values and
                reducing acquisition expenses.
              </p>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </section>

      <section className="modern">
        <div className="bento">
          <div className="head">
            <Badge iconUrl="ofklvwkr" trigger="hover" text="Modern Platform" />
            <h2>THE MODERN PAYMENTS PLATFORM</h2>
          </div>
          <div className="info1">
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
          </div>
          <div className="info3">
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
          </div>
          <div className="info2">
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
          </div>
          <div className="sec">
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
          </div>
          <div className="info-mini">
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
          </div>
          <div className="poll">
            <div className="textbox">
              <h3>What Ecommerce platform is your favourite?</h3>
              <ul>
                <li>
                  <Icon name={"shopify"} />
                  Shopify
                </li>
                <li>
                  <Icon name={"woocommerce"} />
                  WooCommerce
                </li>
                <li>
                  <Icon name={"magento"} />
                  Magneto
                </li>
                <li>
                  <Icon name={"wix"} />
                  Wix
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="info-banner">
        <Badge
          iconUrl="kndkiwmf"
          trigger="hover"
          text="Checkout Transformation"
        />

        <div className="textbox">
          <h2>Buff up customer Transaction</h2>
          <p className="banner-text">
            Payment technology has not kept up with what customers want, and
            that is why we invented Social Buying,<span className="highlight"> a new category of multi-party
            payment transactions </span>that enables your customers to split and
            securely pay for purchases together.
          </p>
          <button className="primary-btn">Book Demo</button>
        </div>
        <div className="glow"></div>
        <div className="glow2"></div>
      </section>

      <section className="integrate">
        <div className="int-textbox">
          <Badge iconUrl="dmgxtuzn" trigger="hover" text="API Integration" />
          <h2>Integration and Benefits.</h2>
          <p>
            Elevate your e-commerce experience with Cobuyr's user-friendly API
            Plug-In. <span className="highlight">Our seamlessly integrated solution enables</span> effortless
            incorporation of Social Buying into your existing website structure,
            ensuring a <span className="highlight">smooth and efficient transition without disrupting your
            operations.</span>
            <br />
            <blockquote>
              By integrating our API, you unlock a world of collaborative
              purchasing opportunities for your customers while streamlining
              backend processes for your business.
            </blockquote>
          </p>
          <button className="primary-btn">Documentation</button>
        </div>
        <div className="marquee-wrap">
          <div className=" marquee marquee--vertical">
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
          </div>
          <div className=" marquee marquee--vertical marquee--reverse">
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
          </div>
          <div className=" marquee marquee--vertical marquee--delay">
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
          </div>
        </div>
      </section>

      <Sub />
      <Footer />
    </>
  );
};

export default Home;
