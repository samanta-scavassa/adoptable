import React from "react";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = styled((theme) => ({
  root: {
    width: "100%",
  },

  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function FAQsPage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(panel);
    console.log(isExpanded);
    setExpanded(isExpanded ? panel : false);
  };

  const FAQData = [
    {
      id: "panel1",
      secondaryHeading: "How does the adoption process work?",
      details:
        "Simply browse through our listings of dogs and cats available for adoption, select the one that captures your heart, and follow the instructions to apply. Our team will guide you through the adoption process every step of the way.",
    },
    {
      id: "panel2",
      secondaryHeading:
        "Are the animals on your app vaccinated and spayed/neutered?",
      details:
        " Yes, all animals available for adoption on our app are vaccinated and spayed/neutered, ensuring their health and well-being before finding their forever homes.",
    },
    {
      id: "panel3",
      secondaryHeading: "What if I have pets already?",
      details:
        " We encourage adopters to consider their current pets' compatibility with a new addition. Our team can provide guidance and resources to help introduce your new furry friend to your existing pets. ",
    },
    {
      id: "panel4",
      secondaryHeading: "What if the adoption doesn't work out?",
      details:
        " While we strive for successful adoptions, we understand that sometimes it may not be the right fit. We offer a return policy and will work with you to find a better match if needed. ",
    },
    {
      id: "panel5",
      secondaryHeading: "Can I meet the animal before adopting?",
      details:
        " Absolutely! We encourage potential adopters to schedule a meet-and-greet with the animal they're interested in. It's important for both you and the pet to ensure a good match. ",
    },
    {
      id: "panel6",
      secondaryHeading: "Are there adoption fees?",
      details:
        " Yes, there are adoption fees associated with adopting a pet through our app. These fees help cover the cost of vaccinations, spaying/neutering, microchipping, and other necessary care. ",
    },
    {
      id: "panel7",
      secondaryHeading: "How can I support your app if I'm not ready to adopt?",
      details:
        " You can support our mission by spreading the word about our app, volunteering at local shelters, fostering animals in need, or making a donation to help us continue our efforts in rescuing and rehoming animals. Every little bit helps!",
    },
    {
      id: "panel8",
      secondaryHeading: "Are there adoption fees?",
      details:
        " Yes, there are adoption fees associated with adopting a pet through our app. These fees help cover the cost of vaccinations, spaying/neutering, microchipping, and other necessary care. ",
    },
    {
      id: "panel9",
      secondaryHeading: "How long does the adoption process take?",
      details:
        " The timeline varies but typically takes a few days to a couple of weeks from application to bringing your new pet home. ",
    },
    {
      id: "pane20",
      secondaryHeading:
        "Can I adopt if I live outside of the area listed on the app?",
      details:
        "  Generally, we prefer local adoptions, but exceptions can be made on a case-by-case basis. Please reach out to discuss further.",
    },
  ];

  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        style={{
          color: "black",
          fontWeight: "bolder",
          fontFamily: "Roboto",
          fontSize: "1.5rem",
          marginTop: "10px",
        }}
      >
        Welcome to our FAQs hub - your one-stop destination for questions, and
        our team is here to provide the answers you need!
      </Typography>
      {FAQData.map((accordion) => {
        const { id, secondaryHeading, details } = accordion;
        return (
          <Accordion
            expanded={expanded === id}
            key={id}
            onChange={handleChange(id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                style={{ fontWeight: "bold" }}
                className={classes.secondaryHeading}
              >
                {secondaryHeading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
