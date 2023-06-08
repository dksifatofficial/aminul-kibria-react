import React, { useState } from "react";
import image1 from "../assets/image/office_01.jpg";
import image2 from "../assets/image/office_02.jpg";
import image3 from "../assets/image/office_03.jpg";
import classes from "../styles/BlogBody.module.css";
import Popup from "./popup/Popup";
import { PopupBlog1, PopupBlog2, PopupBlog3 } from "./popup/PopupBlogs";

function BlogBody() {
  const [popups, setPopups] = useState([]);
  const handlePopupToggle = (content) => {
    setPopups([...popups, content]);
  };

  const handleClosePopup = () => {
    setPopups([]);
  };

  return (
    <div className={classes.bodyContainer}>
      <div
        className={classes.bodyAll}
        onClick={() => handlePopupToggle(<PopupBlog1 />)}
      >
        <div className={classes.cover}>
          <img className={classes.coverImg} src={image1} alt="img" />
          <span className={classes.blogDate}>25 Jan</span>
        </div>
        <h5>Web development</h5>
        <h4>Jim Morisson Says when the musics over turn off the light</h4>
      </div>

      <div
        className={classes.bodyAll}
        onClick={() => handlePopupToggle(<PopupBlog2 />)}
      >
        <div className={classes.cover}>
          <img className={classes.coverImg} src={image2} alt="img" />
          <span className={classes.blogDate}>27 Feb</span>
        </div>
        <h5>Branding</h5>
        <h4>How to be appreciated for your hard work as a developer</h4>
      </div>

      <div
        className={classes.bodyAll}
        onClick={() => handlePopupToggle(<PopupBlog3 />)}
      >
        <div className={classes.cover}>
          <img className={classes.coverImg} src={image3} alt="img" />
          <span className={classes.blogDate}>11 Mar</span>
        </div>
        <h5>Social Media</h5>
        <h4>How designers and developers can collaborate better</h4>
      </div>

      {popups.map((content, index) => (
        <Popup key={index} handleClose={handleClosePopup} content={content} />
      ))}
    </div>
  );
}

export default BlogBody;
