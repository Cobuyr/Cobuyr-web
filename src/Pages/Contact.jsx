import "../Styles/Contact.css";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Accordion from "../Components/Accordion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
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
    } else {
      alert("Please fill in all fields.");
    }
  };


  // Data for accordion 

  let data = [
    {
      title: "One",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...`
    },
    {
      title: "Two",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...`
    },
    {
      title: "Three",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...`
    }
  ];

  return (
    <section className="contact ">
      {/* <div className="ray jumbo"></div> */}
      <div className="fl">
      <div className="contact-text">
        <h1>Get in touch</h1>
      </div>
      <div id="contact-form">
       
        <div className="inp-field">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span></span>
        </div>
        <div className="inp-field">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <span></span>
        </div>
        
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={submit}>Send Message</button>

        <span className={emailSent ? "visible" : undefined}>
          Thank you for your message, we will be in touch in no time!
        </span>
      </div>
      </div>

      <div className="fl r">
     <div className="faq">
     <Accordion data={data} />
     </div>
     <div className="contact-text">
        <h1>FAQ</h1>
      </div>
     </div>

    </section>
  );
};
export default Contact;
