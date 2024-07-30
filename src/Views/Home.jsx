// * Imports
import {
  Blog,
  Courses,
  Features,
  Hero,
  Instructors,
  Join,
  OurPartner,
  Students,
} from "../Sections/index";
// * Script
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Hero />
      </div>
      <OurPartner />
      <div className="container">
        <Features />
        <Courses />
        <Instructors />
      </div>
      <Blog />
      <div className="container">
        <Students />
        <Join />
      </div>
    </section>
  );
};

export default Home;
