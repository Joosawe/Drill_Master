import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Team from "./Team";
import "./contact.css";
import { Button } from "react-bootstrap";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="bg-aboutus">
          <div className="aboutus">
            <Button variant="outline-info" href="/">
              Return home
            </Button>
          </div>
          <h1>ABOUT US</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/team" component={Team} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
