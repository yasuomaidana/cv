import { HomeRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import socials from "../../utils/socials";
import { SocialComponent } from "./SocialComponent/SocialComponent";
import "./Header.scss";
import Profile from "../Profile/Profile";

const add_toggle = (isSmall:boolean, component:JSX.Element) => 
isSmall? <Navbar.Toggle className="menu_toggler">{component}</Navbar.Toggle> : component;


const SectionLink = (title: string, link: string, isSmall: boolean) => 
  add_toggle(isSmall, <NavLink
    to={link}
    className={({ isActive, isPending }) =>
      isActive ? "header_active" : "header_link"
    }
  >
    {title}
  </NavLink>);
const Header = () => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const [isHome, setIsHome] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth <= 991); // Adjust the screen size threshold as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  useEffect(() => {
    if (location.pathname !== path) {
      setPath(location.pathname);
      setIsHome(location.pathname === "/");
      // Path has changed, perform any additional actions here
    }
  }, [location.pathname, path]);

  return (
    <>
      <Navbar sticky="top" expand="lg" className="header">
        {add_toggle(isSmallScreen, <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            "home_icon " + (isActive ? "home_link_active" : "home_link")
          }
        >
          <Navbar.Brand>
            <HomeRounded />
          </Navbar.Brand>
        </NavLink>)}
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="header_left">
            {/* <Navbar.Toggle className="menu_toggler"> */}
            {SectionLink("Portfolio","/portfolio", isSmallScreen)}
            {/* </Navbar.Toggle> */}
            {SectionLink("Certifications","/certifications", isSmallScreen)}
          </Nav>
          <div className="header_right">
            {Object.entries(socials).map(([k, v], i) => (
              <SocialComponent key={i.toString()} social={v} />
            ))}
          </div>
        </Navbar.Collapse>
      </Navbar>
      {isSmallScreen && isHome && <Profile />}
    </>
  );
};
export default Header;
