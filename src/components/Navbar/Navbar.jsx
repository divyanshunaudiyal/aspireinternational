import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar_title">
          <h1>
            <span>aspire international</span> education
          </h1>
        </div>
        <div className="navbar_links">
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="about">About Us</Link>
            <Link to="services">Services</Link>
            <Link to="contact">Contact us</Link>
          </div>
        </div>

        {/* mobile navbar */}
        <div className="mobile-navbar">
          <div className="mobile-navbar_toggle">
            <button onClick={() => setVisible(!visible)}>menu</button>
          </div>
          <ul className={`mobile-navbar_links ${visible ? "show" : "hidden"}`}>
            <li>
              <Link to="/" onClick={() => setVisible(!visible)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" onClick={() => setVisible(!visible)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="services" onClick={() => setVisible(!visible)}>
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link to="contact" onClick={() => setVisible(!visible)}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
