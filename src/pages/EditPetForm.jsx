import { useState, useEffect } from "react";
import "./EditPetForm.css";
import { Button } from "@mui/base";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
import { Alert } from "@mui/material";

export default function EditPetForm() {
  const { petId } = useParams();
  const petsURL = `https://adoptable.adaptable.app/pets/${petId}`;
  const [successMessage, setSuccessMessage] = useState(false);
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();

  const fetchPet = () => {
    axios
      .get(petsURL)
      .then((res) => {
        setPet(res.data);
        navigate("/adoptable");
      })
      .catch((err) => {
        navigate("/*");
      });
  };

  useEffect(() => {
    fetchPet();
  }, []);

  if (!pet) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const handleNameInput = (e) =>
    setPet((pet) => {
      return { ...pet, name: e.target.value };
    });
  const handleBreedInput = (e) =>
    setPet((pet) => {
      return { ...pet, breed: e.target.value };
    });
  const handleDateOfBirthInput = (e) =>
    setPet((pet) => ({ ...pet, date_of_birth: e.target.value }));
  const handleDesexedOption = (e) =>
    setPet((pet) => ({
      ...pet,
      desexed: e.target.value === "yes" ? true : false,
    }));
  const handleGenderInput = (e) =>
    setPet((pet) => ({ ...pet, gender: e.target.value }));
  const handleMicrochipNumerInput = (e) =>
    setPet((pet) => ({ ...pet, microchip_number: e.target.value }));
  const handleVaccinatedOption = (e) =>
    setPet((pet) => ({
      ...pet,
      vaccinated: e.target.value === "yes" ? true : false,
    }));
  const handleWormedOption = (e) =>
    setPet((pet) => ({
      ...pet,
      wormed: e.target.value === "yes" ? true : false,
    }));
  const handleDescriptionInput = (e) =>
    setPet((pet) => ({ ...pet, description: e.target.value }));
  const handleImageURL = (e) =>
    setPet((pet) => ({ ...pet, image_url: e.target.value }));
  const handleCategoryOption = (e) =>
    setPet((pet) => ({ ...pet, category: e.target.value }));

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .patch(petsURL, pet)
      .then(() => {
        setSuccessMessage(true);
        setTimeout(function () {
          setSuccessMessage(false);
        }, 3500);
      })
      .catch(() => navigate("/*"));
  };

  return (
    <div>
      <form className="pet-form" onSubmit={handleEdit}>
        <h1>Edit a buddy</h1>
        <div className="pet-form-container">
          <label>
            Name:
            <input
              name="pet-name"
              type="text"
              placeholder="pet's name"
              value={pet.name}
              onChange={handleNameInput}
              pattern="{1,100}"
              required
            />
          </label>
          <label>
            Breed:
            <input
              name="pet-breed"
              type="text"
              value={pet.breed}
              onChange={handleBreedInput}
              pattern="[A-Za-z\s]{1,100}"
              required
            />
          </label>
          <label>
            Date of Birth:
            <input
              name="pet-date-of-birth"
              type="text"
              value={pet.date_of_birth}
              placeholder="2015-01-01"
              onChange={handleDateOfBirthInput}
              required
            />
          </label>
          <label>
            Neutered or Spayed:
            <select name="desexed" onChange={handleDesexedOption}>
              <option value="">-</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <label>
            Gender:
            <input
              name="gender"
              type="text"
              placeholder="male or female"
              value={pet.gender}
              onChange={handleGenderInput}
              required
            />
          </label>
          <label>
            Microchip Number:
            <input
              name="microchip-number"
              type="text"
              value={pet.microchip_number}
              onChange={handleMicrochipNumerInput}
              required
            />
          </label>
          <label>
            Vaccinated:
            <select name="vaccinated" onChange={handleVaccinatedOption}>
              <option value="">-</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            Wormed:
            <select name="wormed" onChange={handleWormedOption}>
              <option value="">-</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            Image:
            <input
              name="image"
              type="url"
              placeholder="https://chihuahua.jpg"
              value={pet.image_url}
              onChange={handleImageURL}
              required
            />
          </label>

          <label>
            Category:
            <select name="category" onChange={handleCategoryOption}>
              <option value="">-</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </label>
          <label>
            <textarea
              type="text"
              name="textarea"
              placeholder="add some info about this pet"
              rows="10"
              value={pet.description}
              onChange={handleDescriptionInput}
              required
            ></textarea>
          </label>
        </div>
        <div className="pet-form-buttons-container">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onSubmit={handleEdit}
          >
            Edit
          </Button>
        </div>
      </form>
      {successMessage && <Alert sx={{ mb: 2 }}>Pet updated succesfully!</Alert>}
    </div>
  );
}
