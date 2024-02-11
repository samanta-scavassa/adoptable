import PetCard from "./PetCard";
import "./PetsList.css";

function CatsList({ pets }) {
  return (
    <div className="PetsListSection">
      {pets
        .filter((pet) => pet.category === "cat")
        .map((cat) => {
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
