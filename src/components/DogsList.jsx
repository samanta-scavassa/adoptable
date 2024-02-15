import { filterByNameAndBreed } from "../utils/filterHelpers";
import PetCard from "./PetCard";
import "./PetsList.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Loading from "./Loading";

function DogsList({ pets, isLoading }) {
  const [query, setQuery] = useState("");
  const checkDogCategory = (pet) => pet.category === "dog";

  const filteredDogs = pets
    .filter(checkDogCategory)
    .filter((dog) => filterByNameAndBreed(dog, query));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <SearchBar onFilter={setQuery} />

      <div className="PetsListSection">
        {filteredDogs.map((dog) => {
          const pup = {
            id: dog.id,
            name: dog.name,
            breed: dog.breed,
            age: dog.date_of_birth,
            desexed: dog.desexed,
            gender: dog.gender,
            microchipNumber: dog.microchip_number,
            vaccinated: dog.vaccinated,
            wormed: dog.wormed,
            description: dog.description,
            image: dog.image_url,
          };
          return <PetCard key={pup.id} pet={pup} />;
        })}
      </div>
    </>
  );
}

export default DogsList;
