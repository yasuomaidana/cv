import React from "react";
import "./scss/App.scss";
import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Container className="AppContainer">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          // style={{ backgroundColor: "blue" }}
        >
          <Profile />
        </Grid>
        <Grid
          item
          xs
          className="Content"
          // style={{ backgroundColor: "red" }}
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
