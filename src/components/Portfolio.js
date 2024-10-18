import classes from "../styles/Portfolio.module.css";

function Portfolio({ children, text }) {
  return (
    <>
      <div className={classes.portfolio}>
        <div className={classes.body}>
          <div className={classes.overlayTop}></div>
          <div className={classes.overlayBottom}></div>
          <div className={classes.text}>{text}</div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Portfolio;



// import classes from "../styles/Portfolio.module.css";

// function Portfolio({children}) {
//   return (
//     <>
//       <div className={classes.portfolio}>
//         <div className={classes.body}>
//           {children}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Portfolio;
