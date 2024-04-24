import { businessData as bus } from "../data/business";
import "../styles/Business.scss";

function Business() {
  return (
    <div className="business_container">
      <div className="business_image">
        <img src={bus.imageSrc} alt={bus.name} />
        <h2 className="business_name">{bus.name}</h2>
      </div>
      <div className="business_infos">
        <div className="business_adress">
          <p>{bus.address}</p>
          <p>{bus.city}</p>
          <p>
            {bus.state} {bus.zipCode}
          </p>
        </div>
        <div className="business_reviews">
          <h3>{bus.category}</h3>
          <h3>{bus.rating} stars</h3>
          <p>
            {bus.reviewCount} {bus.reviewCount > 1 ? "reviews" : "review"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Business;
