import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Cat from "../assets/images/Cat-icon.png";
import Dog from "../assets/images/Dog-icon.png";
import "./PetListCard.css";
import { Link } from "react-router-dom";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function PetListCard() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ justifyContent: "center", alignItems: "center", margin: 7, gap: 3 }}
    >
      <Link to={`cats`}>
        <div className="CatCard">
          <img className="CatImage" src={Cat} alt="Cat icon" />
          <DemoPaper square={false}>CATS</DemoPaper>
        </div>
      </Link>
      <Link to={`dogs`}>
        <div className="DogCard">
          <img className="DogImage" src={Dog} alt="Dog icon" />
          <DemoPaper square={false}>DOGS</DemoPaper>
        </div>
      </Link>
    </Stack>
  );
}
