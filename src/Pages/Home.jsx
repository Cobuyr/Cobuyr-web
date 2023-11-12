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
      <h2 className="hero-h2">
      Acquire <span className="highlight">more customers</span>, <span className="highlight">increase average order</span> value and drive <span className="highlight">repeat purchases</span> by enabling your customers to buy together.
      </h2>
      <button className="primary-btn">Join Waitlist</button>
    </section>


    <section className="future">
    <div className="badge">The Future</div>
    <div className="future-wrap">
        <div className="future-textbox">
            <h2>THE FUTURE OF PAYMENTS</h2>
            <p>Unlock new sales and savings by providing your customers with the ability to purchase together with Social Buying, the future of online payments, from Cobuyr.</p>
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
            <p className="transform-text">Cobuyr gives customers a new and memorable social buying experience that also modernizes your checkout process by making co-buying a reality, and creating more value for you.</p>
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
        <div className="glow"></div>
    <div className="textbox">
            <h2>TRANSFORM YOUR CHECKOUT PROCESS FOR TODAY'S ERA OF SHARING </h2>
            <p className="banner-text">Cobuyr gives customers a new and memorable social buying experience that also modernizes your checkout process by making co-buying a reality, and creating more value for you.</p>
            <button className="primary-btn">Book Demo</button>
        </div>
        <div className="glow2"></div>
    </section>

    <section className="modern">
    <div className="textbox">
            <h2>Customers love to share so why does your checkout stop them from spending more money with you? </h2>
            <p>Payment technology has not kept up with what customers want, and that is why we invented Social Buying, a new category of multi-party payment transactions that enables your customers to split and securely pay for purchases together.</p>
            <div className="image">
                 <img src={dash} alt="new category of multi-party payment transactions" />
            </div>
        </div>
    </section>

    </>
  );
};

export default Home;
