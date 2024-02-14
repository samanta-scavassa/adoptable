import PetCard from "./PetCard";
import "./PetsList.css";
import SearchBar from "./SearchBar";
import { useState, useEffect} from "react";

function CatsList({ pets, isLoading }) {
  const [cats, setCats] = useState(
    pets.filter((pet) => pet.category === "cat")
  );

  useEffect(() => {
    if (isLoading === false) {
      setCats(pets.filter((pet) => pet.category === "cat"));
    }
    
  }, [isLoading]);

  if (isLoading) {
    return <h1>We are loading, please wait...</h1>;
  }

  return (
    <div className="PetsListSection">
      <SearchBar cats={cats} onFilter={setCats} />
      {cats.map((cat) => {
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
  );
}

export default CatsList;
