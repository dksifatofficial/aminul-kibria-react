import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classes from "../../styles/Signup.module.css";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

function Signup() {
  return (
    <div className={classes.signup}>
      <Link className={classes.back} to="/">
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
      </Link>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
