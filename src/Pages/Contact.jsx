import "../Styles/Contact.css";

import { useState } from "react";
import emailjs from "@emailjs/browser";
// import Accordion from "../Components/Accordion";
import Transition from "../Components/Transition";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  // const [isEmailValid, setIsEmailValid] = useState(true);

  const submit = () => {
    // setIsEmailValid(!!email);

    if (name && email && message) {
      const serviceId = "service_xpeei0l";
      const templateId = "cobuyrtemp";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    }
    // else {
    //   alert("Please fill in all fields.");
    // }
  };

  const [bgX, setBgX] = useState(0);
  const [bgY, setBgY] = useState(0);

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const rect = e.target.getBoundingClientRect();

    // Calculate mouse position relative to the element
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Update state with smooth effect
    setBgX(x);
    setBgY(y);
  };

  // Data for accordion

  // let data = [
  //   {
  //     title: "One",
  //     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...`,
  //   },
  //   {
  //     title: "Two",
  //     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...`,
  //   },
  //   {
  //     title: "Three",
  //     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...
  //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...`,
  //   },
  // ];

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { staggerChildren: 0.4, duration: 0.5 },
  };

  const contVariants = {
    hidden: { opacity: 0, y: 20 },
    visible,
  };

  return (
    <motion.section
      className={`contact default ${emailSent ? "valid" : "invalid"}`}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
    >
      <div
        className="fl"
        onMouseMove={handleMouseMove}
        style={{
          "--bg-x": bgX,
          "--bg-y": bgY,
        }}
      >
        <motion.div
          className="contact-text"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible,
          }}
        >
          <h1>Get in touch</h1>
        </motion.div>

        <motion.div id="contact-form">
          <motion.div className="inp-field" variants={contVariants}>
            <input
            name="name"
            autoComplete="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span></span>
          </motion.div>
          <motion.div className="inp-field" variants={contVariants}>
            <input
            name="email"
            autoComplete="email"
              type="email"
              placeholder="Your email address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
          </motion.div>

          <motion.textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variants={contVariants}
          ></motion.textarea>
          <motion.button onClick={submit} variants={contVariants}>
            Send Message
          </motion.button>

          <motion.span
            className={emailSent ? "visible" : "not-visible"}
            variants={contVariants}
          >
            <p>Thank you for your message, we will be in touch in no time!</p>
          </motion.span>
          <motion.span
            className={emailSent ? "not-visible" : "visible"}
            variants={contVariants}
          >
            <p>Please Fill in all Fields</p>
          </motion.span>
        </motion.div>
      </div>

      {/* <div className="fl r">
        <div className="faq">
          <Accordion data={data} />
        </div>
        <div className="contact-text">
          <h1>FAQ</h1>
        </div>
      </div> */}
    </motion.section>
  );
};

const TransContact = Transition(Contact);
export default TransContact;

export const ReferalForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  // const [isEmailValid, setIsEmailValid] = useState(true);

  const submit = () => {
    // setIsEmailValid(!!email);

    if (name && email && phone && url) {
      const serviceId = "service_xpeei0l";
      const templateId = "cobuyrtemp";
      const templateParams = {
        name,
        email,
        phone,
        url,
      };

      emailjs
        .send(serviceId, templateId, templateParams)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setPhone("");
      setUrl("");
      setEmailSent(true);
    }
    // else {
    //   alert("Please fill in all fields.");
    // }
  };

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { staggerChildren: 0.4, duration: 0.5 },
  };

  const contVariants = {
    hidden: { opacity: 0, y: 20 },
    visible,
  };

  return (
      <motion.div id="contact-form">
         <motion.h3 className="early-h2" variants={contVariants}>
          Information Submission
        </motion.h3>
        <motion.div className="inp-field" variants={contVariants}>
          <input
            autoComplete="name"
            name="name"
            type="text"
            placeholder="Your Full Name"
            value={name}
            title="Enter your Full name for proper identification"
            onChange={(e) => setName(e.target.value)}
          />
          <span></span>
        </motion.div>
        <motion.div className="inp-field" variants={contVariants}>
          <input
          name="email"
          autoComplete="email"
            type="email"
            placeholder="Your email address"
            value={email}
            title="Enter a valid Email to receive confirmation"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <span></span>
        </motion.div>
        <motion.div className="inp-field" variants={contVariants}>
          <input
          name="tel"
          autoComplete="tel"
            type="tel"
            placeholder="Your Phone Number"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <span></span>
        </motion.div>
        <motion.div className="inp-field" variants={contVariants}>
          <input
            type="url"
            name="url"
            autoComplete="url"
            placeholder="Your Registered site's URL"
            pattern="https://.*"
            required
            title="Enter the correct URL of your proposed site  for validation"
            onChange={(e) => setUrl(e.target.value)}
          />
          <span></span>
        </motion.div>

        <motion.button onClick={submit} variants={contVariants}>
          Submit
        </motion.button>

        <motion.span
          className={emailSent ? "visible" : "not-visible"}
          variants={contVariants}
        >
          <p>Thank you for submitting, we will be in touch in no time!</p>
        </motion.span>
        <motion.span
          className={emailSent ? "not-visible" : "visible"}
          variants={contVariants}
        >
          <p>Please Fill in all Fields</p>
        </motion.span>
      </motion.div>
  );
};
