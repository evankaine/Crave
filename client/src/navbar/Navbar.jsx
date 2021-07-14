import "./navbar.css"
import AlbumIcon from '@material-ui/icons/Album';
import HomeIcon from '@material-ui/icons/Home';
import Logo from "../logo/Logo"

export default function Navbar() {
  return (
    <div className="navContainer">
      <Logo />
      <div className="navIconContainer">
        <div className="navbarIcons">
          <HomeIcon />
          <span className="navHome">Home</span>
          <AlbumIcon />
          <span className="navHouse">House</span>
          <AlbumIcon />
          <span className="navDubstep">Dubstep</span>
        </div>
          
      </div>
    </div>
  )
}
