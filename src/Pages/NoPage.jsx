import Transition from "../Components/Transition";

const NoPage = () => {
  return (
    <div>
      <h1>Bankai: Error 404!</h1>
      <h3>Page Not Ready Yet</h3>
    </div>
  );
};

const TransNoPage = Transition(NoPage);
export default TransNoPage;
