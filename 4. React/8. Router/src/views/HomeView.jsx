import { Link } from "react-router-dom";
import "./HomeView.css";
import Menu from "../../components/Menu";

function HomeView() {
  return (
    <div>
      <Menu />
      <h1>Home</h1>
    </div>
    // <div className="home-container">
    //   <h1 className="home-title">Home</h1>
    //   <ul className="home-links">
    //     <li className="home-link-item">
    //       <Link  to="/login" className="home-link">Login</Link>
    //     </li>
    //     <li className="home-link-item">
    //       <Link  to="/register" className="home-link">Register</Link>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default HomeView;
