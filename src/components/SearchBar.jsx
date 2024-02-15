import { useState } from "react";
import "./SearchBar.css"
import { FaSearch } from "react-icons/fa";


/**
 * SearchBar component showing an input
 */
export default function SearchBar({ onFilter }) {
  // State for controlling whatever gets entered into the search bar
  const [query, setQuery] = useState("");

  // a helper function that updates the state AND
  // calls the prop 'onFilter' which updates the parent component
  const handleSearch = (e) => {
    setQuery(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="text"
        name="searchbar"
        value={query}
        onChange={handleSearch}
      />
      <FaSearch />
    </div>
  );
}
