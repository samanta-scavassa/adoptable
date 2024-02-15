import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const petsURL = "https://adoptable.adaptable.app/pets";

export default function CreateData(petData) {
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(petsURL, petData)
      .then(() => {
        setSuccessMessage(true);
        setTimeout(function () {
          navigate("/");
        }, 3500);
      })
      .catch(() => navigate("/*"));
  }, []);
}
