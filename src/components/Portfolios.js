import image1 from "../assets/image/project_001.png";
import image2 from "../assets/image/project_002.png";
import image3 from "../assets/image/project_003.png";
import image4 from "../assets/image/project_004.png";
import image5 from "../assets/image/project_005.png";
import image6 from "../assets/image/project_006.png";
import image7 from "../assets/image/project_007.png";
import image8 from "../assets/image/project_008.png";
import classes from "../styles/Portfolios.module.css";
import Portfolio from "./Portfolio";

function Portfolios() {
  return (
    <div className={classes.portfolios}>
      <Portfolio>
        <a href="https://aminulkibria.com/" rel="noopener" target="example">
          <img className={classes.img} src={image1} alt="project-img" />
        </a>
      </Portfolio>

      <Portfolio>
        <a
          href="https://aminulkibria.com/product.html"
          rel="noopener"
          target="example"
        >
          <img className={classes.img} src={image2} alt="project-img" />
        </a>
      </Portfolio>

      <Portfolio>
        <a
          href="https://aminulkibria.com/product.html"
          rel="noopener"
          target="example"
        >
          <img className={classes.img} src={image3} alt="project-img" />
        </a>
      </Portfolio>

      <Portfolio>
        <a
          href="https://aminulkibria.com/about.html"
          rel="noopener"
          target="example"
        >
          <img className={classes.img} src={image4} alt="project-img" />
        </a>
      </Portfolio>

      <Portfolio>
        <a
          href="https://aminulkibria.com/Author.html"
          rel="noopener"
          target="example"
        >
          <img className={classes.img} src={image5} alt="project-img" />
        </a>
      </Portfolio>

      <Portfolio>
        <a
          href="https://aminulkibria.com/Author.html"
          rel="noopener"
          target="example"
        >
          <img className={classes.img} src={image6} alt="project-img" />
        </a>
      </Portfolio>

      <Portfolio>
        <a
          href="https://aminulkibria.com/news.html"
          rel="noopener"
          target="example"
        >
          <img className={classes.img} src={image7} alt="project-img" />
        </a>
      </Portfolio>

      <Portfolio>
        <a
          href="https://aminulkibria.com/Author.html"
          rel="noopener"
          target="example"
        >
          <img className={classes.img} src={image8} alt="project-img" />
        </a>
      </Portfolio>
    </div>
  );
}

export default Portfolios;
