import axios from "axios";
import { useEffect, useState } from "react";

const petsURL = "https://adoptable.adaptable.app/pets";

export default function useData() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(petsURL)
      .then((response) => {
        setPets(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return { pets, isLoading };
}
