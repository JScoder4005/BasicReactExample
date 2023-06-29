import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const categories = ["mens", "womens", "kids"];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Counter">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products?ser=xyz&limit=1">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/valione/">
                Validation One
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="to"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {categories.map((cat, ind) => (
                  <li key={ind}>
                    <Link className="dropdown-item" to={`/category/${cat}`}>
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="to"
                id="navbarDropdownHooks"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hooks
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownHooks"
              >
                <li>
                  <Link className="dropdown-item" to="/myref">
                    UseRef
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mymemo">
                    UseMemo
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
