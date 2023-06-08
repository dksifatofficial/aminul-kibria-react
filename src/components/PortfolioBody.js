import image1 from "../assets/image/project_001.png";
import image2 from "../assets/image/project_002.png";
import image3 from "../assets/image/project_003.png";
import image4 from "../assets/image/project_004.png";
import image5 from "../assets/image/project_005.png";
import image6 from "../assets/image/project_006.png";
import image7 from "../assets/image/project_007.png";
import image8 from "../assets/image/project_008.png";
import classes from "../styles/PortfolioBody.module.css";

function PortfolioBody() {
  return (
    <div className={classes.portfolioBody}>

      <div className={classes.portfolioBodySpan}>
        <a href="https://aminulkibria.com/" rel="noopener" target="example">
          <div className={classes.portfolioBodyAll}>
            <img
              className={classes.portfolioImg}
              src={image1}
              alt="project-img"
            />
          </div>
        </a>
      </div>

      <div className={classes.portfolioBodySpan}>
        <a
          href="https://aminulkibria.com/product.html"
          rel="noopener"
          target="example"
        >
          <div className={classes.portfolioBodyAll}>
            <img
              className={classes.portfolioImg}
              src={image2}
              alt="project-img"
            />
          </div>
        </a>
      </div>

      <div className={classes.portfolioBodySpan}>
        <a
          href="https://aminulkibria.com/product.html"
          rel="noopener"
          target="example"
        >
          <div className={classes.portfolioBodyAll}>
            <img
              className={classes.portfolioImg}
              src={image3}
              alt="project-img"
            />
          </div>
        </a>
      </div>

      <div className={classes.portfolioBodySpan}>
        <a
          href="https://aminulkibria.com/about.html"
          rel="noopener"
          target="example"
        >
          <div className={classes.portfolioBodyAll}>
            <img
              className={classes.portfolioImg}
              src={image4}
              alt="project-img"
            />
          </div>
        </a>
      </div>

      <div className={classes.portfolioBodySpan}>
        <a
          href="https://aminulkibria.com/Author.html"
          rel="noopener"
          target="example"
        >
          <div className={classes.portfolioBodyAll}>
            <img
              className={classes.portfolioImg}
              src={image5}
              alt="project-img"
            />
          </div>
        </a>
      </div>

      <div className={classes.portfolioBodySpan}>
        <a
          href="https://aminulkibria.com/Author.html"
          rel="noopener"
          target="example"
        >
          <div className={classes.portfolioBodyAll}>
            <img
              className={classes.portfolioImg}
              src={image6}
              alt="project-img"
            />
          </div>
        </a>
      </div>

      <div className={classes.portfolioBodySpan}>
        <a
          href="https://aminulkibria.com/news.html"
          rel="noopener"
          target="example"
        >
          <div className={classes.portfolioBodyAll}>
            <img
              className={classes.portfolioImg}
              src={image7}
              alt="project-img"
            />
          </div>
        </a>
      </div>

      <div className={classes.portfolioBodySpan}>
        <a
          href="https://aminulkibria.com/Author.html"
          rel="noopener"
          target="example"
        >
          <div className={classes.portfolioBodyAll}>
            <img
              className={classes.portfolioImg}
              src={image8}
              alt="project-img"
            />
          </div>
        </a>
      </div>
      
    </div>
  );
}

export default PortfolioBody;
