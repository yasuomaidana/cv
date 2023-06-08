import React, { useEffect, useState } from "react";
import "./scss/App.scss";
import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Home/Resume/Resume";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
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

  return (
    <Container className="AppContainer">
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
        >
          {!isSmallScreen && <Profile />}
        </Grid>
        <Grid
          item
          xs
          className="Content"
        >
          <BrowserRouter>
            <Header></Header>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </main>
          </BrowserRouter>
          <Footer></Footer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
