import Navbar from "./components/Navbar";
import image from "./assets/image-54.png";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <Navbar />
      <img src={image} className="image" alt="" />
      <div className="about-content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>

        <div className="cta-container">
          <p>Your destination is waiting. Your van is ready.</p>
          <Link to="vans" className="link-button">
            Explore our vans
          </Link>
        </div>
      </div>
    </>
  );
}
