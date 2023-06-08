import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../styles/Socialicon.module.css";

function Socialicon() {
  return (
    <div className={classes.socialIcon}>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/SIFATtheDK"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Aminulkibria"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aminul-kibria-996a20230"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dksifatofficial?tab=repositories"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socialicon;
