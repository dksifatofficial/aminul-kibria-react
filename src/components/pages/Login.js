import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classes from "../../styles/Login.module.css";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

function Login() {
  return (
    <div className={classes.login}>
      <Link className={classes.back} to="/">
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
      </Link>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
