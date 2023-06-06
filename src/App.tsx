import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Container, Grid } from '@mui/material';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor:'blue'}}>
          <Profile/>
        </Grid>
        <Grid item xs style={{backgroundColor:'red'}}>
          Header<br/>
          Porfolio
          Resume<br/>
          Footer

        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
