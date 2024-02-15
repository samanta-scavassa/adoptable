import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateData(petData) {
  const petsURL = `https://adoptable.adaptable.app/pets/${petData.id}`;
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .patch(petsURL, petData)
      .then(() => {
        setSuccessMessage(true);
        setTimeout(function () {
          navigate("/");
        }, 3500);
      })
      .catch(() => navigate("/*"));
  }, []);
}
