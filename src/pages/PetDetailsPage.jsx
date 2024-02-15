import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "./PetDetailsPage.css";

export default function PetDetailsPage({ pets }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedPet = pets.find((animal) => animal.id === id);
  if (!selectedPet) {
    return <div>Loading...</div>;
  }

  return (
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
          </CardActions>
        </CardContent>
      </Box>
    </Card>
  );
}
