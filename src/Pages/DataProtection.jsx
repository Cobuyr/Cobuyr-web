/* eslint-disable react/no-unescaped-entities */
import "../Styles/policy.css";
import Transition from "../Components/Transition";
import { Section } from "../Components/inView";
import Footer from "../Components/Footer/footer";

const DataProtectionPolicy = () => {
  return (
    <>
      <Section className={'policywrapper'}>
      <div className="policy-page">
      <h1 className="policy-title">Data Protection Policy</h1>
      
      <div className="policy-section">
        <p className="policy-text">Version 1: 15 January 2024</p>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">DATA PROTECTION PRINCIPLES</h2>
        <p className="policy-text">
          Cobuyr is committed to processing data in accordance with its responsibilities under the GDPR.
        </p>
        <p className="policy-text">
          Article 5 of the GDPR requires that personal data shall be:
        </p>
        <ul className="policy-list">
          <li className="policy-list-item">
            Processed lawfully, fairly and in a transparent manner in relation to individuals;
          </li>
          <li className="policy-list-item">
            Collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes; further processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes shall not be considered to be incompatible with the initial purposes;
          </li>
          <li className="policy-list-item">
            Adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed;
          </li>
          <li className="policy-list-item">
            Accurate and, where necessary, kept up to date; every reasonable step must be taken to ensure that personal data that are inaccurate, having regard to the purposes for which they are processed, are erased or rectified without delay;
          </li>
          <li className="policy-list-item">
            Kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed; personal data may be stored for longer periods insofar as the personal data will be processed solely for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes subject to implementation of the appropriate technical and organizational measures required by the GDPR in order to safeguard the rights and freedoms of individuals;
          </li>
          <li className="policy-list-item">
            Processed in a manner that ensures appropriate security of the personal data, including protection against unauthorized or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organizational measures.
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">GENERAL PROVISIONS</h2>
        <ul className="policy-list">
          <li className="policy-list-item">
            This policy applies to all personal data processed by Cobuyr.
          </li>
          <li className="policy-list-item">
            This policy shall be reviewed at least annually.
          </li>
          <li className="policy-list-item">
            Cobuyr shall register with the Information Commissioner's Office as an organization that processes personal data.
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">LAWFUL, FAIR AND TRANSPARENT PROCESSING</h2>
        <ul className="policy-list">
          <li className="policy-list-item">
            To ensure its processing of data is lawful, fair and transparent, Cobuyr shall maintain a Register of Systems.
          </li>
          <li className="policy-list-item">
            The Register of Systems shall be reviewed at least annually.
          </li>
          <li className="policy-list-item">
            Individuals have the right to access their personal data and any such requests made to Cobuyr shall be dealt with in a timely manner.
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">LAWFUL PURPOSES</h2>
        <ul className="policy-list">
          <li className="policy-list-item">
            All data processed by Cobuyr must be done on one of the following lawful bases: consent, contract, legal obligation, vital interests, public task or legitimate interests (see ICO guidance for more information).
          </li>
          <li className="policy-list-item">
            Cobuyr shall note the appropriate lawful basis in the Register of Systems.
          </li>
          <li className="policy-list-item">
            Where consent is relied upon as a lawful basis for processing data, evidence of opt-in consent shall be kept with the personal data.
          </li>
          <li className="policy-list-item">
            Where communications are sent to individuals based on their consent, the option for the individual to revoke their consent should be clearly available and systems should be in place to ensure such revocation is reflected accurately in Cobuyr's systems.
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">DATA MINIMISATION</h2>
        <p className="policy-text">
          Cobuyr shall ensure that personal data are adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed.
        </p>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">ACCURACY</h2>
        <ul className="policy-list">
          <li className="policy-list-item">
            Cobuyr shall take reasonable steps to ensure personal data is accurate.
          </li>
          <li className="policy-list-item">
            Where necessary for the lawful basis on which data is processed, steps shall be put in place to ensure that personal data is kept up to date.
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">ARCHIVING / REMOVAL</h2>
        <ul className="policy-list">
          <li className="policy-list-item">
            To ensure that personal data is kept for no longer than necessary, Cobuyr shall put in place an archiving policy for each area in which personal data is processed and review this process annually.
          </li>
          <li className="policy-list-item">
            The archiving policy shall consider what data should/must be retained, for how long, and why.
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">SECURITY</h2>
        <ul className="policy-list">
          <li className="policy-list-item">
            Cobuyr shall ensure that personal data is stored securely using modern software that is kept-up-to-date.
          </li>
          <li className="policy-list-item">
            Access to personal data shall be limited to personnel who need access and appropriate security should be in place to avoid unauthorized sharing of information.
          </li>
          <li className="policy-list-item">
            When personal data is deleted this should be done safely such that the data is irrecoverable.
          </li>
          <li className="policy-list-item">
            Appropriate back-up and disaster recovery solutions shall be in place.
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h2 className="policy-section-title">BREACH</h2>
        <p className="policy-text">
          In the event of a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data, Cobuyr shall promptly assess the risk to people's rights and freedoms and if appropriate report this breach to the ICO (more information on the ICO website).
        </p>
      </div>
    </div>
      </Section>
      <Footer />
    </>
  );
};

const TransDataProtectionPolicy = Transition(DataProtectionPolicy);
export default TransDataProtectionPolicy;
