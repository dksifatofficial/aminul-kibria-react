import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AKicon from "../assets/icon/ak.png";
import classes from "../styles/TopNav.module.css";
import Account from "./Account";

function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.topNavBar}>
      <div className={`${classes.topMenu} ${isScrolled ? classes.scrolled : ""}`}>
        <ul>
          <li>
            <Link to={"https://aminulkibria.com"} target="_blank">
              <img src={AKicon} alt="" />
            </Link>
          </li>
          <li>
            <a href="#banner">Home</a>
          </li>
          <li>
            <a href="#aboutMe">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {/* <li>
            <a href="#downloading">Download CV</a>
          </li> */}
          <li>
            <Account />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
