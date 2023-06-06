import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Container>
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
        <Grid item xs 
        // style={{ backgroundColor: "red" }}
        >
          <Header></Header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </BrowserRouter>
          <Footer></Footer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
