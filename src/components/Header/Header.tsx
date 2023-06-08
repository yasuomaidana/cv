import { HomeRounded } from "@mui/icons-material";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import socials from "../../utils/socials";
import { SocialComponent } from "./SocialComponent/SocialComponent";
import "./Header.scss";

const Header = ( ) => {

  return (
    <Navbar sticky="top" expand="lg" className="header">
      <NavLink to="/" className={({ isActive, isPending }) => "home_icon "+(isActive ? "home_link_active" : "home_link")
            }>
        <Navbar.Brand >
          <HomeRounded />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <NavLink
            to="/resume"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "header_active" : "header_link"
            }
          >
            Resume
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "header_active" : "header_link"
            }>
            Portfolio
          </NavLink>
        </Nav>
        <div className="header_right">
          {Object.entries(socials).map(([k, v], i) => (
            <SocialComponent key={i.toString()} social={v} />
          ))}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
