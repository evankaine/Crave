import "./navbar.css"
import AlbumIcon from '@material-ui/icons/Album';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import Logo from "../logo/Logo"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navContainer">
      <Logo />
      <div className="navIconContainer">
        <div className="navbarIcons">
          
          <Link to="/"
          className="navHome">
          <HomeIcon />Home</Link>
          <br />
          <Link to="/House"
          className="navHouse">
          <AlbumIcon />House</Link>
          <br />
          <Link to="/Dubstep"
          className="navDubstep">
          <AlbumIcon />Dubstep</Link>
          <br />
            <Link to="/Events"
          className="navEvents">
          <EventIcon />Events</Link>
        </div>
          
      </div>
    </div>
  )
}
