import { HomeRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import socials from "../../utils/socials";
import { SocialComponent } from "./SocialComponent/SocialComponent";
import "./Header.scss";
import Profile from "../Profile/Profile";

const Header = ( ) => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const [isHome, setIsHome] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth <= 991); // Adjust the screen size threshold as needed
      console.log(screenWidth)
      console.log(isSmallScreen)
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
      setIsHome(location.pathname === "/")
      // Path has changed, perform any additional actions here
    }
  }, [location.pathname, path]);

  return (
    <>
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
    {isSmallScreen && isHome &&  <Profile />}
    </>
    
  );
};
export default Header;
