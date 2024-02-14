import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./TeamMemberCard.module.css";

export default function TeamMemberCard({
  img,
  name,
  role,
  gitHubURL,
  linkedInURL,
}) {
  return (
    <div className={styles.teamMemberCard}>
      <img src={img} alt="" />
      <h3> {name} </h3>
      <p> {role} </p>
      <a href={linkedInURL}>
        <FaLinkedin />
        LinkedIn
      </a>
      <a href={gitHubURL}>
        <FaGithub />
        GitHub
      </a>
    </div>
  );
}
