/* eslint-disable react/no-unescaped-entities */
import "../Styles/policy.css";
import Transition from "../Components/Transition";
import { Section } from "../Components/inView";
import Footer from "../Components/Footer/footer";

const MarketingStatement  = () => {
  return (
    <>
      <Section className={'policywrapper'}>
      <div className="policy-page">
      <h1 className="policy-title">Marketing Statement</h1>
      
      <div className="policy-section">
        <h2 className="policy-section-title">How do we collect information from you?</h2>
        <p className="policy-text">
          We collect information about you when you use our website (for example contact us with a query or download a report), 
          register for one of our newsletters, or email us directly.
        </p>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">What type of information is collected from you?</h2>
        <p className="policy-text">
          If you provide us with personal information such as your name, address, email address or job title, 
          we will collect and store that data. We also might collect information regarding which Cobuyr website 
          pages you have visited and when.
        </p>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">How is your information used?</h2>
        <p className="policy-text">
          We'd like to keep in touch with you about the latest research, best practice and innovations. 
          We design our content to share skills and support you in your role.
        </p>
        <p className="policy-text">
          We may use your information to:
        </p>
        <ul className="policy-list">
          <li className="policy-list-item">Personalize and tailor educational and skills share content</li>
          <li className="policy-list-item">Invite you to upcoming events that may interest you</li>
          <li className="policy-list-item">Ask for your feedback on any Cobuyr products and services you are using</li>
          <li className="policy-list-item">Notify you of changes to our services</li>
        </ul>
        <p className="policy-text">
          We review our retention periods for personal information on a regular basis. We will only hold your 
          personal information on our systems for as long as is necessary for the intended purpose when you 
          provided your data.
        </p>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">Who has access to your information?</h2>
        <ul className="policy-list">
          <li className="policy-list-item">
            Your data will never be sold or rented to third parties, or provided to advertisers.
          </li>
          <li className="policy-list-item">
            Your data will only ever be used for the intended purpose when it was provided to us.
          </li>
          <li className="policy-list-item">
            Your data will never be published or shared outside of Cobuyr.
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">Your rights</h2>
        <p className="policy-text">
          You will always have a choice about whether or not to receive communications from us. If you do not 
          want to hear from us, you can update your preferences using this form at any time. If you have any 
          further questions about your privacy or communication preferences, please contact us at  
           <a href="mailTo:marketing@cobuyr.com"> marketing@cobuyr.com</a>.
        </p>
        <p className="policy-text">
          The accuracy of your information is important to us. You have the right to ask for a copy of the 
          information Cobuyr holds about you, please contact <a href="mailTo:marketing@cobuyr.com">marketing@cobuyr.com</a> and we will provide your 
          information for you to review or amend as needed.
        </p>
      </div>
    </div>
      </Section>
      <Footer />
    </>
  );
};

const TransMarketingStatement  = Transition(MarketingStatement );
export default TransMarketingStatement ;
