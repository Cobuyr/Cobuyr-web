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
          <ul className="listbox">
            <li>
              <h4>Suggest Cobuyr</h4>
              <p>Encourage your chosen company to integrate Cobuyr into their e-commerce setup.</p>
            </li>
            <li>
              <h4>Register with Us</h4>
              <p>Enter your details and the company's information below to ensure prompt payment upon their integration. It's crucial that the retailer references your name when they reach out to us.</p>
            </li>
            <li>
              <h4>Acknowledged</h4>
              <p>Upon form completion, your first name and the company's name will be listed on this page, confirming your submission acknowledgment.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="early-form">
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
      </div>
    </Section>
  );
};
export default Sub;
