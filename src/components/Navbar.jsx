import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link className="link" to="/">
          #VANLIFE
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>Vans</li>
      </ul>
    </nav>
  );
}
