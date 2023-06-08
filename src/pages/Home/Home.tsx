import React from "react";
import "./Home.scss";
import BoxWithTitle from "../../components/BoxWithTitle/BoxWithTitle";
import { about_me } from "../../utils/about_me_info";
const Home = () => {
  return (
    <>
      <BoxWithTitle title="About me" content={about_me}/>
      {/* <Grid container className="section">
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
            
          </Typography>
        </Grid>
      </Grid> */}
      <hr/>
      <BoxWithTitle title="Education" content={<>Random jijitl help me!!!</>}/>
      <hr/>
      <BoxWithTitle title="Skills" content={<>Random jijitl help me!!!</>}/>
      <hr/>
    </>
  );
};

export default Home;
