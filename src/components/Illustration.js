import signupImage from '../assets/logo/signup.svg'
import classes from '../styles/Illustration.module.css'

function Illustration() {
  return (
    <div className={classes.illustration}>
        <img src={signupImage} alt='Signup' />
    </div>
  )
}

export default Illustration