import axios from "axios";
import { useEffect, useState } from "react";

// const petsURL = "https://adoptable.adaptable.app/pets";
const petsURL = "http://localhost:5005/pets";

export default function useData() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get(petsURL)
      .then((response) => {
        setPets(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return { pets };
}