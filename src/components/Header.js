import React from "react";
import logo from '../logo192.png'

const Header = () => {
    return (
      <header>
        <nav className="navBar">
          <img src={logo} className='logoImg' />
          <ul className="nav-items">
            <li>Priceing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
}

export default Header