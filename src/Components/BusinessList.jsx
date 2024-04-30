import PropTypes from "prop-types";
import Business from "./Business";
import "../styles/BusinessList.scss";

function BusinessList({ businesses }) {
  if (businesses.length === 0) {
    return <div className="business_list_container">No businesses found.</div>;
  }

  return (
    <div className="business_list_container">
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
}

BusinessList.propTypes = {
  businesses: PropTypes.array.isRequired,
};

export default BusinessList;
