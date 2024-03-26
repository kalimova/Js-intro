import "animate.css";
import product from "./script";
import header from "./layots/header.js";
import Home from "./pages/Home.js";

const App = () => {
  return (
    <>
      <div className="container">
        <header />
        <Home product={product} />
      </div>
    </>
  );
};

export default App;
