import { useState } from "react";
import "./PetForm.css";
import {Button} from "@mui/material";
import CreateData from "../hooks/createData";


export default function PetForm({ pets }) {
  // States:
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [desexed, setDesexed] = useState(false);
  const [gender, setGender] = useState("");
  const [microchipNumber, setMicrochipNumber] = useState();
  const [vaccinated, setVaccinated] = useState(false);
  const [wormed, setWormed] = useState(false);
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");

  // handler functions:
  const handleNameInput = (e) => setName(e.target.value);
  const handleBreedInput = (e) => setBreed(e.target.value);
  const handleDateOfBirthInput = (e) => setDateOfBirth(e.target.value);
  const handleDesexedOption = (e) => setDesexed(e.target.value);
  const handleGenderInput = (e) => setGender(e.target.value);
  const handleMicrochipNumerInput = (e) => setMicrochipNumber(e.target.value);
  const handleVaccinatedOption = (e) => setVaccinated(e.target.value);
  const handleWormedOption = (e) => setWormed(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleImageURL = (e) => setImageURL(e.target.value);
  const handleCategoryOption = (e) => setCategory(e.target.value);

  // prevent reloading when clicking on the "save" button
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPet = {
      name,
      breed,
      dateOfBirth,
      desexed,
      gender,
      microchipNumber,
      vaccinated,
      wormed,
      description,
      imageURL,
      category,
    };
    // CreateData(newPet);
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
  };

  return (
    <form className="pet-form" onSubmit={handleSubmit}>
      <h1>Add a new furry friend</h1>
      <div className="pet-form-container">
        <label>
          Name:
          <input
            name="pet-name"
            type="text"
            placeholder="pet's name"
            value={name}
            onChange={handleNameInput}
            pattern="[A-Za-z\s]{1,100}"
            required
          />
        </label>
        <label>
          Breed:
          <input
            name="pet-breed"
            type="text"
            value={breed}
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
            value={dateOfBirth}
            placeholder="2015-01-01"
            onChange={handleDateOfBirthInput}
            required
          />
        </label>
        <label>
          Neutered or Spayed:
          <select name="vaccinated" onChange={handleDesexedOption}>
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
            value={gender}
            onChange={handleGenderInput}
            required
          />
        </label>
        <label>
          Microchip Number:
          <input
            name="microchip-number"
            type="text"
            value={microchipNumber}
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
            value={imageURL}
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
            value={description}
            onChange={handleDescriptionInput}
            required
          ></textarea>
        </label>
      </div>
      <div className="pet-form-buttons-container">
        <Button variant="contained" color="primary" type="submit" onSubmit={handleSubmit}>
          Save
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Edit
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Delete
        </Button>
      </div>
    </form>
  );
}
