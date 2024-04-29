import SearchBar from "./Components/SearchBar";
import BusinessList from "./Components/BusinessList";
import "./App.css";

function App() {
  const businessData = {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  };

   const businesses = [businessData, businessData, businessData, businessData, businessData, businessData];

  return (
    <>
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </>
  );
}

export default App;
