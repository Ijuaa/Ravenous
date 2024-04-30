import { useState } from "react";
import "../styles/SearchBar.scss";

const sortOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSortByChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const handleSearch = (event) => {
      event.preventDefault();
        onSearch(term, location, sortBy);  
  };

  return (
    <div className="search-bar">
      <ul className="sort-options">
        {Object.keys(sortOptions).map((option) => (
          <li
            key={option}
            className={sortBy === sortOptions[option] ? "active" : ""}
            onClick={() => handleSortByChange(sortOptions[option])}
          >
            {option}
          </li>
        ))}
      </ul>
      <div className="line"></div>
      <form onSubmit={handleSearch}>
        <div>
          <input
            placeholder="Search Businesses"
            value={term}
            onChange={handleTermChange}
          />
          <input
            placeholder="Where?"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <button type="submit">Let's go</button>
      </form>
    </div>
  );
}

export default SearchBar;
