import classes from '../../styles/Policy.module.css'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Policy() {
  return (
    <div className={classes.container}>
      <Link className={classes.back} to="/">
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
      </Link>
      <h4>This is Privacy Policy page</h4>
    </div>
  )
}

export default Policy