import { HomeRounded } from "@mui/icons-material";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import socials from "../../utils/socials";
import { SocialComponent } from "./SocialComponent/SocialComponent";

interface HeaderProp {
  pathname: string;
}
const Header: React.FC<HeaderProp> = (headerProp) => {
  const pathName = headerProp.pathname;
  
  return (
    <Navbar sticky="top" expand="lg" className="header">
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "active" : ""}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={pathName === "/portfolio" ? "active" : ""}
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
        {Object.entries(socials).map(([k,v],i) => <SocialComponent key={i.toString()} social={v}/>)}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
