import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <Grid container className="section">
        <div className=" mb_30">
          <Grid item className="section_title">
            <span></span>
            <Typography variant="h6" className="text">
              About me
            </Typography>
          </Grid>
        </div>
        <Grid item xs={12}>
          <Typography variant="body2" component={"div"} className={"about_me_text"}>
            <p >
              I'm Yasuo an engineer that loves programming, robotics, research,
              3D printing ... and breaking things.
              <br />
              In few words, I enjoy learning new stuffs. I would like to think
              about myself as a scientist, at least I pursuing that spirit
              <br />
              If I should define me in few words, I would say that I'm a person
              who believe that through studying and compassion we can enhance
              our world.
              <br />
            </p>
            <ul>
              <li>
                Studying to understand how our world works, the reason why the
                things are the way they are, and how to enhance it.
              </li>
              <li>
                And compassion to integrate ourselfs and others to society.
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>

      <Grid container className="section">
        Education
      </Grid>
      <Grid container className="section">
        Skills
      </Grid>
      <Grid container className="section">
        Contact
      </Grid>
    </>
  );
};

export default Home;
