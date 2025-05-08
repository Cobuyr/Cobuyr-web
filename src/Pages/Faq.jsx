/* eslint-disable react/no-unescaped-entities */
// import "../Styles/Faq.css";
// import { Badge } from "../Components/badge";
// import { Icon } from "../assets/icon";
// import { motion } from "framer-motion";
import "../Styles/Contact.css";
import Transition from "../Components/Transition";
// import Sub from "../Components/sub";
import { Section } from "../Components/inView";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer/footer";

const Faq = () => {
  // Data for accordion

  let data = [
    {
      title: "How do I get started with Cobuyr?",
      content: `Contact us and we will get you started ASAP.  All that is required is integrating your current payment, CRM and ecommerce systems using our pre-built integrations, and adding the Cobuyr Group Buy plugin to your website. `,
    },
    {
      title: "Do I need to replace my current payment platform?",
      content: `No. The Cobuyr Group Buy plugin is inserted into your current checkout process so there is no need to replace your current payment platform.  `,
    },
    {
      title: "What insights does the Cobury platform provide me?",
      content: `Cobuyr provides a unique connected insights into your customers you won’t find elsewhere because our platform brings together different data sources from your payments, CRM and e-commerce systems. This insight includes a real-time view into your individual customers and the relationships they have with cobuyers (people who buy together).`,
    },
    {
      title: "What is Social Buying?",
      content: `Social Buying is a term Cobuyr created to describe the network effect when customers invite friends, family, and members of marketplaces to buy together at checkout. Ecommerce companies benefit from Social Buying because it’s their customer that proactively, and on their own initiative, come together to buy products and services from brands.`,
    },
  ];

  return (
    <>
      <Section className={'faqPage'}>
        <div className="fl">
          <div className="faq">
            <div>
              <h1>FAQs</h1>
            </div>
            <Accordion data={data} />
          </div>
        </div>
      </Section>
      <Footer/>
    </>
  );
};

const TransFaq = Transition(Faq);
export default TransFaq;
