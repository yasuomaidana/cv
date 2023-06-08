import React from "react";
import "./Home.scss";
import BoxWithTitle from "../../components/BoxWithTitle/BoxWithTitle";
import { about_me } from "../../utils/about_me_info";
import Resume from "./Resume/Resume";
const Home = () => {
  return (
    <>
      <BoxWithTitle title="About me" content={about_me}/>
      <hr/>
      <BoxWithTitle title="Resume" content={<Resume/>}/>
      <BoxWithTitle title="Education" content={<>Random jijitl help me!!!</>}/>
      <hr/>
      <BoxWithTitle title="Skills" content={<>Random jijitl help me!!!</>}/>
      <hr/>
    </>
  );
};

export default Home;
