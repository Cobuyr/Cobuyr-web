/* eslint-disable react/no-unescaped-entities */
import "../Styles/About.css";
import { Badge } from "../Components/badge";
import { Icon } from "../assets/icon";

const About = () => {
  return (
    <>
      <section className="who">
        <div className="who-head">
          <Badge iconUrl="kddybgok" trigger="hover" text="Who We Are" />
          <h1>
            Cobuyr pioneered Social Buying, redefining e-commerce payments into
            a collaborative experience.
          </h1>
          <div className="partner">
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
      </div>
        </div>
        <div className="who-text">
          <p>
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
          </p>
        </div>
      </section>
     
    </>
  );
};
export default About;
