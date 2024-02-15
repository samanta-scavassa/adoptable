import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateData(petId) {
  const petsURL = `https://adoptable.adaptable.app/pets/${petId}`;
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .delete(petsURL)
      .then(() => {
        setSuccessMessage(true);
        setTimeout(function () {
          navigate("/");
        }, 3500);
      })
      .catch(() => navigate("/*"));
  }, []);
}
