import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">STYLE-TRANSFER</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/addstyle">Add Style</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/customizedstyle">Customized Style</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/multiplestyles">Multiple Styles</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
};

export default Navbar;
