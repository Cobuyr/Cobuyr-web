import "../Styles/Home/Home.css";
import { Badge, IconBadge } from "../Components/badge";
import { motion } from "framer-motion";
import { Section } from "./inView";
import { ReferalForm } from "../Pages/Contact";

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
    <Section className="early" id="referral">
      <div className="early-info">
        <motion.div variants={homeVariants}>
          <Badge
            iconUrl="lqadwfir"
            trigger="hover"
            text="Ends on January 8 2024"
          />
        </motion.div>

        <motion.h3 className="early-h2" variants={homeVariants}>
          Cobuyr Referral Program: Earn $250
        </motion.h3>
        <motion.h4 variants={homeVariants}>
          Do you have a favourite retailer, airline, tour operator, e-commerce
          sites and marketplaces that you want to buy from online with family
          and friends?{" "}
          <span className="highlight">
            Advocate for them to integrate the Cobuyr checkout button. Upon
            Cobuyr's launch, you stand to earn $250 as our appreciation for your
            initiative.
          </span>
        </motion.h4>
        <div>
          <motion.ul className="listbox" variants={homeVariants}>
            <motion.li variants={homeVariants}>
              <div className="iconBadge">
               <lord-icon
                  src="https://cdn.lordicon.com/wzrwaorf.json"
                  trigger="hover"
                  target="li"
                  stroke="bold"
                  state="hover-conversation-alt"
                ></lord-icon>
              </div>
              <h4>Suggest Cobuyr</h4>
              <p>Encourage your chosen company to integrate Cobuyr into their e-commerce setup.</p>
            </motion.li>
            <motion.li variants={homeVariants}>
               <IconBadge iconUrl="vdjwmfqs" trigger="hover" target="li" />
              <h4>Register with Us</h4>
              <p>Enter your details and the company's information below to ensure prompt payment upon their integration. <br/> It's crucial that the retailer references your name when they reach out to us.</p>
            </motion.li>
            <motion.li variants={homeVariants}>
               <div className="iconBadge">
               <lord-icon
                  src="https://cdn.lordicon.com/ofwxettw.json"
                  trigger="hover"
                  target="li"
                  stroke="bold"
                  state="morph-open"
                ></lord-icon>
              </div>
              <h4>Acknowledged</h4>
              <p>Upon form completion, your first name and the company's name will be listed on this page, confirming your submission acknowledgment.</p>
            </motion.li>
          </motion.ul>
        </div>
        <div>
      <motion.h4 variants={homeVariants}>
          Terms and Condition
        </motion.h4>
        <ul>
          <motion.li variants={homeVariants}>Your referral payment is contingent upon the retailer referencing your name during Cobuyr integration.</motion.li>
          <motion.li variants={homeVariants}>Cobuyr reserves the right to terminate this referral program at its discretion.</motion.li>
          <motion.li variants={homeVariants}>Additional terms may apply.</motion.li>
        </ul>
      </div>
      </div>
      <div className="early-form">
         {/* <lord-icon
            src="https://cdn.lordicon.com/ribxmuoc.json"
            trigger="loop-on-hover"
            delay="2500"
            target=".early-form"
            stroke="bold"
          /> */}
        <ReferalForm/>
      </div>
    </Section>
  );
};
export default Sub;
