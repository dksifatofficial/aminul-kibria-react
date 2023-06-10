import AboutMe from "../AboutMe";
import Blog from "../Blog";
import Contact from "../Contact";
import DiL from "../DiL";
import Map from "../Map";
import Newsletter from "../Newsletter";
import PortfolioContainer from "../PortfolioContainer";
import Qualitys from "../Qualitys";
import Services from "../Services";
import TestimonialContainer from "../TestimonialContainer";
import TopContainer from "../TopContainer";
import TopNav from "../TopNav";

function Home() {
  return (
    <div>
      <TopNav />
      <TopContainer />
      <Qualitys />
      <AboutMe />
      <PortfolioContainer />
      <TestimonialContainer />
      <DiL />
      <Services />
      <Blog />
      <Newsletter />
      <Contact />
      <Map />
    </div>
  );
}

export default Home;
