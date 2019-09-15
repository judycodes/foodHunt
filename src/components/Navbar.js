import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="nav-container">
        <p className="smallCaps textCenter"><Link to="/foodHunt/home" className="link brand-link">Food Hunt</Link></p>

        <ul className="navbar-ul">
          <li className="smallCaps textCenter"><Link to="/foodHunt/home" className="link">Home</Link></li>

          <li className="smallCaps textCenter"><Link to="/foodHunt/About" className="link">About</Link></li>

          <li className="smallCaps textCenter"><Link to="/foodHunt/Hangry" className="link">Hangry?</Link></li>
        </ul>
      </div>
    )
};

export default Navbar;
