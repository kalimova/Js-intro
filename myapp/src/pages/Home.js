import Card from "../components/Card";

const Home = ({ product }) => {
  return (
    <>
      <div className="container">
        <div className="flex">
        {product.map((el) => (
        <Card p={el} />
      ))}
        </div>
      </div>
    </>
  );
};

export default Home;
