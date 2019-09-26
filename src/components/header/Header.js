import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Devices
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item active">
              <Link to="/index" className="nav-link" href="#">
                Device <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/index/user" className="nav-link" href="#">
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/index/settings" className="nav-link" href="#">
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/index/add-device" className="nav-link" href="#">
                Add Device
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
