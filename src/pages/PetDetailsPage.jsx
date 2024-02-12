import { useParams } from "react-router-dom";
import moment from "moment";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PetDetailsPage({ pets }) {
  const [pet, setPet] = useState(null);
  const { id } = useParams();
  setPet(pets.filter((animal) => animal.id === id));
  console.log(pets);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={pet.image_url} alt="pet image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pet.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pet.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Breed: {pet.breed}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Age: {moment().diff(pet?.date_of_birth, "years")}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {pet.gender === "female" ? "Spayed" : "Neutered"}:
          {pet.desexed ? "Yes" : "No"}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Gender: {pet?.gender}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Vaccinated: pet.vaccinated ? Yes : No
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Wormed: {pet.wormed ? "Yes" : "No"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Adopt</Button>
        <Button size="small">Go back</Button>
      </CardActions>
    </Card>
  );
}

// const PetDetailsPage = () => {
//   const [pet, setPet] = useState(null);
//   const { id } = useParams();

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://adoptable.adaptable.app/pets/${id}`
//       );
//       setPet(response.data);
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [id]);

//   console.log(pet);
//   if (!pet) {
//     return <>Loading...</>;
//   }
//   return (
//     <div className="container">
//       <div className="left">
//         <img src={pet.image_url} />
//       </div>
//       <div className="right">
//         <h2>{pet?.name}</h2>
//         <p>{pet.description}</p>
//         <p>Breed: {pet?.breed}</p>
//         <p>Age: {moment().diff(pet?.date_of_birth, "years")}</p>
//         <p>
//           {pet.gender === "female" ? "Spayed" : "Neutered"}:
//           {pet.desexed ? "Yes" : "No"}
//         </p>
//         <p>Gender: {pet?.gender}</p>
//         <p>Vaccinated: {pet.vaccinated ? "Yes" : "No"}</p>
//         <p>Wormed: {pet.wormed ? "Yes" : "No"}</p>
//         <button>Adopt</button>
//         <Link to="/">
//           <button>Go back</button>
//         </Link>
//       </div>
//     </div>
//   );
// };
