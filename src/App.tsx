import React, { useEffect, useState } from "react";
import "./scss/App.scss";
import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Certifications from "./pages/Certifications/Certifications";
import { md } from "./utils/breakpoints";

const App: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

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

  return (
    <Container className="AppContainer">
      <Grid container>
        {!isSmallScreen && (
          <Grid item xs={12} md={4}>
            {" "}
            <Profile />
          </Grid>
        )}

        <Grid item xs className="Content">
          <BrowserRouter>
            <Header/>
            <main>
              <Routes>
                <Route path="/" element={<Navigate to="/yasuo_maidana" replace />} />
                <Route path="/:profile_name/" >
                  <Route path="" element={<Home />} />
                  <Route path="portfolio" element={<Portfolio />} />
                  <Route path="certifications" element={<Certifications />} />
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
          <Footer></Footer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
