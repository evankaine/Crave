import "./navbar.css"
import AlbumIcon from '@material-ui/icons/Album';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import Logo from "../logo/Logo"
import Poll from "../poll/Poll"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <Logo />
      <div className="navbarIconContainer">
        <div className="navbarIcons">
          <li>
            <Link to="/"
            className="navHome">
            <HomeIcon />Home</Link>
          </li>
        <br />
          <li>
            <Link to="/House"
            className="navHouse">
            <AlbumIcon />House</Link>
          </li>
        <br />
          <li>
            <Link to="/Dubstep"
            className="navDubstep">
            <AlbumIcon />Dubstep</Link>
          </li>
        <br />
          <li>
            <Link to="/Events"
            className="navEvents">
            <EventIcon />Events</Link>
          </li>
        </div>
      </div>
      <hr className="navbarHr"/>
    <Poll />
    </div>
  )
}
