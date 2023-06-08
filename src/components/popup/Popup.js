import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../../styles/Popup.module.css";

function Popup({ content, handleClose }) {
  return (
    <div className={classes.popupOverlay}>
      <div className={classes.popupContent}>{content}</div>
      <div className={classes.button} onClick={handleClose}>
        <FontAwesomeIcon className={classes.icon} icon={faXmark} />
      </div>
    </div>
  );
}

export default Popup;
