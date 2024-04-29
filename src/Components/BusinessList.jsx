import PropTypes from "prop-types";
import Business from "./Business";
import "../styles/BusinessList.scss";

function BusinessList({ businesses }) {
  return (
    <div className="business_list_container">
      {businesses.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
}

BusinessList.propTypes = {
  businesses: PropTypes.array.isRequired,
};

export default BusinessList;
