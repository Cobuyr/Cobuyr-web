import "../Styles/Home/Home.css";
import dash from "/dash.jpg";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="badge">Welcome</div>
        <h1>
          MODERNIZE YOUR CHECKOUT FOR TODAY’S ERA OF SHARING WITH SOCIAL BUYING
        </h1>
        <h3 className="hero-h3">
          Acquire <span className="highlight">more customers</span>,{" "}
          <span className="highlight">increase average order</span> value and
          drive <span className="highlight">repeat purchases</span> by enabling
          your customers to buy together.
        </h3>
        <button className="primary-btn">Join Waitlist</button>
      </section>

      <section className="future">
        <div className="future-wrap">
          <div className="future-textbox">
          <div className="badge">The Future</div>
            <h2>THE FUTURE OF PAYMENTS</h2>
            <p>
              Unlock new sales and savings by providing your customers with the
              <span className="highlight"> ability to purchase together with Social Buying</span>, the future of
              online payments, from Cobuyr.
            </p>
          </div>
          <div className="future-listbox">
            <ul className="listbox">
              <li>Lower the cost of customer acquisition</li>
              <li>Highly personalised buying experience</li>
              <li>Fewer discounts to move unsold products</li>
              <li>Unique insights into customer networks</li>
              <li>Multiple customer buy together in one order</li>
              <li>Richer data for better marketing engagement</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="transform">
        <div className="badge">Checkout Transformation</div>
        <div className="transform-textbox">
          <h2>TRANSFORM YOUR CHECKOUT PROCESS FOR TODAY'S ERA OF SHARING </h2>
          <p className="transform-text">
            Cobuyr gives customers a new and memorable social buying experience
            that also modernizes your checkout process by <span className="highlight">making co-buying a
            reality</span> , and creating more value for you.
          </p>
        </div>
        <div className="hex-box">
          <ul className="hex-list">
            <li>Monetize existing data</li>
            <li>LOGO HERE</li>
            <li>Reduce customer acquisition costs</li>
            <li>Lower basket abandonment</li>
            <li>Improve customer satisfaction</li>
            <li>Increase average order value</li>
            <li>Reduce technology spend</li>
          </ul>
        </div>
      </section>

      <section className="info-banner">
        <div className="badge">Checkout Transformation</div>
        <div className="textbox">
          <h2>Buff up customer Transaction</h2>
          <p className="banner-text">
            Payment technology has not kept up with what customers want, and
            that is why we invented Social Buying, a new category of multi-party
            payment transactions that enables your customers to split and
            securely pay for purchases together.
          </p>
          <button className="primary-btn">Book Demo</button>
        </div>
        <div className="glow"></div>
        <div className="glow2"></div>
      </section>

      <section className="modern">
        <div className="badge">New Method</div>
        <div className="textbox">
          <h2>THE MODERN PAYMENTS PLATFORM</h2>
          <p>
            Cobuyr is the first and only all-in-one payments, data and analytics
            platform that enables you to tap into the immense purchasing power
            of millions of cobuyers - customers who want to share the cost of
            buying products and services online with family and friends.
          </p>
          <div className="image">
            <img
              src={dash}
              alt="new category of multi-party payment transactions"
            />
          </div>
        </div>
      </section>

      <section className="banner2">
        <div className="textbox">
          {/* <h2>TRANSFORM YOUR CHECKOUT PROCESS FOR TODAY'S ERA OF SHARING </h2> */}
          <p className="banner-text">
            Give your customers the Social Buying experience they expect at
            checkout that will also enhance your payment, data and analytics
            capabilities. The only thing you need to do is simply add a “Group
            Buy” button to your current checkout process.
          </p>
          <button className="primary-btn">Book Demo</button>
        </div>
      </section>

      <section className="feature">
        <div className="badge">Features</div>
        <h2>What Cobuyr Offers</h2>
        <div className="feature-listbox">
          <ul className="ft-listbox">
            <li>Lower the cost of customer acquisition</li>
            <li>Highly personalised buying experience</li>
            <li>Fewer discounts to move unsold products</li>
            <li>Unique insights into customer networks</li>
            <li>Multiple customer buy together in one order</li>
          </ul>
        </div>
      </section>

      <section className="early">
        <div className="badge">
          Early Adopter Programme Ends on <span>January 8 2024</span>
        </div>
        <h2 className="early-h2">Early Adopter Programme</h2>
        <h3>Embrace the power of Social Buying</h3>
        <form>
          <span className="formtext"></span>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <button>Go!</button>
        </form>
        <h6>
          This site is protected by <span className="highlight">reCAPTCHA</span>{" "}
          and the{" "}
          <a href="https://policies.google.com/privacy">
            Google Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms">Terms of Service apply</a>
          .
        </h6>
      </section>
    </>
  );
};

export default Home;
