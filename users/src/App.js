import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
  const [info, setInfo] = useState([]);
  return (
    <>
      <Header />
      <Card />
    </>
  );
};

export default App;
