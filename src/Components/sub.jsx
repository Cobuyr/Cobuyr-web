import "../Styles/Home/Home.css";
import { Badge} from "../Components/badge";

const Sub = () => {
    return(
        
      <section className="early">
      <Badge
        iconUrl="lqadwfir"
        trigger="hover"
        text="Ends on January 8 2024"
      />

      <h2 className="early-h2">Early Adopter Programme</h2>
      <h3>
        Become an early adopter and{" "}
        <span className="highlight">embrace the power of Social Buying</span>{" "}
        with Cobuyr today.
      </h3>
      <form className="form">
      <lord-icon
  src="https://cdn.lordicon.com/ribxmuoc.json"
  trigger="loop-on-hover"
  delay="2500"
  target=".form"
  stroke="bold"
  >
</lord-icon>
        <span className="formtext"></span>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <button>Go!</button>
      </form>
    </section>
    )
}
export default Sub;