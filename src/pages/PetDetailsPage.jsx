import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Box } from "@mui/material";
import "./PetDetailsPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PetDetailsPage({ pets }) {
  const [successMessage, setSuccessMessage] = useState(false);
  const [adopters, setAdopters] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedPet = pets.find((animal) => animal.id === id);
  const petsURL = `https://adoptable.adaptable.app/pets/${selectedPet.id}`;
  const adoptersURL = `https://adoptable.adaptable.app/pets/${selectedPet.id}/adopters`;

  const fetchAdopters = () => {
    axios
      .get(adoptersURL)
      .then((response) => {
        setAdopters(response.data);
      })
      .catch(() => navigate("/*"));
  };

  useEffect(() => {
    fetchAdopters();
  }, []);

  if (!selectedPet) {
    return <div>Loading...</div>;
  }

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(petsURL)
      .then(() => {
        setSuccessMessage(true);
        setTimeout(function () {
          navigate("/adoptable");
        }, 3500);
      })
      .catch(() => navigate("/*"));
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          display: "flex",
          overflow: "visible",
          boxShadow: "none",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Box className="PetDetailsCard">
          <CardMedia
            sx={{
              height: "100%",
              width: "100%",
            }}
            image={selectedPet.image_url}
            alt="Pet image"
          />
          <CardContent sx={{ width: "100%" }} className="PetDetailsContent">
            <Typography gutterBottom variant="h5" component="div">
              {selectedPet.name}
            </Typography>
            {adopters && (
              <span className="label">
                {adopters.length} adopters interested ♡
              </span>
            )}
            <Typography variant="body2" color="text.secondary">
              {selectedPet.description}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              Breed: {selectedPet.breed}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              Age: {moment().diff(selectedPet.date_of_birth, "years")}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {selectedPet.gender === "female" ? "Spayed" : "Neutered"}:
              {selectedPet.desexed ? "Yes" : "No"}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              Gender: {selectedPet.gender}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              Vaccinated: {selectedPet.vaccinated ? "Yes" : "No"}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              Wormed: {selectedPet.wormed ? "Yes" : "No"}
            </Typography>
            <CardActions>
              <Link to={`/adoptable/adopt/${selectedPet.id}`}>
                <Button variant="contained" size="small">
                  Adopt
                </Button>
              </Link>
              <Button
                onClick={() => navigate(-1)}
                variant="outlined"
                size="small"
              >
                Go back
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleDelete}
              >
                Delete
              </Button>
              <Link to={`/adoptable/edit-pet/${selectedPet.id}`}>
                <Button variant="contained" color="primary" type="submit">
                  Edit
                </Button>
              </Link>
            </CardActions>
          </CardContent>
        </Box>
      </Card>
      {successMessage && <Alert sx={{ mb: 2 }}>Pet adopted succesfully!</Alert>}
    </div>
  );
}
