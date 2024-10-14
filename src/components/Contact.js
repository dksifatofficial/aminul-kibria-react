import image1 from "../assets/icon/icon_03.png";
import image2 from "../assets/icon/icon_07.png";
import classes from "../styles/Contact.module.css";
import ContactBody from "./ContactBody";
import Header from "./Header";

function Contact() {
  return (
    <div className={classes.contactContainer} id="contact">
      <img className={classes.img1} src={image1} alt="" />
      <img className={classes.img2} src={image2} alt="" />
      <Header className={classes.header}>
        <h3>Contact Me</h3>
        <h2>I Want To Hear From You</h2>
        <p>
          WhatsApp or mail me anytime 24 hours a day, 7 days a week to contact me.
        </p>
      </Header>
      <ContactBody />
    </div>
  );
}

export default Contact;
