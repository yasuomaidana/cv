import React from "react";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import "./profile.scss";
import WorkIcon from '@mui/icons-material/Work';
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  const profile_info = [
    <ProfileInfo title="Name" content="Yasuo Ignacio Maidana Perez" />,
    <ProfileInfo title="Birthday" content="Yasuo Ignacio Maidana Perez" />,
    <ProfileInfo title="Occupation" content="Masters degree student" />,
    <ProfileInfo title="Email" content="Yasuo Ignacio Maidana Perez" />,
  ];
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Yasuo Maidana</Typography>
        <Typography className="title">Master of Engineering (M1)</Typography>
      </div>
      <figure className="profile_image">
        <img
          src={require("../../assets/images/profile picture.jpg")}
          alt="Profile"
        />
      </figure>

      <div className="profile_information">
        <TimeLine
          title="Yasuo Ignacio Maidana Pérez"
          children={profile_info}
          icon={<WorkIcon />}
        ></TimeLine>
      </div>
    </div>
  );
};

export default Profile;
