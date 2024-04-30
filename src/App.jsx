import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import BusinessList from "./Components/BusinessList";
import searchYelp from "./utilities/yelpApi";

import "./App.css";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const search = (term, location, sortBy) => {
    searchYelp(term, location, sortBy)
      .then((businesses) => setBusinesses(businesses))
  }
  return (
    <>
      <h1>Ravenous</h1>
      <SearchBar onSearch={search}/>
      <BusinessList businesses={businesses}/>
    </>
  );
}

export default App;
