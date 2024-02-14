import PetCard from "./PetCard";
import "./PetsList.css";
import SearchBar from "./SearchBar";
import { useState } from "react";

function CatsList({ pets }) {
  // something that changes --> input in the search bar
  const [query, setQuery] = useState("");

  // a helper function to get all the pets with category 'cat'
  const checkCatCategory = (pet) => pet.category === "cat";

  const filteredCats = pets.filter(checkCatCategory).filter((cat) => {
    if (query) {
      // if there's a query, do the following
      return (
        // check the cat name OR the breed
        cat.name.toLowerCase().includes(query) ||
        cat.breed.toLowerCase().includes(query)
      );
    } else {
      // if there's no query, keep all cats
      return true;
    }
  });

  return (
    <>
      <SearchBar onFilter={setQuery} />
      <div className="PetsListSection">
        {filteredCats.map((cat) => {
          const kitten = {
            id: cat.id,
            name: cat.name,
            breed: cat.breed,
            age: cat.date_of_birth,
            desexed: cat.desexed,
            gender: cat.gender,
            microchipNumber: cat.microchip_number,
            vaccinated: cat.vaccinated,
            wormed: cat.wormed,
            description: cat.description,
            image: cat.image_url,
          };
          return <PetCard key={kitten.id} pet={kitten} />;
        })}
      </div>
    </>
  );
}

export default CatsList;
