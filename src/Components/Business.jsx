import PropTypes from "prop-types";
import "../styles/Business.scss";

function Business({ business }) {
  return (
    <div className="business_container">
      <div className="business_image">
        <img src={business.imageSrc} alt={business.name} />
        <h2 className="business_name">{business.name}</h2>
      </div>
      <div className="business_infos">
        <div className="business_adress">
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>
            {business.state} {business.zipCode}
          </p>
        </div>
        <div className="business_reviews">
          <h3>{business.category}</h3>
          <h3>{business.rating} stars</h3>
          <p>
            {business.reviewCount}{" "}
            {business.reviewCount > 1 ? "reviews" : "review"}
          </p>
        </div>
      </div>
    </div>
  );
}

Business.propTypes = {
  business: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Business;
