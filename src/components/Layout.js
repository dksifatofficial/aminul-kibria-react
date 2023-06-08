import classes from "../styles/Layout.module.css";
import Cursor from "./Cursor";
import TotopButton from "./TotopButton";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
      <Footer />
      <TotopButton />
      <Cursor />
    </div>
  );
}

export default Layout;
