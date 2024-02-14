import { useState } from "react";

export default function SearchBar({cats, onFilter}) {
  const [query, setQuery] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);

    const filteredCats = cats.filter((cat) => {
      return e.target.value && cat.name.toLowerCase().includes(e.target.value);
    });

    onFilter(filteredCats);
  };

  return (
    <main>
      <h3 className="searchbar">Search</h3>
      <input
        type="text"
        name="searchbar"
        value={query}
        onChange={handleSearch}
      />
    </main>
  );
}