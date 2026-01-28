import cardData from "./cardData.js";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      {cardData.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.img} alt={item.title} />

          <div className="card-body">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
