import PetCard from "./PetCard";
import "./PetsList.css";

function DogsList({pets}) {
    return (
        <div className="PetsListSection">
          {pets
            .filter((pet) => pet.category === "dog")
            .map((dog) => {
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
      );
}

export default DogsList;