import "./navbar.css"
import AlbumIcon from '@material-ui/icons/Album';
import HomeIcon from '@material-ui/icons/Home';

export default function Navbar() {
  return (
    <div className="navContainer">

      <div className="navTop">
        <span className="siteLogo">LOGO</span>
      </div>

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
