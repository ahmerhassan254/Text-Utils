import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <Link className="nav-link active" to="/">
          {props.tab1}
        </Link>
        <Link className="nav-link" to="/about">
          {props.tab2}
        </Link>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input mx-5"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toogleMode}
            />
            <label
              className="form-check-label "
              forhtml="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
}
// we do this so we don't accidently pass some other data types in these props. isRequired make sure that we put something in a props if deafult value is not set up b/c of isRequired error will occur
Navbar.protTypes = {
  title: PropTypes.string.isRequired,
  tab1: PropTypes.string,
  tab2: PropTypes.string,
};
//default values of  the props
Navbar.defaultProps = {
  title: "Set Title here",
  tab1: "Set menu item 1",
  tab2: "Set menu item 2",
};
