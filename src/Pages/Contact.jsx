import "../Styles/Contact.css";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Accordion from "../Components/Accordion";

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
    <section 
    className={`contact default ${emailSent ? "valid" : "invalid"}`}
    >
      {/* <div className="ray jumbo"></div> */}
      <div 
      className="fl"
      onMouseMove={handleMouseMove}
      style={{
        '--bg-x': bgX,
        '--bg-y': bgY,
      }}>
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

        <span className={emailSent ? "visible" : "not-visible"}>
          <p>Thank you for your message, we will be in touch in no time!</p>
        </span>
        <span className={emailSent ? "not-visible" : "visible"}>
          <p>Please Fill in all Fields</p>
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
