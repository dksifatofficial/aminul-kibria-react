import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "../assets/image/client1.jpg";
import image2 from "../assets/image/client2.jpeg";
import image3 from "../assets/image/client3.png";
import classes from "../styles/Clients.module.css";
import Client from "./Client";

export function Client1() {
  return (
    <div className={classes.comment}>
      <FontAwesomeIcon className={classes.icon} icon={faQuoteLeft} />
      <p>
        Working with our talented React Front-End Developer was a game-changer
        for our project. Their expertise and attention to detail brought our
        vision to life, resulting in a seamless user experience. Highly
        recommended!
      </p>
      <div className={classes.auther}>
        <Client>
          <img src={image1} alt="" />
          <h5>Jesson Roy</h5>
          <h6>CEO of Organic Food</h6>
        </Client>
      </div>
    </div>
  );
}

export function Client2() {
  return (
    <div className={classes.comment}>
      <FontAwesomeIcon className={classes.icon} icon={faQuoteLeft} />
      <p>
        Our experience working with our skilled web developer was outstanding.
        Their expertise, efficiency, and attention to detail surpassed our
        expectations, resulting in a visually stunning and fully functional
        website, Thanks Aminul.
      </p>
      <div className={classes.auther}>
        <Client>
          <img src={image2} alt="" />
          <h5>Kim Jianu</h5>
          <h6>CEO of Kivaco Studio</h6>
        </Client>
      </div>
    </div>
  );
}

export function Client3() {
  return (
    <div className={classes.comment}>
      <FontAwesomeIcon className={classes.icon} icon={faQuoteLeft} />
      <p>
        Our Front-End Developer was an absolute pleasure to work with. Their
        creativity, technical proficiency, and ability to translate our ideas
        into stunning user interfaces made a significant impact on our project's
        success.
      </p>
      <div className={classes.auther}>
        <Client>
          <img src={image3} alt="" />
          <h5>Rayhan Lin</h5>
          <h6>Real estate Agent</h6>
        </Client>
      </div>
    </div>
  );
}
