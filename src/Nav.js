import React, { Component } from 'react';
import './Nav.css';
class Nav extends Component {
  render() {
    return (
<nav className="navbar navbar-toggleable-md navbar-dark bg-primary">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#">
            <strong>Navbar</strong>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav1">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Pricing</a>
              </li>
              <li className="nav-item dropdown btn-group">
                <a className="nav-link dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu dropdown" aria-labelledby="dropdownMenu1">
                  <a className="dropdown-item">Action</a>
                  <a className="dropdown-item">Another action</a>
                  <a className="dropdown-item">Something else here</a>
                </div>
              </li>
            </ul>
            <form className="form-inline waves-effect waves-light">
              <input className="form-control" type="text" placeholder="Search" />
            </form>
          </div>
        </div>
      </nav>


    );
  }
}
export default Nav;