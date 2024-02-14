import TeamMemberCard from "../components/TeamMemberCard";
import JoyImg from "../assets/images/Joy.jpeg";
import SamantaImg from "../assets/images/Samanta.jpg";
import JuanImg from "../assets/images/Juan.jpg";
import Olumide from "../assets/images/Olumide.jpg";
import dog from "../assets/images/dog-high-five-concept.jpg";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <h2 className="the-shelter">The Shelter</h2>
      <p className="welcome">
        Welcome to Adoptable - Where Home Begins! Connecting you with rescue
        pets waiting for their forever families. Simplifying adoption, spreading
        love, one pet at a time. Embrace the joy of adoption with Adoptable
        today!
      </p>
      <img className="image" src={dog} alt="Shelter image" />
      <h2 className="our-team">Our Team</h2>
      <section className="team">
        {members.map((member, index) => (
          <TeamMemberCard key={member.name + index} {...member} />
        ))}
      </section>
    </div>
  );
}

export default About;

const members = [
  {
    img: Olumide,
    name: "Olumide",
    role: "Fullstack Web Developer",
    gitHubURL: "https://github.com/Wence88",
    linkedInURL: "https://www.linkedin.com/in/olumide-ajidahun-9b3ba216a/",
  },
  {
    img: JoyImg,
    name: "Joy",
    role: "Fullstack Web Developer",
    gitHubURL: "https://github.com/TinyjoyTW",
    linkedInURL: "https://www.linkedin.com/in/joy-huang-975b91128/",
  },
  {
    img: JuanImg,
    name: "Juan",
    role: "Fullstack Web Developer",
    gitHubURL: "https://github.com/juanisolis1111",
    linkedInURL: "https://www.linkedin.com/in/juani-solis-43b7362a5/",
  },
  {
    img: SamantaImg,
    name: "Samanta",
    role: "Fullstack Web Developer",
    gitHubURL: "https://github.com/samanta-scavassa",
    linkedInURL: "https://www.linkedin.com/in/samanta-bevilacqua/",
  },
];
