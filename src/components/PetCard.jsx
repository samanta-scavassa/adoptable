import "./PetCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function PetCard({ pet }) {
  return (
    <Link to={`/adoptable/pets/${pet.id}`}>
      <Card className="PetCard" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={pet.image}
            alt="pet image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pet.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Breed:</b> {pet.breed}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Gender:</b> {pet.gender}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default PetCard;
