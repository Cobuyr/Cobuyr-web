import "../Styles/Home/Home.css";
import dash from "/dash.jpg";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="badge">Welcome</div>
        <h1>Revolutionize Checkout with Social Buying</h1>
        <p>
          Enhance your checkout experience with Cobuyr's cutting-edge Social
          Buying platform. Allow customers to{" "}
          <span className="highlight">
            purchase together, boosting sales and fostering a sense of
            community.
          </span>
        </p>
        <button className="primary-btn">Join Waitlist</button>
      </section>

      <section className="future">
        {/* <div className="future-wrap"> */}
        <div className="future-textbox">
          <div className="badge">The Future</div>
          <h2>THE FUTURE OF PAYMENTS</h2>
          <p>
            Unleash the potential of your online business with Cobuyr's Social
            Buying solution. This innovative platform empowers customers to pool
            purchases,{" "}
            <span className="highlight">
              driving sales and reducing acquisition costs.
            </span>
          </p>
        </div>
        <div className="future-listbox">
          <ul className="listbox">
            <li>
              <h4>Unlock New Sales and Savings</h4>
              <p>
                By introducing Social Buying, witness a surge in sales while
                minimizing discounts on unsold products.
              </p>
            </li>
            <li>
              <h4>Personalized Buying Experiences</h4>
              <p>
                Offer customers a tailored shopping journey, allowing multiple
                buyers to unite in a single order.
              </p>
            </li>
            <li>
              <h4>Insights and Data</h4>
              <p>
                Gain invaluable insights into customer networks, enabling
                precise marketing engagements and a deeper understanding of
                buyer behavior.
              </p>
            </li>
            <li>
              <h4>Monetize Existing Data</h4>
              <p>
                Maximize the potential of your customer data to enhance revenue
                streams.
              </p>
            </li>
            <li>
              <h4>Increased Customer Satisfaction</h4>
              <p>
                Provide a seamless co-buying experience, reducing basket
                abandonment and enhancing satisfaction.
              </p>
            </li>
            <li>
              <h4>Tech Spend Reduction</h4>
              <p>
                Streamline technology costs while boosting order values and
                reducing acquisition expenses.
              </p>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </section>

      {/* <section className="transform">
        <div className="badge">Checkout Transformation</div>
        <div className="transform-textbox">
          <h2>TRANSFORM YOUR CHECKOUT PROCESS FOR TODAY'S ERA OF SHARING </h2>
          <p className="transform-text">
            Cobuyr gives customers a new and memorable social buying experience
            that also modernizes your checkout process by{" "}
            <span className="highlight">making co-buying a reality</span> , and
            creating more value for you.
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
      </section> */}
      <section className="modern">
        <div className="badge">New Method</div>
        <div className="textbox">
          <h2>THE MODERN PAYMENT PLATFORM</h2>
          <p>
            Introducing Cobuyr, a groundbreaking, comprehensive platform at the
            forefront of modernized payment solutions. Experience the fusion of
            payments, data management, and analytics, empowering you to harness
            the collective purchasing potential of a vast community of cobuyers.
            These are individuals seeking collaborative ways to split the
            expenses of online purchases among their social circles,
            revolutionizing the way products and services are acquired and
            enjoyed.
          </p>
          <div className="image">
            <img
              src={dash}
              alt="new category of multi-party payment transactions"
            />
          </div>
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

      {/* <section className="banner2">
        <div className="textbox">
          <h2>TRANSFORM YOUR CHECKOUT PROCESS FOR TODAY'S ERA OF SHARING </h2>
          <p className="banner-text">
            Give your customers the Social Buying experience they expect at
            checkout that will also enhance your payment, data and analytics
            capabilities. The only thing you need to do is simply add a “Group
            Buy” button to your current checkout process.
          </p>
          <button className="primary-btn">Book Demo</button>
        </div>
      </section> */}

      <section className="integrate">
        <div className="int-textbox">
          {/* <div className="badge">Integrate</div> */}
          <h2>Integration and Benefits.</h2>
          <p>
            Elevate your e-commerce experience with Cobuyr's user-friendly API
            Plug-In. Our seamlessly integrated solution enables effortless
            incorporation of Social Buying into your existing website structure,
            ensuring a smooth and efficient transition without disrupting your
            operations.
            <br />
            <blockquote>
              By integrating our API, you unlock a world of collaborative
              purchasing opportunities for your customers while streamlining
              backend processes for your business.
            </blockquote>
          </p>
          <button className="primary-btn">Documentation</button>
        </div>
        <div className=" marquee marquee--vertical">
          <ul className="marquee__group ">
            <li>Lower the cost of customer acquisition</li>
            <li>Highly personalised buying experience</li>
            <li>Fewer discounts to move unsold products</li>
            <li>Unique insights into customer networks</li>
            <li>Multiple customer buy together in one order</li>
          </ul>
          <ul aria-hidden="true" className="marquee__group ">
            <li>Lower the cost of customer acquisition</li>
            <li>Highly personalised buying experience</li>
            <li>Fewer discounts to move unsold products</li>
            <li>Unique insights into customer networks</li>
            <li>Multiple customer buy together in one order</li>
          </ul>
        </div>
      </section>
      
      <section>
        <div class="container">
          <div class="head">
            <div className="badge">The Future</div>
            <h2>THE FUTURE OF PAYMENTS</h2>
          </div>
          <div class="info1">
            <div className="textbox">
              <h3>Unified Payment Innovation</h3>
              <p>
                Discover Cobuyr, the pioneer in integrated payment platforms.
                Seamlessly amalgamating payments, data, and analytics, it
                revolutionizes the purchasing experience. Unlock the collective
                purchasing power of millions engaged in collaborative buying
                with family and friends.
              </p>
              {/* <div className="image">
                <img
                  src={dash}
                  alt="new category of multi-party payment transactions"
                />
              </div> */}
            </div>
          </div>
          <div class="info3">
          <div className="textbox">
              <h3>Unified Payment Innovation</h3>
              <p>
                Discover Cobuyr, the pioneer in integrated payment platforms.
                Seamlessly amalgamating payments, data, and analytics, it
                revolutionizes the purchasing experience. Unlock the collective
                purchasing power of millions engaged in collaborative buying
                with family and friends.
              </p>
            </div>
          </div>
          <div class="info2">
          <div className="textbox">
              <h3>Unified Payment Innovation</h3>
              <p>
                Discover Cobuyr, the pioneer in integrated payment platforms.
                Seamlessly amalgamating payments, data, and analytics, it
                revolutionizes the purchasing experience. Unlock the collective
                purchasing power of millions engaged in collaborative buying
                with family and friends.
              </p>
            </div>
          </div>
          <div class="info-mini">
          <div className="textbox">
              <h3>Unified Payment Innovation</h3>
              <p>
                Discover Cobuyr
              </p>
            </div>
          </div>
          <div className="poll">
          <div className="textbox">
              <h3>What Ecommerce platform is your favourite?</h3>
              <p>
                Discover Cobuyr, the pioneer in integrated payment platforms.
                Seamlessly amalgamating payments, data, and analytics, it
                revolutionizes the purchasing experience. Unlock the collective
                purchasing power of millions engaged in collaborative buying
                with family and friends.
              </p>
            </div>
          </div>
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
