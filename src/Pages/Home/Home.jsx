import "./Home.css";

const Home = () => {
  return (
    <>
    <section className="hero">
      <div className="badge">Welcome</div>
      <h1 className="hero-h1">
        MODERNIZE YOUR CHECKOUT FOR TODAY’S ERA OF SHARING WITH SOCIAL BUYING
      </h1>
      <h2 className="hero-h2">
      Acquire <span className="highlight">more customers</span>, <span className="highlight">increase average order</span> value and drive <span className="highlight">repeat purchases</span> by enabling your customers to buy together.
      </h2>
      <button className="primary-btn">Join Waitlist</button>
    </section>

    <section className="future">
    <div className="badge">The Future</div>
        <div className="future-textbox">
            <h2 className="future-h2">THE FUTURE OF PAYMENTS</h2>
            <p className="future-text">Unlock new sales and savings by providing your customers with the ability to purchase together with Social Buying, the future of online payments, from Cobuyr.</p>
        </div>
        <div className="future-listbox">
            <ul>
                <li>Lower the cost of customer acquisition</li>
                <li>Highly personalised buying experience</li>
                <li>Fewer discounts to move unsold products</li>
                <li>Unique insights into customer networks</li>
                <li>Multiple customer buy together in one order</li>
                <li>Richer data for better marketing engagement</li>
            </ul>
        </div>
    </section>
    </>
  );
};

export default Home;
