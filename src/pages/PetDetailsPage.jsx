import { useParams } from "react-router-dom";
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
            <Link to="/adopt">
              <Button variant="contained" size="small">
                Adopt
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outlined" size="small">
                Go back
              </Button>
            </Link>
          </CardActions>
        </CardContent>
      </Box>
    </Card>
  );
}

// const selectedPetDetailsPage = () => {
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
