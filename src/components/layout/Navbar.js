import React from "react";

function Navbar(props) {
  return (
    <div className="header-panel">
      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="/">Movies</a>
        <ul className="nav text-light">
          <li className="nav-item">
            <a className="nav-link active" href="/">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
