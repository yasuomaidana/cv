import { HomeRounded } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import socials from "../../utils/socials";
import { SocialComponent } from "./SocialComponent/SocialComponent";
import "./Header.scss";
import Profile from "../Profile/Profile";
import { md } from "../../utils/breakpoints";


const Header = () => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const [isHome, setIsHome] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);
  const tabRefColl = useRef<HTMLDivElement>(null);
  const tabRefTogg = useRef<HTMLButtonElement>(null);


  const SectionLink = (title: string, link: string, isSmall: boolean) => 
  <NavLink
    to={link}
    className={({ isActive, isPending }) =>
      isActive ? "header_active" : "header_link"
    }
    onClick={handleToggle}
  >
    {title}
  </NavLink>

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth <= md); // Adjust the screen size threshold as needed
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


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tabRefTogg.current && !tabRefTogg.current.contains(event.target as Node) && !tabRefColl.current?.contains(event.target as Node)) {
        // Click occurred outside the tab, handle it here
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggle = () => setExpanded(current => !current);

  return (
    <>
      <Navbar sticky="top" expand="lg" className="header" expanded={expanded}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            "home_icon " + (isActive ? "home_link_active" : "home_link")
          }
          onClick={()=> setExpanded(false)}
        >
          <Navbar.Brand>
            <HomeRounded />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle ref={tabRefTogg} onClick={handleToggle} />
        <Navbar.Collapse ref={tabRefColl}>
          <Nav className="header_left">
            {/* <Navbar.Toggle className="menu_toggler"> */}
            {SectionLink("Portfolio","/portfolio", isSmallScreen)}
            {/* </Navbar.Toggle> */}
            {SectionLink("Certifications","/certifications", isSmallScreen)}
          </Nav>
          <div className="header_right">
            {Object.entries(socials).map(([k, v], i) => (
              <SocialComponent key={i.toString()} social={v} handler={handleToggle}/>
            ))}
          </div>
        </Navbar.Collapse>
      </Navbar>
      {isSmallScreen && isHome && <Profile />}
    </>
  );
};
export default Header;
