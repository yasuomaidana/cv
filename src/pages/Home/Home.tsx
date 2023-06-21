import React from "react";
import "./Home.scss";
import BoxWithTitle from "../../components/BoxWithTitle/BoxWithTitle";
import { about_me } from "../../utils/about_me_info";
import Resume from "./Resume/Resume";
import Skills from "./Skills/SkillsComponent";
import AchievementsComponent from "./Achievements/AchievementsComponent";
import PublicationsComponent from "./Publications/PublicationsComponent";
const Home = () => {
  return (
    <>
      <BoxWithTitle title="About me" content={about_me}/>
      <hr/>
      <BoxWithTitle title="Resume" content={<Resume/>}/>
      <hr/>
      <BoxWithTitle title="Skills" content={<Skills/>}/>
      <hr/>
      <BoxWithTitle title="Achievements" content={<AchievementsComponent/>}/>
      <hr/>
      <BoxWithTitle title="Publications" content={<PublicationsComponent/>}/>
    </>
  );
};

export default Home;
