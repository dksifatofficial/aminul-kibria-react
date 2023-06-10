import image1 from "../assets/icon/icon_30.png";
import image2 from "../assets/icon/icon_31.png";
import classes from "../styles/TestimonialsContainer.module.css";
import Header from "./Header";
import Testimonials from "./Testimonials";

function TestimonialContainer() {
  return (
    <div className={classes.container}>
      <img className={classes.bgImg1} src={image1} alt="" />
      <img className={classes.bgImg2} src={image2} alt="" />
      <Header className={classes.header}>
        <h3>Testimonials</h3>
        <h2>What My Clients Say</h2>
        <p>
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </p>
      </Header>
      <div className={classes.side}></div>
      <div className={classes.testimonials}>
        <Testimonials />
      </div>
      <div className={classes.side}></div>
    </div>
  );
}

export default TestimonialContainer;
