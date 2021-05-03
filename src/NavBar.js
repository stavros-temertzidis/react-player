import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import Player from "./Player";
import About from "./About";

const textStyle = {
  color: "White",
  textDecoration: "none",
};

const NavBar = () => {
  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link style={textStyle} to="/">
              Awesome Video Player
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link style={textStyle} to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={textStyle} to="/video-player">
                  Player
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={textStyle} to="/about">
                  About
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/video-player">
            <Player />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default NavBar;
