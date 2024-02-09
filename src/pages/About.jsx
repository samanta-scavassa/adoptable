import TeamMemberCard from "../components/TeamMemberCard";
import JoyImg from "../assets/images/Joy.jpeg";
import SamantaImg from "../assets/images/Samanta.jpg";
import JuanImg from "../assets/images/Juan.jpg";
import Olumide from "../assets/images/Olumide.jpg";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
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
