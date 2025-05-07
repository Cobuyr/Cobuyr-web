/* eslint-disable react/no-unescaped-entities */
import "../Styles/policy.css";
import Transition from "../Components/Transition";
import { Section } from "../Components/inView";
import Footer from "../Components/Footer/footer";

const Privacy = () => {
  return (
    <>
      <Section>
        <div className="policy-page">
          <h1 className="policy-title">Privacy Policy</h1>

          <div className="policy-section">
            <p className="policy-text">
              We respect your privacy, and we are committed to protecting it. We
              protect the confidentiality and security of your company's
              information by placing you, our customer, in control of the
              process by allowing you to consent to non-aggregate information
              sharing before it occurs as described in this Privacy Policy.
              Cobuyr is committed to these three Privacy Principles.
            </p>
          </div>

          <div className="policy-section">
            <h2 className="policy-section-title">Principle One</h2>
            <p className="policy-text">
              We limit how, and with whom, we share your company's information
              based on your choice. Cobuyr will only share your company's
              information with others:
            </p>
            <ul className="policy-list">
              <li className="policy-list-item">at your request;</li>
              <li className="policy-list-item">
                to process or service a transaction or product authorized or
                requested by you;
              </li>
              <li className="policy-list-item">
                when required by law to disclose such information to appropriate
                authorities;
              </li>
              <li className="policy-list-item">
                to companies that assist us in marketing our products and
                services;
              </li>
            </ul>
          </div>

          <div className="policy-section">
            <h2 className="policy-section-title">Principle Two</h2>
            <p className="policy-text">
              We collect only the information necessary to deliver the products
              and services you request. Cobuyr collects only the company's
              information necessary to serve your payments and data needs, to
              protect against fraud, and to fulfil legal and regulatory
              requirements. We collect the following:
            </p>
            <ul className="policy-list">
              <li className="policy-list-item">
                Information we receive from you: from our cobuyr.com website,
                your service, and any other information you subsequently provide
                to us orally, in writing or through the Internet;
              </li>
              <li className="policy-list-item">
                Information about your transactions and communications with us;
              </li>
              <li className="policy-list-item">
                Information from public records accessed in the ordinary course
                of business
              </li>
            </ul>
          </div>

          <div className="policy-section">
            <h2 className="policy-section-title">Principle Three</h2>
            <p className="policy-text">
              We maintain your privacy even after you cease to be our Customer.
            </p>
            <p className="policy-text">
              If your organisation decides to close or cancel your account or
              you become an inactive Customer, Cobuyr will continue to follow
              this privacy policy with respect to the information we have in our
              possession about you and your organisation.
            </p>
            <p className="policy-text">
              Changes to this Privacy Policy. This privacy policy may be
              modified from time to time to comply with applicable laws or to
              conform to our current business practices, without prior notice to
              you. We will post any changes to this on our website and notify
              you. We encourage you to revisit the Privacy Statement that is
              posted on our website from time to time to check for updates.
            </p>
          </div>

          <div className="policy-section">
            <h2 className="policy-section-title">Security Statement</h2>
            <p className="policy-text">
              We take every reasonable precaution to protect your information.
              When you submit information to us through our website, your
              information is protected both online and offline. All data
              transferred from/to the Cobuyr internal network, from/to an
              external entity, is encrypted to industry standards (256 bit
              encryption). Please keep in mind that messages you send to us by
              e-mail may not be secure.
            </p>
            <p className="policy-text">
              We maintain appropriate physical, electronic and procedural
              safeguards to ensure the security, integrity and privacy of your
              personal information within our company. Only those employees who
              require your organisation's information to perform a specific job
              are granted access to your organisation's identifiable
              information. Furthermore, all employees are kept up-to-date on our
              security and privacy practices.
            </p>
          </div>

          <div className="policy-section">
            <h2 className="policy-section-title">
              Our Use of Internet Browser Cookies
            </h2>
            <p className="policy-text">
              Cobuyr may use internet browser "cookies". A cookie is a small
              line of text that is stored by your browser on your computer. Our
              cookies do not contain any personally identifiable information. We
              use them to measure visits and improve content and navigation on
              our website.
            </p>
            <p className="policy-text">
              We and third-party vendors, including Google, use first-party
              cookies (such as the Google Analytics cookie) and third-party
              cookies together to inform, optimise, and serve ads based on
              someone's past visits to your website. We adhere to Google's
              policies about interest-based advertising and sensitive categories
              when doing so.
            </p>
            <p className="policy-text">
              Visitors can opt out of Google Analytics for Display Advertising
              and customize Google Display Network ads using the Ads Preferences
              Manager. Some features of Cobuyr's website and service, such as
              personalization and account information, require that cookies be
              turned on. If you wish, you can turn on your browser cookie
              preference when using these features, and then turn them off when
              you visit other websites.
            </p>
            <p className="policy-text">
              Cobuyr's use of cookies will not affect our policy of not
              disclosing any of your personal information without your consent.
            </p>
            <p className="policy-text">
              By using our website and/or our data analytics services, you
              consent to the collection and use of information as set forth in
              this Privacy Policy.
            </p>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

const TransPrivacy = Transition(Privacy);
export default TransPrivacy;
