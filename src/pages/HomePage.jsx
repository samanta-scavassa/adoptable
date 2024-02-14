
// import ErrorPage from "./ErrorPage";

import { CardMedia, Grid, Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./HomePage.css";
import { Link } from "react-router-dom";
import PetListCard from "../components/PetListCard";

const generatePetCarouselItems = (pets) => {
  const items = [];
  let carouselItems = [];
  pets.forEach((pet, i) => {
    if ((i + 1) % 3 === 0) {
      items.push(carouselItems);
      carouselItems = [];
    }
    carouselItems.push(pet);
  });

  return items;
};

function Homepage({ pets }) {
  const carousel = generatePetCarouselItems(pets);
  //Use the lines below if we want to have a customized error message for the home page (ask Joy for further detail)
  // const error = false;
  // if(error) {
  //   return <ErrorPage errorMessage={"Data not found. Please try again."} />
  // }
  
  return (
    <>
      <PetListCard />
      <Carousel>
        {carousel.map((items, index) => (
          <Paper elevation={0} key={index} sx={{ height: 300 }}>
            <Item items={items} />
          </Paper>
        ))}
      </Carousel>{" "}
    </>
  );
}

function Item({ items }) {
  return (
    <Grid
      item
      xs={4}
      sx={{
        display: "flex",
        height: "100%",
        position: "relative",
        gap: 1,
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      {items.map((pet) => (
        <Link className="MediaLink" to={`/adoptable/pets/${pet.id}`} key={pet.id}>
          <CardMedia className="Media" image={pet.image_url} title={pet.name}>
            <Typography className="MediaCaption">{pet.name}</Typography>
          </CardMedia>
        </Link>
      ))}
    </Grid>
  );
}

export default Homepage;
