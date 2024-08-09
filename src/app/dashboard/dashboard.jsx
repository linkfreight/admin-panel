import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '/assets/logo.png';


import './dashboard.css';

export default function Home() {
  return (
      <div className="navbar">
        <div >
          <img src={logo}  className="logo"/>
        </div>
        <div className="nav-links">
          <a href="#">Dashboard</a>
          <a href="#">Quotes</a>
          <a href="#">Bookings</a>
        </div>
        <div className="user-info">
          <button className="quote-button">+ Request a Quote</button>
          <div className="user-dropdown">
            <FontAwesomeIcon 
              icon={faUserCircle} 
              size="2x" 
              className="profile-icon"
            />
          </div>
        </div>
      </div>
  );
}
