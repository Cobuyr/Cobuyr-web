/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from "react";
import "../Styles/About.css";
// import gsap from "gsap";
import { Badge } from "../Components/badge";
import { Icon } from "../assets/icon";
import "../Components/lb.js";
import Transition from "../Components/Transition";
// import Transition from "../Components/Transition";
const About = () => {
  // const about = gsap.timeline();
  const who = useRef(null);
  const partner = useRef(null);
  const whoText = useRef(null);

  // useEffect(() => {
  //   about.from(who.current, {
  //     duration: .6,
  //     skewX: 10,
  //     x: -100,
  //     opacity: 0,
  //   }, '-=3.5');
  //   about.from(partner.current, {
  //     duration: .5,
  //     skewX: 10,
  //     x: -100,
  //     opacity: 0,
  //   }, '-=3');
  // });
  return (
    <>
      {/* <Transition timeline={about} /> */}

      <section className="who">
        <div className="who-head" ref={who}>
          <Badge iconUrl="kddybgok" trigger="hover" text="Who We Are" />
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
          <h1>
            Cobuyr pioneered Social Buying, redefining e-commerce payments into
            a collaborative experience.
          </h1>
          <div className="partner" ref={partner}>
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
        <div className="who-text" ref={whoText}>
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

const TransAbout = Transition(About);
export default TransAbout
