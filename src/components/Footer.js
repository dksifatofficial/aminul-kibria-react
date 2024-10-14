// import { Link } from "react-router-dom";
import classes from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={classes.footerContainer}>
        <div className={classes.text}>
          <p>
            Developed with love by{" "}
            <a href="#banner">
              <span>
                <b>Aminul Kibria</b>
              </span>
            </a>{" "}
            © 2023
          </p>
        </div>
    </div>
  );
}

export default Footer;
