

const Card = ({p}) => {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={p.image} alt={p.title} />
        </div>
        <div className="info">
          <p className="title"> Title: {p.title}</p>
          <p className="price">Price: ${p.price}</p>
          <p className="desk"> Desk: {p.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
