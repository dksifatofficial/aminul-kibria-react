// import { useState } from "react";
import { Link } from "react-router-dom";
import image3 from "../assets/image/blog.jpg";
import image5 from "../assets/image/darkPortfolio.jpg";
import image8 from "../assets/image/digitbeea.jpg";
import image1 from "../assets/image/ecommerce.jpg";
import image7 from "../assets/image/medical.jpg";
import image6 from "../assets/image/newspaper.jpg";
import image2 from "../assets/image/project_002.jpg";
import image9 from "../assets/image/project_011.jpg";
import image4 from "../assets/image/restaurants.jpg";
import classes from "../styles/Portfolios.module.css";
import Portfolio from "./Portfolio";
// import Popup from "./popup/Popup";

function Portfolios() {
  // const [popups, setPopups] = useState([]);
  // const handlePopupToggle = (content) => {
  //   setPopups([...popups, content]);
  // };

  // const handleClosePopup = () => {
  //   setPopups([]);
  // };

  return (
    <div className={classes.portfolios}>
      <Link
        to={"https://raiment-gallery-ecommerce.vercel.app"}
        target="_blank"
        // onClick={() =>
        //   handlePopupToggle(<img src={image1} alt="project-img" />)
        // }
      >
        <Portfolio text={"E-commerce template"}>
          <img className={classes.img} src={image1} alt="project-img" />
        </Portfolio>
      </Link>

      <Link
        to={"https://restaurants35-aminulkibria.vercel.app"}
        target="_blank"
        // onClick={() =>
        //   handlePopupToggle(<img src={image4} alt="project-img" />)
        // }
      >
        <Portfolio text={"Restaurants template"}>
          <img className={classes.img} src={image4} alt="project-img" />
        </Portfolio>
      </Link>

      <Link
        to={"https://decor-whims.vercel.app"}
        target="_blank"
        // onClick={() =>
        //   handlePopupToggle(<img src={image3} alt="project-img" />)
        // }
      >
        <Portfolio text={"Blog template"}>
          <img className={classes.img} src={image3} alt="project-img" />
        </Portfolio>
      </Link>

      <Link
        to={"https://rain-tree-aminulkibria.vercel.app"}
        target="_blank"
        // onClick={() =>
        //   handlePopupToggle(<img src={image2} alt="project-img" />)
        // }
      >
        <Portfolio text={"Blog template"}>
          <img className={classes.img} src={image2} alt="project-img" />
        </Portfolio>
      </Link>

      <Link
        to={"https://premium-aminulkibria.vercel.app"}
        target="_blank"
        // onClick={() =>
        //   handlePopupToggle(<img src={image5} alt="project-img" />)
        // }
      >
        <Portfolio text={"Portfolio template"}>
          <img className={classes.img} src={image5} alt="project-img" />
        </Portfolio>
      </Link>

      <Link
        to={"https://prothom-alo-aminulkibria.vercel.app"}
        target="_blank"
        // onClick={() =>
        //   handlePopupToggle(<img src={image6} alt="project-img" />)
        // }
      >
        <Portfolio text={"Newspaper template"}>
          <img className={classes.img} src={image6} alt="project-img" />
        </Portfolio>
      </Link>

      <Link
        to={"https://medicaldesign22.vercel.app"}
        target="_blank"
        // onClick={() =>
        //   handlePopupToggle(<img src={image7} alt="project-img" />)
        // }
      >
        <Portfolio text={"Clinic template"}>
          <img className={classes.img} src={image7} alt="project-img" />
        </Portfolio>
      </Link>

      <Link
        to={"https://digitbeea.com"}
        target="_blank"
        // onClick={() =>
        //   handlePopupToggle(<img src={image8} alt="project-img" />)
        // }
      >
        <Portfolio text={"Marketing template"}>
          <img className={classes.img} src={image8} alt="project-img" />
        </Portfolio>
      </Link>

      <Link
        to={"https://prothom-alo-aminulkibria.vercel.app"}
        target="_blank"
        // onClick={() =>
        //   handlePopupToggle(<img src={image9} alt="project-img" />)
        // }
      >
        <Portfolio text={"Newsletter template"}>
          <img className={classes.img} src={image9} alt="project-img" />
        </Portfolio>
      </Link>

      {/* {popups.map((content, index) => (
        <Popup key={index} handleClose={handleClosePopup} content={content} />
      ))} */}
    </div>
  );
}

export default Portfolios;
